const WebSocket = require('ws');
const http = require('http');

function getJson(path, method = 'GET') {
  return new Promise((resolve, reject) => {
    const req = http.request(`http://localhost:9333${path}`, { method }, res => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve(JSON.parse(data)));
    });
    req.on('error', reject);
    req.end();
  });
}

(async () => {
  // open a new tab
  const tab = await getJson('/json/new?about:blank', 'PUT');
  const ws = new WebSocket(tab.webSocketDebuggerUrl);

  let id = 0;
  function send(method, params = {}) {
    return new Promise(resolve => {
      const msgId = ++id;
      const handler = (data) => {
        const msg = JSON.parse(data);
        if (msg.id === msgId) {
          ws.removeListener('message', handler);
          resolve(msg.result);
        }
      };
      ws.on('message', handler);
      ws.send(JSON.stringify({ id: msgId, method, params }));
    });
  }

  await new Promise(resolve => ws.on('open', resolve));
  await send('Page.enable');
  await send('Runtime.enable');
  ws.on('message', (data) => {
    const msg = JSON.parse(data);
    if (msg.method === 'Runtime.consoleAPICalled') {
      console.log('[console]', msg.params.type, msg.params.args.map(a => a.value || a.description).join(' '));
    }
    if (msg.method === 'Runtime.exceptionThrown') {
      console.log('[exception]', JSON.stringify(msg.params.exceptionDetails.exception));
    }
  });

  // Navigate to app first (to set localStorage on correct origin)
  await send('Page.navigate', { url: 'http://localhost:4200/login' });
  await new Promise(r => setTimeout(r, 2000));

  // Fake JWT: header.payload.signature with far-future exp
  const header = Buffer.from(JSON.stringify({ alg: 'HS256', typ: 'JWT' })).toString('base64url');
  const payload = Buffer.from(JSON.stringify({
    accountid: 1, instanceid: 1, roleId: 1, email: 'test@test.com', exp: 9999999999
  })).toString('base64url');
  const fakeToken = `${header}.${payload}.fakesig`;

  const setStorage = `
    localStorage.setItem('token', '${fakeToken}');
    localStorage.setItem('userEmail', 'test@test.com');
    localStorage.setItem('userData', JSON.stringify({roleId:1, accountid:1, instanceid:1, email:'test@test.com'}));
  `;
  await send('Runtime.evaluate', { expression: setStorage });

  // Navigate to account page
  await send('Page.navigate', { url: 'http://localhost:4200/pages/account' });
  await new Promise(r => setTimeout(r, 4000));

  const urlRes = await send('Runtime.evaluate', { expression: 'location.href' });
  console.log('current url:', JSON.stringify(urlRes.result));

  // Click the add button (toggleForm)
  const clickExpr = `
    (function(){
      const btns = Array.from(document.querySelectorAll('.add-btn'));
      if (btns[0]) { btns[0].click(); return 'clicked ' + btns.length; }
      return 'no button found, count=' + btns.length;
    })();
  `;
  const clickRes = await send('Runtime.evaluate', { expression: clickExpr });
  console.log('click result:', JSON.stringify(clickRes.result));
  await new Promise(r => setTimeout(r, 1000));

  // Type into Company Name field to trigger label float
  const typeExpr = `
    (function(){
      const inputs = Array.from(document.querySelectorAll('.form-container input[formcontrolname="companyname"], .form-container input'));
      if (inputs[0]) {
        inputs[0].focus();
        inputs[0].value = 'ABC Corp';
        inputs[0].dispatchEvent(new Event('input', {bubbles:true}));
        return 'typed, count=' + inputs.length;
      }
      return 'no input found';
    })();
  `;
  const typeRes = await send('Runtime.evaluate', { expression: typeExpr });
  console.log('type result:', JSON.stringify(typeRes.result));
  await new Promise(r => setTimeout(r, 800));

  const shot = await send('Page.captureScreenshot', { format: 'png' });
  require('fs').writeFileSync('C:/Users/sunda/AppData/Local/Temp/shots/account-add.png', Buffer.from(shot.data, 'base64'));
  console.log('saved');

  ws.close();
})();
