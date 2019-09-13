import { Extendable } from './extendable'
import { Point, middle, add, sub, scale } from "./point";

export class Rect extends Extendable{
  constructor(readonly min: Point, readonly max: Point) {
    super()
  }

  get width() { return this.max.x - this.min.x }
  get height() { return this.max.y - this.min.y }
}

export function SizedRect(width: number, height: number) {
  return new Rect(new Point(0, 0), new Point(width, height))
}

export function overlaps(this: Rect, r: Rect): boolean {
  return this.min.x < r.max.x && r.min.x < this.max.x &&
         this.min.y < r.max.y && r.min.y < this.max.y
}

export function intersect(this: Rect, r: Rect) {
  return new Rect(
    new Point(Math.max(this.min.x, r.min.x), Math.max(this.min.y, r.min.y)),
    new Point(Math.min(this.max.x, r.max.x), Math.min(this.max.y, r.max.y))
  )
}

export function resize(this: Rect, s: number) {
  return new Rect(
    this.min.do(scale, s),
    this.max.do(scale, s)
  )
}

export function addP(this: Rect, p: Point) {
  return new Rect(
    this.min.do(add, p),
    this.max.do(add, p)
  )
}

export function subP(this: Rect, p: Point) {
  return new Rect(
    this.min.do(sub, p),
    this.max.do(sub, p)
  )
}

export function center(this: Rect) {
  return this.min.do(middle, this.max)
}

export function invert(this: Rect, r: Rect) {
  const w = this.width / r.width
  const h = this.height / r.height
  const min = this.min.do(sub, r.min)
  return new Rect(
    min,
    min.do(add, new Point(w, h))
  )
}