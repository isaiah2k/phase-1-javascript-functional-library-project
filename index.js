function getValues(collection) {
  return Array.isArray(collection) ? collection : Object.values(collection)
}

function myEach(collection, callback) {
  let values = getValues(collection)
  for (let i = 0; i < values.length; i++) {
      callback(values[i], i, collection)
  }
  return collection
}

function myMap(collection, callback) {
  let values = getValues(collection)
  let result = []
  for (let i = 0; i < values.length; i++) {
      result.push(callback(values[i], i, collection))
  }
  return result
}

function myReduce(collection, callback, acc) {
  let values = getValues(collection)
  let startIndex = 0
  if (acc === undefined) {
      acc = values[0]
      startIndex = 1
  }
  for (let i = startIndex; i < values.length; i++) {
      acc = callback(acc, values[i], collection)
  }
  return acc
}

function myFind(collection, predicate) {
  let values = getValues(collection)
  for (let i = 0; i < values.length; i++) {
      if (predicate(values[i], i, collection)) {
          return values[i]
      }
  }
  return undefined
}

function myFilter(collection, predicate) {
  let values = getValues(collection)
  let result = []
  for (let i = 0; i < values.length; i++) {
      if (predicate(values[i], i, collection)) {
          result.push(values[i])
      }
  }
  return result
}

function mySize(collection) {
  return getValues(collection).length
}

function myFirst(array, n) {
  if (n === undefined) {
      return array[0]
  }
  return array.slice(0, n)
}

function myLast(array, n) {
  if (n === undefined) {
      return array[array.length - 1]
  }
  return array.slice(-n)
}

function myKeys(object) {
  let keys = []
  for (let key in object) {
      if (object.hasOwnProperty(key)) {
          keys.push(key)
      }
  }
  return keys
}

function myValues(object) {
  let values = []
  for (let key in object) {
      if (object.hasOwnProperty(key)) {
          values.push(object[key])
      }
  }
  return values
}