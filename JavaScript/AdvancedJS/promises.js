const fetchData = () => {

    // a promise is always created with the keyword new
    // a promise takes two paramaters - resolve and reject
    // the resolve parameter is linked with .then() and is executed only when the promise is successful
    // the reject parameter is linked with .catch() and is executed when the promise finds some error
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            let success = true;
            if(success) {
                resolve("data fetched successfully");
            } else {
                reject("error fetching data");
            }
        }, 3000)
    });
}

fetchData()
    .then((data) => {
        console.log(data);
        return `Vaidika`;
    })
    .then((value) => {
        console.log(value.toLowerCase())
    })
    .catch((error) => console.error(error)) //shorthand 
