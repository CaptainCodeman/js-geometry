export class Extendable {
  do<U extends any[], R>(f: (...args: U) => R, ...args: U): R {
    return f.apply(this, args)
  }
}