export type func<T = any> = () => Promise<T>
export type syncFunc<T = any> = () => T

class Once {
  private onceMap = new Map<string, any>()
  /**
   * once calls the function f if and only if once is being called for the
   * first time for this instance of Once.
   * @param key cache group key, should be unique
   * @param f func to be invoked for the first time
   * @param force if set true, will force invoke f and update cache
   */
  async once<T = any>(
    key: string,
    f: func<T>,
    force: boolean = false
  ): Promise<T> {
    if (this.onceMap.has(key) && !force) {
      return this.onceMap.get(key) as Promise<T>
    }
    const instance = await f()
    this.onceMap.set(key, instance)
    return instance
  }

  /**
   * sync version of once
   * @param key cache group key, should be unique
   * @param f func to be invoked for the first time
   * @param force if set true, will force invoke f and update cache
   */
  syncOnce<T = any>(key: string, f: syncFunc<T>, force: boolean = false): T {
    if (this.onceMap.has(key) && !force) {
      return this.onceMap.get(key) as T
    }
    const instance = f()
    this.onceMap.set(key, instance)
    return instance
  }

  /**
   * delete remove cache by group key
   * @param key cache group key
   */
  delete(key: string) {
    this.onceMap.delete(key)
  }
}

export default new Once()
