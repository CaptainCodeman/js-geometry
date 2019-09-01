import { expect } from 'chai';
import { Point, add, sub, scale, midpoint, difference, distance, distanceSquared } from './point'

describe('point', () => {
  it('should save the values', () => {
    const p = new Point(123.4, 567.8)
    expect(p.x).to.equal(123.4)
    expect(p.y).to.equal(567.8)
  })

  it('should add correctly', () => {
    let p = new Point(5, 6).do(add, new Point(2, 4))
    expect(p.x).to.equal(7)
    expect(p.y).to.equal(10)

    p = new Point(5, 6).do(add, new Point(-2, -4))
    expect(p.x).to.equal(3)
    expect(p.y).to.equal(2)
  })

  it('should sub correctly', () => {
    let p = new Point(5, 6).do(sub, new Point(2, 4))
    expect(p.x).to.equal(3)
    expect(p.y).to.equal(2)

    p = new Point(5, 6).do(sub, new Point(-2, -4))
    expect(p.x).to.equal(7)
    expect(p.y).to.equal(10)
  })

  it('should scale correctly', () => {
    let p = new Point(5, 6).do(scale, 2)
    expect(p.x).to.equal(10)
    expect(p.y).to.equal(12)

    p = new Point(5, 6).do(scale, 0.5)
    expect(p.x).to.equal(2.5)
    expect(p.y).to.equal(3)
  })

  it('should calc midpoints', () => {
    let p = new Point(5, 6).do(midpoint, new Point(9, 8))
    expect(p.x).to.equal(7)
    expect(p.y).to.equal(7)

    p = new Point(5, 6).do(midpoint, new Point(1, 2))
    expect(p.x).to.equal(3)
    expect(p.y).to.equal(4)
  })

  it('should calc difference', () => {
    let p = new Point(5, 6).do(difference, new Point(9, 8))
    expect(p.x).to.equal(4)
    expect(p.y).to.equal(2)

    p = new Point(5, 6).do(difference, new Point(1, 2))
    expect(p.x).to.equal(-4)
    expect(p.y).to.equal(-4)
  })

  it('should calc distance squared', () => {
    let d = new Point(5, 6).do(distanceSquared, new Point(9, 8))
    expect(d).to.equal(20)

    d = new Point(5, 6).do(distanceSquared, new Point(1, 2))
    expect(d).to.equal(32)
  })

  it('should calc distance', () => {
    let d = new Point(5, 6).do(distance, new Point(9, 8))
    expect(d).to.within(4.47213, 4.47214)

    d = new Point(5, 6).do(distance, new Point(1, 2))
    expect(d).to.within(5.65685, 5.65686)
  })
})
