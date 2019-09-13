import { expect } from 'chai';
import { Point } from './point'
import { Rect, addP, subP, invert, center, resize, overlaps, intersect } from './rect'

describe('rect', () => {
  it('should set the values', () => {
    const r = new Rect(new Point(1, 2), new Point(7, 6))
    expect(r.min.x).to.equal(1)
    expect(r.min.y).to.equal(2)
    expect(r.max.x).to.equal(7)
    expect(r.max.y).to.equal(6)
    expect(r.width).to.equal(6)
    expect(r.height).to.equal(4)
  })

  it('should calc the dimensions', () => {
    const r = new Rect(new Point(1, 2), new Point(6, 9))
    expect(r.width).to.equal(5)
    expect(r.height).to.equal(7)
  })

  it('should add a point', () => {
    const r = new Rect(new Point(1, 2), new Point(3, 4)).do(addP, new Point(2, 3))
    expect(r.min.x).to.equal(3)
    expect(r.min.y).to.equal(5)
    expect(r.max.x).to.equal(5)
    expect(r.max.y).to.equal(7)
  })

  it('should subtract a point', () => {
    const r = new Rect(new Point(5, 6), new Point(8, 9)).do(subP, new Point(3, 1))
    expect(r.min.x).to.equal(2)
    expect(r.min.y).to.equal(5)
    expect(r.max.x).to.equal(5)
    expect(r.max.y).to.equal(8)
  })

  it('should invert a rect', () => {
    const r1 = new Rect(new Point(5, 6), new Point(8, 9))
    const r2 = new Rect(new Point(1, 2), new Point(3, 4))
    const r = r1.do(invert, r2)
    expect(r.min.x).to.equal(4)
    expect(r.min.y).to.equal(4)
    expect(r.max.x).to.equal(5.5)
    expect(r.max.y).to.equal(5.5)
    expect(r.width).to.equal(1.5)
    expect(r.height).to.equal(1.5)
  })

  it('should resize', () => {
    let r = new Rect(new Point(4, 6), new Point(6, 8)).do(resize, 2)
    expect(r.min.x).to.equal(8)
    expect(r.min.y).to.equal(12)
    expect(r.max.x).to.equal(12)
    expect(r.max.y).to.equal(16)
    expect(r.width).to.equal(4)
    expect(r.height).to.equal(4)

    r = new Rect(new Point(4, 6), new Point(6, 8)).do(resize, 0.5)
    expect(r.min.x).to.equal(2)
    expect(r.min.y).to.equal(3)
    expect(r.max.x).to.equal(3)
    expect(r.max.y).to.equal(4)
    expect(r.width).to.equal(1)
    expect(r.height).to.equal(1)
  })

  it('should calc center', () => {
    const p = new Rect(new Point(4, 6), new Point(6, 8)).do(center)
    expect(p.x).to.equal(5)
    expect(p.y).to.equal(7)
  })

  it('should determine overlaps', () => {
    const r = new Rect(new Point(4, 6), new Point(6, 8))
    expect(r.do(overlaps, (new Rect(new Point(0, 0), new Point(5, 7))))).to.equal(true)
    expect(r.do(overlaps, (new Rect(new Point(5, 7), new Point(10, 10))))).to.equal(true)
    expect(r.do(overlaps, (new Rect(new Point(0, 0), new Point(10, 10))))).to.equal(true)
    expect(r.do(overlaps, (new Rect(new Point(0, 0), new Point(4, 6))))).to.equal(false)
    expect(r.do(overlaps, (new Rect(new Point(0, 0), new Point(4, 8))))).to.equal(false)
  })

  it('should calc intersect', () => {
    const r = new Rect(new Point(4, 6), new Point(6, 8))

    let i = r.do(intersect, new Rect(new Point(0, 0), new Point(5, 7)))
    expect(i.min.x).to.equal(4)
    expect(i.min.y).to.equal(6)
    expect(i.max.x).to.equal(5)
    expect(i.max.y).to.equal(7)

    i = r.do(intersect, new Rect(new Point(0, 0), new Point(10, 10)))
    expect(i.min.x).to.equal(4)
    expect(i.min.y).to.equal(6)
    expect(i.max.x).to.equal(6)
    expect(i.max.y).to.equal(8)

    i = r.do(intersect, new Rect(new Point(5, 7), new Point(10, 10)))
    expect(i.min.x).to.equal(5)
    expect(i.min.y).to.equal(7)
    expect(i.max.x).to.equal(6)
    expect(i.max.y).to.equal(8)
  })
})
