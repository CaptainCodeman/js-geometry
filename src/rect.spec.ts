import { expect } from 'chai';
import { Point } from './point'
import { Rect, add, sub, scale, middle, overlaps, intersect } from './rect'

describe('rect', () => {
  it('should save the values', () => {
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

  it('should add correctly', () => {
    const r = new Rect(new Point(1, 2), new Point(3, 4)).do(add, new Point(2, 3))
    expect(r.min.x).to.equal(3)
    expect(r.min.y).to.equal(5)
    expect(r.max.x).to.equal(5)
    expect(r.max.y).to.equal(7)
  })

  it('should sub correctly', () => {
    const r = new Rect(new Point(5, 6), new Point(8, 9)).do(sub, new Point(3, 1))
    expect(r.min.x).to.equal(2)
    expect(r.min.y).to.equal(5)
    expect(r.max.x).to.equal(5)
    expect(r.max.y).to.equal(8)
  })

  it('should scale correctly', () => {
    let r = new Rect(new Point(4, 6), new Point(6, 8)).do(scale, 2)
    expect(r.min.x).to.equal(8)
    expect(r.min.y).to.equal(12)
    expect(r.max.x).to.equal(12)
    expect(r.max.y).to.equal(16)
    expect(r.width).to.equal(4)
    expect(r.height).to.equal(4)

    r = new Rect(new Point(4, 6), new Point(6, 8)).do(scale, 0.5)
    expect(r.min.x).to.equal(2)
    expect(r.min.y).to.equal(3)
    expect(r.max.x).to.equal(3)
    expect(r.max.y).to.equal(4)
    expect(r.width).to.equal(1)
    expect(r.height).to.equal(1)
  })

  it('should calc middle', () => {
    const p = new Rect(new Point(4, 6), new Point(6, 8)).do(middle)
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
