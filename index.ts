/*// console.log('Hello World');
const myName: string = "12";
console.log(myName);

let myName1;

if(1===1){
    myName1 = "12";
} else {
    myName1 = "123";
}
myName1 = 333;
myName.includes("123");
console.log(myName1);

const add =(a: number, b: number) => {
    return a+b;
}

function addN(a: number, b: number): number {
    return a+b;
}   

const joinString = (a: string, b: string): string => {
    return a+b;
}
const joinString2 = function(a: string, b: string): string {
    return a+b;
}

interface postInterface {
    title: string,
    daysOld: number,
    isLive: boolean
}

const post = {
    title: "title",
    daysOld: 10,
    isLive: true,
    exta: "123"
}

const printPost = (post: {title: string, daysOld: number, isLive: boolean}) => {
    console.log(post.title);
}
const printPost2 = (post: postInterface) => {
    console.log(post.title);
}
printPost2(post);


class Car {
    color: string;
    year: number;
    constructor(color: string, year: number){
        this.color = color;
        this.year = year;
    }
    //above lines can be replaced by consstructor(public color: string, private year: number){}

    drive(){
        console.log("driving");
    }

    private putBrake(){
        console.log("braking");
    }

    public getColor(){
        return this.color;
    }
}

const car = new Car('red', 2020);
car.drive();
*/
import { Car } from "./Car";
const Compoent  = (target: any) => {
    console.log(target );
};

// @Compoent
// class Car {}
//const car = new Car();

interface Driveable {
    drive(): string;
    speed: number;
}

class MtCar {
    speed =10;
    drive() {
        console.log("driving");
    }
}

class ValueHolder<T> {
    constructor(public value: T) {}
}