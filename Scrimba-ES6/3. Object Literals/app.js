//Object Literals

// const myFunction = (city, state) => {
//     const newAddress = { city, state };

//     console.log(newAddress);
// }

// myFunction('Lahore','Punjab');

//===============================
//Challenge - Object Literals 
//===============================
function addressMaker(address) {
    console.log(address);
    const {city, state} = address;
    
    const newAddress = {
        city,
        state,
        country: 'United States'
    };
    console.log(`${newAddress.city}, ${newAddress.state}`)
}


addressMaker({city: 'Austin', state: 'Texas'});