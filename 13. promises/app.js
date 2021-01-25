//promises
// Docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
/**
 * promises are usually used in a network request
 * fetching data from an api
 * or could be used in some async function that you are trying to run
 */

/**
 * now to understand this let's take a real-life scenario:
 * you want to take a travel ticket from a travel company
 * so, if all went okay, the company will issue you the ticket and you can travel
 * otherwise, if they got any error then the ticket will not be issued
 */

 const buyingFlyingTickets = () => {
     
    //when we return a promise the values are going to be stored in the function 'buyingFlyingTickets'
    /**
     * there will be three possible outcomes
     * 1. you're promise is pending
     * 2. promise is successful
     * 3. promise is rejected
     */
    /**
     * the promise takes inside a function that will have two parameters.
     * 1. resolve - if everything goes well with our request then the resolve function works
     * 2. reject - if there is an error then the reject function works
     */
    return new Promise( (resolve, reject) => {
        //we're using the timeout function because the request can take time depending on the internet connection
        setTimeout(() => {
            const error = false;
            if( error ) {
                reject("Sorry your payment was not successful!");
            } else {
                resolve("Thank you! Your payment was successful");
            }
        }, 3000);
    });
}

buyingFlyingTickets()
//.then function will be called if the payment was successful
.then( (success) => { console.log(success)} )
//.catch function will be called if there was an error with the payment
.catch( (error) => { console.log(error)} )


/**
 * Promises - Challenge
 * Create a promise that returns some user data and throws an error when not found.
 * Log the user data when listening to the promise as well as log the error.
*/

const user = () => {
    return new Promise( (resolve, reject) => {
        const error = false;
        if(error) {
            reject("Error 404 - Page not found");
        } else {
            resolve({
                name: 'Shehroz Irfan',
                age: 21,
                email: 'shehrozirfan89@gmail.com'
            });
        }
    })
}
user()
.then( success => console.log(success))
.catch( error => console.log(error));