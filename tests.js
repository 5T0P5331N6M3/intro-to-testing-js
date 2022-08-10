// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});
//Exercise #1 sayHello function defined
describe('sayHello', function() {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
});
//Exercise #2 Ensure function returns correct data type
describe('sayHello', function() {
    it('should return a string when called.', function() {
        expect(typeof sayHello()).toBe("string");
    });
});
//Exercise #3 Add test confirming actual vs. expected output
describe('sayHello', function() {
    it('should return a string "Hello, Jane!"', function() { //or 'should return a string'?
        expect(typeof sayHello()).toBe("Hello, Jane!");
    });
});
//Exercise #4 Add another small, simple test
describe('sayHello', function() {
    it('should return a string "Hello, Alex!"', function () { //or 'should return a string'?
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
});
//Exercise #5 One more small test before refactoring
describe('sayHello', function() { //How do I run all tests to newly red/failing?
    it('should return a string "Hello, Pat!', function () {
       expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
});
