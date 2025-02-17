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
//Exercise 1
describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });//Exercise 2
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe('string');
    });//Exercise 3
    it('should return a string "Hello, Jane!"', function() { //or 'should return a string'?
        expect(sayHello('Jane')).toBe("Hello, Jane!");
    });//Exercise 4
    it('should return a string "Hello, Jane!"', function() {
        expect(sayHello('Alex')).toBe("Hello, Alex!");
    });//Exercise 5
    it('should return a string "Hello, Pat!"', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });//Exercise 8
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return the boolean true', function () {
        expect(sayHello(true)).toBe("Hello, World!");
    });
});



