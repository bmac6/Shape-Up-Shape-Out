const shapeContainer = document.getElementById("shape-container");
const squareButton = document.getElementById("squareButton");
const circleButton = document.getElementById("circleButton");
const rectangleButton = document.getElementById("recButton");
const triangleButton = document.getElementById("triangleButton");

rectangleButton.addEventListener(
  "click",
  () =>
    new Rectangle(
      document.getElementById("rec-width").value,
      document.getElementById("rec-height").value
    )
);
squareButton.addEventListener(
  "click",
  () => new Square(document.getElementById("square-length").value)
);
circleButton.addEventListener(
  "click",
  () => new Circle(document.getElementById("circle-radius").value)
);
triangleButton.addEventListener(
  "click",
  () => new Triangle(document.getElementById("triangle-height").value)
);

class Shape {
  constructor() {
    this.shape = document.createElement("div");
    this.shape.classList.add("shape");
    this.shape.addEventListener("click", () => this.shapeSpecs());
    this.shape.addEventListener("dblclick", () =>
      shapeContainer.removeChild(this.shape)
    );
    shapeContainer.appendChild(this.shape);
    this.shape.style.top = `${Math.floor(
      Math.random() * (600 - this.shape.style.height)
    )}px`;
    this.shape.style.left = `${Math.floor(
      Math.random() * (600 - this.shape.style.width)
    )}px`;
  }

  shapeSpecs() {
    document.getElementById(
      "shape-name-specs"
    ).innerText = `Shape Name: ${this.shape.shapeName}`;
    document.getElementById(
      "shape-width-specs"
    ).innerText = `Width: ${this.shape.width}`;
    document.getElementById(
      "shape-height-specs"
    ).innerText = `Height: ${this.shape.height}`;
    document.getElementById(
      "shape-radius-specs"
    ).innerText = `Radius: ${this.shape.radius}`;
    document.getElementById(
      "shape-area-specs"
    ).innerText = `Area: ${this.shape.area}`;
    document.getElementById(
      "shape-perimeter-specs"
    ).innerText = `Perimeter: ${this.shape.perimeter}`;
  }
}

class Square extends Shape {
  constructor(sideLength) {
    super();
    this.sideLength = sideLength;
    this.shape.shapeName = "Square";
    this.shape.style.height = `${this.sideLength}px`;
    this.shape.style.width = `${this.sideLength}px`;
    this.shape.style.backgroundColor = "red";
    this.getNums();
  }

  getNums() {
    this.shape.height = `${this.sideLength}`;
    this.shape.width = `${this.sideLength}`;
    this.shape.radius = "N/A";
    this.shape.area = this.sideLength ** 2;
    this.shape.perimeter = 4 * this.sideLength;
  }
}

class Rectangle extends Shape {
  constructor(height, width) {
    super();
    this.height = height;
    this.width = width;
    this.shape.shapeName = "Rectangle";
    this.shape.style.height = `${this.height}px`;
    this.shape.style.width = `${this.width}px`;
    this.shape.style.backgroundColor = "green";
    this.getNums();
  }

  getNums() {
    this.shape.height = `${this.height}`;
    this.shape.width = `${this.width}`;
    this.shape.radius = "N/A";
    this.shape.area = this.height * this.width;
    this.shape.perimeter = 2 * this.height + 2 * this.width;
  }
}

class Triangle extends Shape {
  constructor(height) {
    super();
    this.height = height;
    this.shape.shapeName = "Triangle";
    this.shape.classList.add("triangle");
    this.shape.style.borderTopWidth = `${this.height}px`;
    this.shape.style.borderRightWidth = `${this.height}px`;
    this.getNums();
  }

  getNums() {
    this.shape.height = `${this.height}`;
    this.shape.width = `${this.height}`;
    this.shape.radius = "N/A";
    this.shape.area = Math.round(0.5 * (this.height * this.height));
    this.shape.perimeter = Math.round(
      2 * this.height + Math.sqrt(2) * this.height
    );
  }
}
