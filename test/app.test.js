import { greet,greetInEnglish } from "../app.js";
import {suite, test} from 'node:test';
import assert  from "node:assert";

suite("Greeting Functions",()=>{
    // Hindi Version
    test("Greet function return greeting message  in HINDI",()=>{
        //AAA
        /**
         * Arrange
         * Act
         * Assert
         */
        const expected = 'Namste 🙏🏻, Kashyap';
        const actual = greet("Kashyap");
        assert.strictEqual(actual,expected);
    })
    //English Version
    test("Greet function return greeting message IN ENGLISH",()=>{
        //AAA
        /**
         * Arrange
         * Act
         * Assert
         */
        const expected = 'Welcome 🤝, Kashyap';
        const actual = greetInEnglish("Kashyap");
        assert.strictEqual(actual,expected);
    })
})






