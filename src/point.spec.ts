import { expect } from 'chai';
import { Point, add, sub, scale, middle, diff, dist, distSq } from './point'

describe('point', () => {
  it('should set the values', () => {
    const p = new Point(123.4, 567.8)
    expect(p.x).to.equal(123.4)
    expect(p.y).to.equal(567.8)
  })

  it('should add a point', () => {
    let p = new Point(5, 6).do(add, new Point(2, 4))
    expect(p.x).to.equal(7)
    expect(p.y).to.equal(10)

    p = new Point(5, 6).do(add, new Point(-2, -4))
    expect(p.x).to.equal(3)
    expect(p.y).to.equal(2)
  })

  it('should subtract a point', () => {
    let p = new Point(5, 6).do(sub, new Point(2, 4))
    expect(p.x).to.equal(3)
    expect(p.y).to.equal(2)

    p = new Point(5, 6).do(sub, new Point(-2, -4))
    expect(p.x).to.equal(7)
    expect(p.y).to.equal(10)
  })

  it('should scale up and down', () => {
    let p = new Point(5, 6).do(scale, 2)
    expect(p.x).to.equal(10)
    expect(p.y).to.equal(12)

    p = new Point(5, 6).do(scale, 0.5)
    expect(p.x).to.equal(2.5)
    expect(p.y).to.equal(3)
  })

  it('should calc middle', () => {
    let p = new Point(5, 6).do(middle, new Point(9, 8))
    expect(p.x).to.equal(7)
    expect(p.y).to.equal(7)

    p = new Point(5, 6).do(middle, new Point(1, 2))
    expect(p.x).to.equal(3)
    expect(p.y).to.equal(4)
  })

  it('should calc difference', () => {
    let p = new Point(5, 6).do(diff, new Point(9, 8))
    expect(p.x).to.equal(4)
    expect(p.y).to.equal(2)

    p = new Point(5, 6).do(diff, new Point(1, 2))
    expect(p.x).to.equal(-4)
    expect(p.y).to.equal(-4)
  })

  it('should calc distance squared', () => {
    let d = new Point(5, 6).do(distSq, new Point(9, 8))
    expect(d).to.equal(20)

    d = new Point(5, 6).do(distSq, new Point(1, 2))
    expect(d).to.equal(32)
  })

  it('should calc distance', () => {
    let d = new Point(5, 6).do(dist, new Point(9, 8))
    expect(d).to.within(4.47213, 4.47214)

    d = new Point(5, 6).do(dist, new Point(1, 2))
    expect(d).to.within(5.65685, 5.65686)
  })
})
