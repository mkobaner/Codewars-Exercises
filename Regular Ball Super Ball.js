/*Regular Ball Super Ball https://www.codewars.com/kata/53f0f358b9cb376eca001079/train/javascript

Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

ball1 = new Ball();
ball2 = new Ball("super");

ball1.ballType     //=> "regular"
ball2.ballType     //=> "super" */

class Ball {
    constructor(ballType ='regular'){
        this.ballTyple=ballType;
    }
}
const ball1=new Ball();
const ball2=new Ball('super');

