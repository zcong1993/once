# once

[![NPM version](https://img.shields.io/npm/v/@zcong/once.svg?style=flat)](https://npmjs.com/package/@zcong/once) [![NPM downloads](https://img.shields.io/npm/dm/@zcong/once.svg?style=flat)](https://npmjs.com/package/@zcong/once) [![CircleCI](https://circleci.com/gh/zcong1993/once/tree/master.svg?style=shield)](https://circleci.com/gh/zcong1993/once/tree/master) [![codecov](https://codecov.io/gh/zcong1993/once/branch/master/graph/badge.svg)](https://codecov.io/gh/zcong1993/once) [![typedoc](https://img.shields.io/badge/typedoc-active-brightgreen.svg)](https://zcong1993.github.io/once)

> sync once helper

## Install

```sh
$ yarn add @zcong/once
```

## Example

```ts
import Once from '@zcong/once'

class Test {}

// f only be called for the first time
const f = async () => new Test()
for (const _ of Array(10)) {
  const test: Test = once.syncOnce<Test>('test', mockFn)
  // test is Test instance which is f() returned.
}
```

## License

MIT &copy; zcong1993
