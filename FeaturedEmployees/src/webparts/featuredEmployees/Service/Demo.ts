let demoCodes = () => {

    //let name: string = "10";
    //let age: number;
   // let studentsName: string[]; // stores string values in a collection studentNames
   // let isChecked: boolean;
    //const PI: number = 3.1415;



   // studentsName = ["John", "Jane", "Alex", "Adele", "Thomas"]
   // studentsName[0] // John
    //display all names 
    //for (let s of studentsName) {
       // console.log(s, age, isChecked, PI)
    //}

   // parseInt(name);

    //let person1: Person = { name: "Tesfaye", dateOfBirth: "4/3/2020", color: "Black", height: 5.7 }

    let student1: Student;
    student1 = new Student();
    //student1.color = "White";

    student1.dateOfBirth = "4/4/2010"
    student1.tellAboutYou();

    //let puppy = new Dog("Puppy", "1/1/2024");
    

}

function addNumbers(a: number, b: number): number {
    let c = a + b;
    return c;

}

//addNumbers = (a: numbaer, b: number) => a + b

interface Person {
    name: string;
    dateOfBirth: string;
    color: string;
    height: number;
}

class Student {
    name: string;
    dateOfBirth: string;
    protected color: string;
    height: string;

    tellAboutYou(): string {
        return " I am " + this.name + " and I was born on " + this.dateOfBirth + " My coloir is " + this.color;
    }

    //tellAboutYou2 = () => " I am " + this.name + " and I was born on " + this.dateOfBirth + " My coloir is " + this.color;
}

class Animal {    
    dateOfBirth: string = "1/1/2020";

    constructor(dob: string) {       
        this.dateOfBirth = dob;
    }
}

class Dog extends Animal {
    name: string;
    owner: string;

    constructor(name: string, dateOfBirth: string){
        super(dateOfBirth);
        this.name  = name;
    }
}