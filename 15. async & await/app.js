// async & await
/**
 * to understand this let's take a real-life example,
 * let say you want to upload a photo on instagram and currently there are no photos
 */

 const photos = [];

//  const uploadPhoto = () => {
//      //now the result of the promise will be stored in the upload status.
//      const uploadStatus = new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             photos.push('Profile Picture');
//             resolve("Photo uploaded successfully!");
//         }, 3000);
//      }) 

//      const result = uploadStatus;
//      console.log(result);
//      console.log("Photos: " + photos.length);
//  }

//  uploadPhoto();

 /**
  * in the example above we see that there is no photo uploaded the reason is that javascript works sync. so, the photo upload requires 3sec to complete, but JS doesn't wait for that and executes the next lines.
  * so to make it working we have to make our function to work async
  * below is the example:
  */
 async function uploadPhoto() {
    //now the result of the promise will be stored in the upload status.
    const uploadStatus = new Promise( (resolve, reject) => {
       setTimeout( () => {
           photos.push('Profile Picture');
           resolve("Photo uploaded successfully!");
       }, 3000);
    }) 

    const result = await uploadStatus;
    console.log(result);
    console.log("Photos: " + photos.length);
}

uploadPhoto();

//Challenge - Async & Await

//Print on the console a random joke from the Chuck Norris API using Fetch and Async and Await

const apiUrl = "https://api.chucknorris.io/jokes/random";

async function randomJoke () {
    const response = await fetch(apiUrl);
    const data = await response.json();

    console.log(data);
    console.log(data.value);
}
randomJoke();