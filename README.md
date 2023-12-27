# General utilities
## jSTrimMask
A formatter for use with `JSON.stringify` where long string properties or secrets are involved.
```js
JSON.stringify(obj, jSTrimMask({ trim: 60, mask: ['field1', 'field2']}, 2)
```
`trim` and `mask` properties are both optional.

It performs the following functions:
* trims all string properties to a length limit specified by `trim`
* replaces all string fields listed in the `mask` array with obfuscation text
* 
