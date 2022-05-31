# cit281-p6
```
Learning Objectives: Classes and inheritence, shape methods, Non-web server Node.js Javascript code using VSCode
```

Create three classes (Shape, Rectangle, and Triangle). Rectangle and Triangle will inherit form Shape class. Base Shape class will provide the common functionality of a method that retuns the perimeter value. Each of the other two classes will provide their own versions of a method that reutns the area value. 

Shape class: contructor expects array of sides with default value of an empty array [], has class property sides (array), has class method perimeter that returns the value of lengths of all sides

Rectangle class: constructor that expects two paraterms (length and width) with default values of 0, calls parent class Shape, class method area that returns rectangle area

Triangle class: constructor that expects three parameters (sideA, sideB, sideC) with default values of 0, calls parent class Shape, class method area that returns triangle area 

Technologies Used:
- Visual Studio Code

Skills Learned:
- creating classes
- creating class methods
- creating class properties with default values
- create classes with inheritence

## Test Code
```
console.log(new Triangle(3, 4, 5).perimeter());  // 12
console.log(new Triangle(3, 4, 5).area());  // 6
console.log(new Triangle().perimeter()); // 0
console.log(new Triangle().area()); // 0
```

## Test Code Expected (and Received) Output
![image](https://user-images.githubusercontent.com/67397853/171090326-ecd65ea9-c665-4a34-a47c-45be3c050270.png)
