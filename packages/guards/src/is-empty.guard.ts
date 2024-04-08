export function isEmpty(value: unknown): boolean {
  if (typeof value === 'number' || typeof value === 'boolean') {
    return false
  }

  if (value instanceof Date) {
    return false
  }

  if (value === null || typeof value === 'undefined') {
    return true
  }

  if (Object.keys(value).length === 0 && value.constructor === Object) {
    return true
  }

  if (Array.isArray(value) && value.length === 0) {
    return true
  }

  if (typeof value === 'string' && value.trim() === '') {
    return true
  }

  return false
}
