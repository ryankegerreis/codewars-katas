const str = 'bitcoin take over the world maybe who knows'

function findShort(s) {
  return s.split(' ').reduce((a, b) => a.length <= b.length ? a : b).length
}

findShort(str)