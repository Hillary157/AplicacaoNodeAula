//import * as calculator from './calculator.js';
import {expect, test} from '@jest/globals';

const calculator = require('./calculator');
test("testando soma de 5+5" ,() =>{
    expect(calculator.soma(5,5)).toBe(10);
});

test("testar divisao de 42/6", () =>{
    expect(calculator.divisao(42,6)).toBe(7);
})

test("testar divisao de 6+6", () =>{
    expect(calculator.soma(6,6)).toBe(12);
})
