/**
 * Standard display format for numeric values in templates (Angular number pipe).
 * Use as: `{{ value | number: DISPLAY_NUMBER_DIGITS }}`
 */
export const DISPLAY_NUMBER_DIGITS = '1.2-2';

/** DevExpress column format for 2 decimal places (fixed point). */
export const DX_FORMAT_FIXED_2 = { type: 'fixedPoint' as const, precision: 2 };

/**
 * Formats a numeric value for display with exactly two fraction digits (en-IN).
 * Non-finite or NaN values fall back to a safe string for debugging.
 */
export function formatDisplayDecimal(value: number | string | null | undefined): string {
  if (value == null || value === '') {
    return '';
  }
  const n = typeof value === 'number' ? value : Number(value);
  if (Number.isNaN(n) || !Number.isFinite(n)) {
    return String(value);
  }
  return new Intl.NumberFormat('en-IN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(n);
}
