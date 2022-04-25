const {
    returnTwo,
    greeting,
    add,
    subtract,
    multiply,
    divide
} = require('./functions')

test('test returnTwo function', () => {
    expect(returnTwo()).toEqual(2)
})

test('testing greeting function', () => {
    expect(greeting('James')).toEqual("Hello, James")
    expect(greeting('Jill')).toEqual("Hello, Jill")
})

test('testing add function', () => {
    expect(add(1,2)).toEqual(3),
    expect(add(5,9)).toEqual(14)
})

describe('math function tests', () => {
    test('test subtract function', () => {
      expect(subtract(2,1)).toEqual(1)
      expect(subtract(5,2)).toEqual(3)
    })
  
    test('test multiply function', () => {
        expect(multiply(2,1)).toEqual(2)
        expect(multiply(5,2)).toEqual(10)
    })

    test('test divide function', () => {
        expect(divide(2,1)).toEqual(2)
        expect(divide(10,2)).toEqual(5)
    })    
})