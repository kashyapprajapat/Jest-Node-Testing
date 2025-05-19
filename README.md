Node internal testing

## Unit Testing
  -> Small code 
  -> Isolation means indivdualy dont depend on other

## In unit Testing we do 3 AAA
        ```
        1️⃣ Arrange
        2️⃣ Act
        3️⃣ Assert
        ```

---

1.suits is like grouping
2.alias of Suits is describe

---

---

## Mocking
means lets say two fn a inside that b fn is call so we mock that b fn 
For more checkout order.test.js

---
---


## Stubs
stubs means ready made data you get like in the mock but mock provide call count 

---
---

## Snapshot Testing ---Mostly Use in Frontend
it is usefull in frontend beacuse when api call that time you get response which have large size of json object so if we use 
assert then we check each and every key pair
so it is lot more work to do so to overcome that we use snapshot using this it will do automatically
use this below

```
node --test --test-update-snapshots
```


---
---

## Integration Testing
use jest

every api endpoint we testing 

supertest is best for this work

---
---
## End-to-End Testing
for that open browser fill data aeveryting we cj=heck like user do for that sypress palywrite puppeter use.

---
---
Not rule but junarally followed by comapny...
E2E-10%
Integration-20%
Unit-70%

Make sure test run as fast as possible becaude thay run in cicd so if test take more time than relase tiem aslo take more time and also if test run more time then your bill go high becuase it run on machine like ec2 etc ... 

## TDD --Test friven developemt
in that we do reverse
first edge case test fioe then it's implemenatation