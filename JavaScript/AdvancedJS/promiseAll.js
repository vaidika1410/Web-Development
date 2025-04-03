function fetchPostData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("post data fetched successfully");
            reject("error fetching post data");
        }, 3000);
    })
}

function fetchCommentData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                user: "Vaidika",
                place: "Indore, India"
            })
            reject("error fetching comment data");
        }, 4000)
    })
}

async function getBlogData(){
    try{
        console.log("fetching blog data...");
        // const blogData = await fetchPostData();
        // const commentData = await fetchCommentData();

        const [blogData, commentData] = await Promise.all([
            fetchPostData(),
            fetchCommentData()
        ]);
        console.log(blogData);
        console.log(commentData);
        console.log("data fetched successfully");
    }
    catch(error){
        console.log("error occurred while fetching data", error);
    }
}

getBlogData();