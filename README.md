<!-- @format -->

Question 1

//List of Symbols for each of the below JavaScript Operators

1. Arithmetic Operators: (+, -, \*\*, %, ++, --, /)
2. Assignment Operators: (=, +=, -=, \*=, /=, %=)
3. Comparison Operators: (==, ===, !=, !==, >, >=, <, <=)
4. Logical Operators: (&&, ||, !)
5. Bitwise Operators: (&, |, ^, -, <<, >>, >>>)

Question 2
//Writing 2 examples for each JavaScript Operators.

-   ARITHMETIC OPERATORS
    Addition (+)
    let a = 10;
    let b = 20;
    let addition = a + b;
    console.log(addition); //output is 30

    Exponent (\*\*)
    let a = 2;
    let b = 2;
    let exponent = a \*\* 2;
    console.log(exponent); // output = 4.

-   ASSIGNMENT OPERATORS
    Add and Assign (+=)
    let age = 5;
    age += 20;
    console.log(age); //Now age is 25

    Divide and Assign (/=)
    let score =10;
    score /= 5;
    console.log(score); //Now, score is 2

-   COMPARISON OPERATORS
    is equal to (==)
    let a = 20;
    let b = 50;
    let isEqualTo = (a == b);
    console.log (isEqualTo); //output - false

    less than (<)
    let a = 20;
    let b = 50;
    let lessThan = (a < 50);
    console.log(lessThan); // output - true

-   LOGICAL OPERATORS
    Logical AND (&&)
    let a = 25;
    let b = 30;
    let c = 20;
    let logicalAND = (a == b && b == c);
    console.log(logicalAND); output - false

    Logical NOT (!)
    let a = 25;
    let b = 30;
    let logicalNot = !(a == b);
    console.log(logicalNot); //output - true

-   BITWISE OPERATORS
    Bitwise AND (&)
    let a = 20;
    let b = 10;
    let c = 15;
    let bitwiseAND = (a == b & b == c); //output is 0, i.e false
    console.log(bitwiseAND);

    Bitwise OR (|)
    let a = 20;
    let b = 10;
    let c = 15;
    let bitwiseOR = (a ==b | b == c); //output is 0, i.e false
    console.log(bitwiseOR);

Question 4

for (let i = 1; i < 20; i += 7){
console.log(i);
}

The result of the program when executed is : 1, 8, 15
