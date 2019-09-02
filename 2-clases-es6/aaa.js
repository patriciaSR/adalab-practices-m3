'use strict';

class Polygon {
  constructor (numberOfSides, base, height) {
    this.numberOfSides = numberOfSides;
	this.base = base;
	this.height = height;
  }
  perimeter() {
	return this.base * this.numberOfSides;
  }
  area() {
	return this.base * this.height;
  }
}

class Square extends Polygon {
  constructor (base) {
    super(4, base, base);
    // this.side = base; -> Es lo mismo
    this.side = this.base;
  }
}

class Triangle extends Polygon {
  constructor (base, height) {
    super(3, base, height);
    // this.side = base; -> Es lo mismo
    this.side = this.base;
  }
  area() {
    return super.area() / 2;
    }
  
}


