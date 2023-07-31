class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Triangle extends Shape {
  area() {
    return (this.width * this.height) / 2;
  }
}

class Rectangle extends Shape {
  area() {
    return 2 * (this.width + this.height);
  }
}

let tr1 = new Triangle(15, 10);
let rec1 = new Rectangle(15, 20);
console.log(rec1.area());
console.log(tr1.area());
