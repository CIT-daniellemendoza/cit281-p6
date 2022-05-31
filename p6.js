/*
    CIT 281 Project 6
    Danielle Mendoza

*/

//PART 4: Create and test Shape base class
class Shape {
    constructor(arr = []) {
        this.sides = arr
    }

    perimeter = () => this.sides.length > 1 ? (this.sides.reduce((acc, current) => acc + current, 0)) : 0
}

//const box = new Shape([1])
//console.log(box.perimeter())

//console.log(new Shape([5, 10]).perimeter());  // 15
//console.log(new Shape([1, 2, 3, 4, 5]).perimeter()); // 15
//console.log(new Shape().perimeter()); // 0

// PART 5 RECTANGLE: Implement and test Rectangle class

class Rectangle extends Shape {
    constructor(length = 0, width = 0) {
        super();
            this.sides = [length, width, length, width]
            this.length = length
            this.width = width
    }

    area = () => this.length*this.width
}

//console.log(new Rectangle(4, 4).perimeter());  // 16
//console.log(new Rectangle(4, 4).area());  // 16
//console.log(new Rectangle(5, 5).perimeter()); // 20
//console.log(new Rectangle(5, 5).area()); // 25
//console.log(new Rectangle().perimeter()); // 0
//console.log(new Rectangle().area()); // 0

// PART 5 TRIANGLE: Implement and test Triangle class

class Triangle extends Shape {
    constructor(sideA = 0, sideB = 0, sideC = 0) {
        super();
            this.sides = [sideA, sideB, sideC]
            this.sideA = sideA
            this.sideB = sideB
            this.sideC = sideC
    }

    area = () => {
        const s = (this.sideA + this.sideB + this.sideC)/2
        //console.log("check: ", s, this.sideA, this.sideB, this.sideC)
        return Math.sqrt(s*(s-this.sideA)*(s-this.sideB)*(s-this.sideC))
    }
}

//console.log(new Triangle(3, 4, 5).perimeter());  // 12
//console.log(new Triangle(3, 4, 5).area());  // 6
//console.log(new Triangle().perimeter()); // 0
//console.log(new Triangle().area()); // 0

// PART 6: Create a generic block of code for processing an array of sides arrays
// double check that I can do whatever code I want, the elements listed are just for help to get to a version of the solution

function determineShapes(arr) {
    for (item of arr) {
        switch(item.length) {
            case 2:
                length = item[0]
                width = item[1]
                if (length === width) {
                    console.log(`Square with sides ${length}, ${width} has perimeter of ${new Rectangle(length, width).perimeter()} and area of ${new Rectangle(length, width).area()}`)
                } else {
                    console.log(`Rectangle with sides ${length}, ${width} has perimeter of ${new Rectangle(length, width).perimeter()} and area of ${new Rectangle(length, width).area()}`)
                }
                
                break;
            case 3:
                sideA = item[0]
                sideB = item[1]
                sideC = item[2]
                console.log(`Triangle with sides ${sideA}, ${sideB}, ${sideC} has perimeter of ${new Triangle(sideA, sideB, sideC).perimeter()} and area of ${new Triangle(sideA, sideB, sideC).area()}`)
                break;
            case 1:
                console.log("Shape with 1 side unsupported")
                break;
            case 0:
                console.log("Shape with 0 sides unsupported")
                break;
            default:
                console.log("Shapes can only have inputs of 2, or 3 sides")
        }
        //console.log(text)
    }
}

const data = [[3, 4],[5, 5], [3, 4, 5], [10], []]

determineShapes(data)
