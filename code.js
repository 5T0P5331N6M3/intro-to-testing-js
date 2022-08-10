// helloWorld function 
//FUNCTION STATEMENT SYNTAX
/*function helloWorld() {
    return "Hello, World!";
}
*/
//Exercise #2, Step 2 I'm not confident doing. How do I make it red, other than making an obvious error?
function sayHello() {
    if(input === "Alex") {
        return "Hello, Alex!";
    } else if(input === "Pat") {
        return "Hello, Pat!";
    }else {
        return "Hello, Jane!";
    }
}
//LOST. I just noticed in Jasmine, if I click on "ran 1 0f 9" the result is red! What am I doing wrong?
//Need instruction for this assignment.

//FUNCTION EXPRESSION SYNTAX (ASSIGNING AN ANON FUNCTION TO A VARIABLE)//
const helloWorld = function () {
    return "Hello, World!";
}