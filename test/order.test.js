import { describe,test,mock} from 'node:test';
import { processOrder } from '../app.js';
import assert from 'node:assert';


describe("Order Feature Testing",()=>{
  test("That is Process the odere Correctly",()=>{
    //AAA 


    // Spy for mock fn
    const mockedProcessPayment =  mock.fn((amount)=>{
    //Dont call Api
    console.log("I am Mocked api call function....");
    return { id:"123",amount:amount}
    })

    const expected = { id:"123",amount:700};

    //Act
    assert.strictEqual(mockedProcessPayment.mock.callCount(),0);
    const actual = processOrder({ amount:700},{processPayment:mockedProcessPayment});
   
    //Assert
    assert.deepStrictEqual(actual,expected);
    assert.strictEqual(mockedProcessPayment.mock.callCount(),1);


    //Call<-Calcluate how amny times calls
    const call = mockedProcessPayment.mock.calls[0];
    assert.deepStrictEqual(call.arguments,[700])

  })
})