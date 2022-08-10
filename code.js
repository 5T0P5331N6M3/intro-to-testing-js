// helloWorld function 
//FUNCTION STATEMENT SYNTAX
/*function helloWorld() {
    return "Hello, World!";
}
*/


//FUNCTION EXPRESSION SYNTAX (ASSIGNING AN ANON FUNCTION TO A VARIABLE)//
const helloWorld = function () {
    return "Hello, World!";
}
//Exercise 6, How to improve overall function?
const sayHello = function(input) {
    if(input === "Alex") {
        return "Hello, Alex!";
    } else if(input === "Pat") {
        return "Hello, Pat!";
    } else {
        return "Hello, Jane!";
    }
}