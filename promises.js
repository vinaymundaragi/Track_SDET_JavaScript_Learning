/*
JavaScript is single threaded - meaning it executes one line at a time.
Because browser actions(navigating pages, clicking buttons, waiting for network responses)
take real-world time to finish, JavaScript cannot simply freeze the entire thread while
Waiting.
JavaScript uses 4 asynchronous tools:-
1. Promises
2. async/await
3. Promise.all()
4. try/catch/finally

Promises:- Is an object representing the eventual completion (or failure) of an asynchromous operation and its
resulting value.
A Promise exists in one of 3 states:-
Pending:- Operation is still in progress(Browser page is still loading)
Fulfilled (Resolved):- operation completed with a successfully with a value.
Rejected:- opreration failed and produced an error or reason.
*/

function fetchTestData(){
    return new Promise((resolve, reject) => {
        const success = true;
        setTimeout(() => {
            if(success){
                resolve({user:"Admin", token:"123"});
            }else{
                reject(new Error("Network Timeout"))
            }
        },1000);
    })
}

fetchTestData().then((data) => console.log("Resolved", data)).catch((data) => console.error("Failed", data));