function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: "Vaidika",
                city: "Indore"
            });
            reject("error fetching the data");
        }, 3000)
    })
}

// fetchUserData()
//     .then((data) => {
//         console.log(data)
//     })

// using async-await
async function getUserData() {
    try{
        console.log("fetching user data...");
        const userData = await fetchUserData();
        console.log("user data fetched successfully");
        console.log("user data : ", userData)
    }
    catch(error) {
        console.log("error fetching the data", error);
    }
}

getUserData();