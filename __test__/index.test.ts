import once from '../src'

it('should work well', () => {
  const mockReturn = 'test'
  const mockFn = jest.fn().mockReturnValue(mockReturn)

  for (const _ of Array(10)) {
    const res: string = once.syncOnce<string>('test', mockFn)
    expect(res).toBe(mockReturn)
  }

  expect(mockFn).toBeCalledTimes(1)
  const res: string = once.syncOnce<string>('test', mockFn, true)
  expect(res).toBe(mockReturn)
  expect(mockFn).toBeCalledTimes(2)

  once.delete('test')
  const res1: string = once.syncOnce<string>('test', mockFn)
  expect(res1).toBe(mockReturn)
  expect(mockFn).toBeCalledTimes(3)
})

it('complex example', () => {
  class Test {
    private n: string
    constructor(n: string) {
      this.n = n
    }
  }
  const mockReturn = new Test('test')
  const mockFn = jest.fn().mockReturnValue(mockReturn)

  for (const _ of Array(10)) {
    const res: Test = once.syncOnce<Test>('test1', mockFn)
    expect(res).toBe(mockReturn)
  }

  expect(mockFn).toBeCalledTimes(1)
  const res: Test = once.syncOnce<Test>('test1', mockFn, true)
  expect(res).toBe(mockReturn)
  expect(mockFn).toBeCalledTimes(2)
})

it('async example', async () => {
  class Test {
    private n: string
    constructor(n: string) {
      this.n = n
    }
  }
  const mockReturn = new Test('test')
  const mockFn = jest.fn().mockResolvedValue(mockReturn)

  for (const _ of Array(10)) {
    const res: Test = await once.once<Test>('test2', mockFn)
    expect(res).toBe(mockReturn)
  }

  expect(mockFn).toBeCalledTimes(1)
  const res: Test = await once.once<Test>('test2', mockFn, true)
  expect(res).toBe(mockReturn)
  expect(mockFn).toBeCalledTimes(2)
})
