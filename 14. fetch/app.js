/**
 * Fetch
 * 
 * RESTFul API - https://jsonplaceholder.typicode.com/
 * Docs - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
*/

//the fetch takes one mandatory argument that is the url
fetch ('https://jsonplaceholder.typicode.com/comments/1')
//after the url we got a response and we want the body of that response only, that's why we convert it to json
.then ((response) => response.json())
//and then we will get the actual data
.then ((data) => console.log(data));

/**
 * Above was the general usage of fetch
 */

 fetch('https://jsonplaceholder.typicode.com/comments', {
     method: 'POST',
     body: JSON.stringify({
         postId: 1,
         name: 'Shehroz Irfan',
         email: 'shehroztest@test.com',
         body: 'That was amazing!!'
     })
 })
 .then((response) => response.json())
 .then((data) => console.log(data))


 /**
 * Fetch - Challenge
 * 
 * GET the first comments value 'https://jsonplaceholder.typicode.com/comments/1' and log its value.
 * POST a new comment using 'https://jsonplaceholder.typicode.com/comments' and log its value.
 * 
 * RESTFul API Guide - https://jsonplaceholder.typicode.com/guide.html
 * Docs - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 */


