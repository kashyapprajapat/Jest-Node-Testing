

// Part -- unit isolation
export function greet(name){
    return `Namste 🙏🏻, ${name}`;
}

export function greetInEnglish(name){
    return `Welcome 🤝, ${name}`;
}


// Part ---Mock
//Dependany Injection
//in belwo u see that using second paarametr we pass the mock fn not actual 

export function processOrder(data,dependencies){
   // Some Logic

    const paymentInfo = dependencies.processPayment(data.amount)
    return paymentInfo;
}

function processPayment(amount){
    // Api call to 3rd party payment service

    console.log("I am origial api call function....");
    return { id:"123",amount:amount}
}



// Part --snapshot
export function FetchProfileData(userId){
    return {
        id:userId,
        name:"kashyap",
        roles:['user','admin'],
        preferance:{
            Notification:true,
            theame:'dark',
        }
    }
}

