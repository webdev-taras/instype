# instype

```text
instype(<value>) => <type_name>
```
Returns type of value or object instance.
This is an alternative to `typeof` that actually allows to avoid confusion between the type name and the class name.
Returns the name of Class (or constructor function, or reserved type name), for example:
'Object', 'Number', 'String', 'NotNumber', 'Global', 'Dictionary', 'Null', 'Array', etc.

## Usage

```javascript
const instype = require('instype')

instype(undefined) //=> 'Undefined'

instype(null) //=> 'Null' but not 'object'

instype(true) //=> 'Boolean'

instype(false) //=> 'Boolean'

instype(new Boolean(true)) //=> 'Boolean' but not 'object'

instype(new MyClass()) //=> 'MyClass' but not 'object'

instype(42) //=> 'Number'

instype(new Number(42)) //=> 'Number' but not 'object'

instype(1/0) //=> 'InfiniteNumber' but not 'number'

instype(-Infinity) //=> 'InfiniteNumber' but not 'number'

instype(NaN) //=> 'NotNumber' but not 'number'

instype('str') //=> 'String'

instype(new String('str')) //=> 'String' but not 'object'

instype({}) //=> 'Object'

instype(Object.create(null)) //=> 'Dictionary' but not 'object'

instype(new Object()) //=> 'Object'

instype(new Date()) //=> 'Date'

instype([1, 2, 3]) //=> 'Array'

instype(/a-z/) //=> 'RegExp' but not 'object'

instype(new RegExp('foo')) //=> 'RegExp' but not 'object'

instype(new Error('error')) //=> 'Error'

instype(new ReferenceError('')) //=> 'ReferenceError'

instype(function () {}) //=> 'Function'

instype(async function () {}) //=> 'AsyncFunction'

instype(() => {}) //=> 'Function'

instype(function * () {}) //=> 'GeneratorFunction'

instype(Symbol('str')) //=> 'Symbol'

instype(new Map()) //=> 'Map'

instype(new Int8Array()) //=> 'Int8Array'

instype(window) //=> 'Global' but not 'object'
```

## Reserved type names

Reserved type names make possible to distinguish type of some special values from values with the real type.
Historically, accessing the global object has required different syntax in different JavaScript environments. On the web you can use `window`, `self`, `frames`, in Node.js you must instead use `global` and type of this global value is 'object'. Also there are not straightforward situations with `null`, `NaN` and `Infinity` values.
To determine the type of such values the `instype` function returns the following type names:

- **'Undefined'** for `undefined` (typeof(undefined) -> 'undefined')
- **'Null'** for `null` (typeof(null) -> 'object')
- **'Global'** for `global`, `window`, etc. (typeof(global) -> 'object')
- **'NotNumber'** for `NaN` (typeof(NaN) -> 'number')
- **'InfiniteNumber'** for `Infinity` or `-Infinity` (typeof(Infinity) -> 'number')
- **'Dictionary'** for `object without prototype` (typeof(Object.create(null)) -> 'object') that was created by `Object.create(null)`

## Install

> Install on Node.JS with [npm](https://www.npmjs.com/)

```bash
npm install instype
```

## License

MIT © [Taras Panasyuk](webdev.taras@gmail.com)
