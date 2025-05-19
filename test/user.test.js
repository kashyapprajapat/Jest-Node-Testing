import { describe,test,mock, it} from 'node:test';
import assert from 'node:assert';
import { FetchProfileData } from '../app.js';

describe("User Feature",()=>{
    it("Fetches Data from the server",(context)=>{
      const data = FetchProfileData(1205);

      context.assert.snapshot(data);

    })
})