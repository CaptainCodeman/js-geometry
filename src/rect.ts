import { Extendable } from './extendable'
import { Point, midpoint, add as addPoint, sub as subPoint, scale as scalePoint } from "./point";

export class Rect extends Extendable{
  constructor(readonly min: Point, readonly max: Point) {
    super()
  }

  get width() { return this.max.x - this.min.x }
  get height() { return this.max.y - this.min.y }
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

export function scale(this: Rect, s: number) {
  return new Rect(
    this.min.do(scalePoint, s),
    this.max.do(scalePoint, s)
  )
}

export function add(this: Rect, p: Point) {
  return new Rect(
    this.min.do(addPoint, p),
    this.max.do(addPoint, p)
  )
}

export function sub(this: Rect, p: Point) {
  return new Rect(
    this.min.do(subPoint, p),
    this.max.do(subPoint, p)
  )
}

export function middle(this: Rect) {
  return this.min.do(midpoint, this.max)
}
