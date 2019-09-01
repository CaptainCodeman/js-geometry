import { Extendable } from './extendable'

export class Point extends Extendable {
  constructor(readonly x: number, readonly y: number) {
    super()
  }
}

export function add(this: Point, p: Point) {
  return new Point(this.x + p.x, this.y + p.y)
}

export function sub(this: Point, p: Point) {
  return new Point(this.x - p.x, this.y - p.y)
}

export function scale(this: Point, s: number) {
  return new Point(this.x * s, this.y * s)
}

// euclidean midpoint
export function midpoint(this: Point, p: Point) {
  return new Point(Math.abs(this.x + p.x) / 2, Math.abs(this.y + p.y) / 2)
}

// squared euclidean distance
export function distanceSquared(this: Point, p: Point) {
  const dx = this.x - p.x
  const dy = this.y - p.y
  return dx * dx + dy * dy
}

// euclidean distance
export function distance(this: Point, p: Point) {
  return Math.sqrt(this.do(distanceSquared, p))
}

export function difference(this: Point, p: Point) {
  return new Point(p.x - this.x, p.y - this.y)
}