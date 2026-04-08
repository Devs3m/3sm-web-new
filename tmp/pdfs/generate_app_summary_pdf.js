const fs = require('fs');
const path = require('path');
const { jsPDF } = require('jspdf');

const outDir = path.join(process.cwd(), 'output', 'pdf');
fs.mkdirSync(outDir, { recursive: true });

const outputPath = path.join(outDir, '3sm-web-app-summary.pdf');
const doc = new jsPDF({
  orientation: 'portrait',
  unit: 'pt',
  format: 'a4',
});

const pageWidth = doc.internal.pageSize.getWidth();
const pageHeight = doc.internal.pageSize.getHeight();
const margin = 42;
const contentWidth = pageWidth - margin * 2;
let y = 38;

const colors = {
  ink: [28, 37, 48],
  muted: [92, 104, 118],
  accent: [33, 90, 160],
  rule: [212, 220, 228],
  panel: [246, 248, 251],
};

function textBlock(text, x, topY, width, opts = {}) {
  const fontSize = opts.fontSize || 10;
  const leading = opts.leading || 13;
  const color = opts.color || colors.ink;
  const style = opts.style || 'normal';
  doc.setFont('helvetica', style);
  doc.setFontSize(fontSize);
  doc.setTextColor(...color);
  const lines = doc.splitTextToSize(text, width);
  doc.text(lines, x, topY);
  return topY + lines.length * leading;
}

function section(title, bodyFn) {
  doc.setDrawColor(...colors.rule);
  doc.line(margin, y, pageWidth - margin, y);
  y += 15;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...colors.accent);
  doc.text(title, margin, y);
  y += 10;
  bodyFn();
  y += 8;
}

function bullet(text, indent = 14, width = contentWidth - 14) {
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(...colors.ink);
  doc.text('-', margin + 2, y);
  y = textBlock(text, margin + indent, y, width, { fontSize: 9.5, leading: 12 });
  y += 2;
}

doc.setFillColor(...colors.panel);
doc.roundedRect(margin, y - 8, contentWidth, 62, 8, 8, 'F');
doc.setFont('helvetica', 'bold');
doc.setFontSize(21);
doc.setTextColor(...colors.ink);
doc.text('3sm-web App Summary', margin + 14, y + 15);
doc.setFont('helvetica', 'normal');
doc.setFontSize(9.5);
doc.setTextColor(...colors.muted);
doc.text('Repo-based one-page overview', margin + 14, y + 31);
doc.setFontSize(8.5);
doc.text('Evidence source: Angular app, routes, services, environments, and repo docs.', margin + 14, y + 45);
y += 72;

section('What it is', () => {
  y = textBlock(
    '3sm-web is an Angular 16 single-page business application with login, JWT auth, route-guarded modules, and REST-backed CRUD workflows. Repo evidence shows modules for account and instance management, users and roles, product and tax masters, sales and inventory flows, finance, and DigiCard/VCard features.',
    margin,
    y,
    contentWidth,
    { fontSize: 9.6, leading: 12.5 }
  );
});

section("Who it's for", () => {
  y = textBlock(
    'Primary persona: internal admin and operations staff managing account-scoped or instance-scoped business data. Formal persona definition: Not found in repo.',
    margin,
    y,
    contentWidth,
    { fontSize: 9.6, leading: 12.5 }
  );
});

section('What it does', () => {
  [
    'Provides login plus forgot-password flows, then stores JWT, user data, and permissions in localStorage.',
    'Shows a route-guarded dashboard and admin screens for accounts, instances, users, user roles, city, GST, and VAT.',
    'Supports product, customer, and supplier management through dedicated lazy-loaded feature modules.',
    'Runs sales and inventory-sales workflows, including summaries, invoice numbering, edit flows, and printable sales output.',
    'Handles purchase, finance, receipts redirects, and ledger screens for products and sales.',
    'Includes DigiCard and public card routes, plus a VCard area backed by a separate VCard API base URL.',
  ].forEach((item) => bullet(item));
});

section('How it works', () => {
  [
    'Frontend: Angular SPA (`AppModule`) with lazy-loaded feature modules under `/pages` and a separate `/login` module.',
    'Access control: `RoleGuard` checks authentication plus resource/action permissions; Super Admin gets full access.',
    'Auth/data flow: login calls `/auth/login`; `AuthInterceptor` adds the token to API requests and logs out on HTTP 401.',
    'State: token, user profile, email, and login permissions are cached in localStorage; `PermissionService` normalizes permission keys for route and UI checks.',
    'Services/backend: feature services use `HttpClient` against `environment.apiUrl` (`https://api.connectsite.in` in default env). RBAC docs describe account-level vs instance-level scope and related `/rbac/...` endpoints.',
    'Persistence layer / database technology: Not found in repo. SQL files are present, but live backend storage is not defined here.',
  ].forEach((item) => bullet(item));
});

section('How to run', () => {
  [
    'Install dependencies: `npm install`.',
    'Start the app: `npm start`.',
    'Open `http://localhost:4200/`.',
    'Optional local API config: `npm run start:server` uses `environment.local-server.ts`.',
  ].forEach((item) => bullet(item));
});

doc.setFont('helvetica', 'normal');
doc.setFontSize(8);
doc.setTextColor(...colors.muted);
doc.text('Generated from repository evidence only.', margin, pageHeight - 20);

doc.save(outputPath);
console.log(outputPath);
