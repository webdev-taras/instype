const test = require('ava')
const instype = require('../')

test('reserved types', t => {
  t.is(instype(undefined), 'Undefined')
  t.is(instype(void 0), 'Undefined')
  t.is(instype(null), 'Null')
  t.is(instype(global), 'Global')
  t.is(instype(globalThis), 'Global')
  t.is(instype(NaN), 'NotNumber')
  t.is(instype(parseInt("blablabla")), 'NotNumber')
  t.is(instype(1/0), 'InfiniteNumber')
  t.is(instype(-Infinity), 'InfiniteNumber')
  t.is(instype(Object.create(null)), 'Dictionary')
})

test('primitive types', t => {
  t.is(instype(false), 'Boolean')
  t.is(instype(true), 'Boolean')
  t.is(instype(new Boolean(true)), 'Boolean')
  t.is(instype(42), 'Number')
  t.is(instype(new Number(42)), 'Number')
  t.is(instype(BigInt(Number.MAX_SAFE_INTEGER)), 'BigInt')
  t.is(instype('str'), 'String')
  t.is(instype(new String('str')), 'String')
  t.is(instype(Symbol('str')), 'Symbol')
})

test('function types', t => {
  t.is(instype(function () {}), 'Function')
  t.is(instype(() => {}), 'Function')
  t.is(instype(async function () {}), 'AsyncFunction')
  t.is(instype(function * () {}), 'GeneratorFunction')
})

test('object types', t => {
  t.is(instype({}), 'Object')
  t.is(instype(new Object()), 'Object')
  t.is(instype([]), 'Array')
  t.is(instype(new Array()), 'Array')
  t.is(instype(new Date()), 'Date')
  t.is(instype(/a-z/), 'RegExp')
  t.is(instype(new RegExp('foo')), 'RegExp')
  t.is(instype(new Error('error')), 'Error')
  t.is(instype(new ReferenceError('')), 'ReferenceError')
  t.is(instype(Promise.resolve()), 'Promise')
  t.is(instype(new Map()), 'Map')
  t.is(instype(new Int8Array()), 'Int8Array')
  t.is(instype(new BigInt64Array()), 'BigInt64Array')
  t.is(instype(new ArrayBuffer()), 'ArrayBuffer')
})

test('custom types', t => {
  class MyClass {}
  class MyUserClass extends MyClass {}
  t.is(instype(new MyClass()), 'MyClass')
  t.is(instype(new MyUserClass()), 'MyUserClass')
})
