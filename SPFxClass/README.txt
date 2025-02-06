Typescript/JavaScript /TS JS

Variables and Data Types 
    temporary storage: declare, initilize and set value it 
    Syntax to define a variable is using keyword var, const or let. Define a variable name which stores text - in js or ts  string is text 
    let name: string;
    name = "Tesfaye";
    name = 10; //this is an error 

    What are different data types in JS or TS 

    string, number, array(collection), boolean, any, undefined, null, Object



Statements 

Operators (logical/Comparison and Arthimetic operators)
logical operators are: equality(==), similarity(===), greater(>), less(<), less or equal(<=), greater or equal(>=), not equal(!=), not(!), 
& (binary and), && (and), || (or) .... 
let m = 2; 
m == 3; // output is false since m is not equal to 3  



Conditional Statements - if else / switch case / tertiary operator 
Syntax of if else 

if(expression1){
    //executes when expression1 is true 
} else if(expression2) {
    //executes when expression2 is true
}else {
    //executes when both expression 1 and 2 are false 
}

//Syntax for switch case 
switch(varible){
    case value: ///statemtns 
                break;
    case value2: ///statemtns; break;
    .....
    default: //statemtns 
}

Loop Statements // for loop, while loop, do while , foreach ... 
Sytax 
for(initilization; expression; action){


}

example display number from 1 to 20, item 1, item 2, .... item 20

for(let x = 1; x <= 20; x = x+ 1){
    console.log("item ", x)
}

Functions 

Events (click event, mouse hover event etc)

Object Oriented (Interface, Class ... )

Person is an object (it has lots of properties .. has a name, dateOfBirth, color, heigh, fatherName, Email, phoneNumber, ID, )
{name: "Tesfaye", dateOfBirth: "4/3/2020", color: "Black", height: "5 7"}




