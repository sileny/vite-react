export function upper(str) {
  return str.replace(/\s+/g, '').split('-').filter(Boolean).map(e => e[0].toUpperCase() + e.substring(1, e.length)).join('')
}
