module.exports = function (value) {
  if (value === undefined) return 'Undefined'
  if (value === null) return 'Null'
  if (value === globalThis) return 'Global'
  if (Number.isNaN(value)) return 'NotNumber'
  if (value === Infinity || value === -Infinity) return 'InfiniteNumber'
  return value?.constructor?.name || 'Dictionary'
}
