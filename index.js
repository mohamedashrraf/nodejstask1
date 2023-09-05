
//1
const http = require('http');

let users = [
    { id: 1, name: 'mohamed', age: 25 },
    { id: 2, name: 'asharf', age: 30 },
    { id: 3, name: 'ali', age: 28 },
    { id: 4, name: 'saad', age: 22 },
];


http.createServer((req, res) => {
    if (req.method == "GET" && req.url == "/") {
        res.end(JSON.stringify(users));
    }

    else if (req.url == "/adduser" && req.method == "POST") {
        req.on("data", function (chunk) {
            users.push(JSON.parse(chunk));
            res.end();
        })
    }
    else if (req.url === "/sortuser" && req.method == "GET") {
        const sortedUsers = [...users].sort((a, b) => a.name.localeCompare(b.name));
        res.end(JSON.stringify(sortedUsers));
    }
        
        
    else if (req.url === "/deleteuser" && req.method === "DELETE") {
        let data = '';

        req.on('data', (chunk) => {
            data += chunk;
        });

        req.on('end', () => {
            const userData = JSON.parse(data);
            const userId = userData.id;

            let deletedUser = users.filter((user) => user.id !== userId);

            if (deletedUser.length == users.length) {
                res.end("user not found");
            } else {
                res.end("user deleted");
            }
        });
    }
        
    else if (req.url === "/updateuser" && req.method == "PATCH") {
        req.on("data", function (chunk) {
            const getData = (JSON.parse(chunk));
            users = getData;
            userId = getData.id;

            res.end('User updated successfully');
        })
    }
        
    else if (req.url === "/searchuser" && req.method === "POST") {
        let data = '';
        req.on('data', (chunk) => {
            data += chunk;
        });
        req.on('end', () => {
            const userData = JSON.parse(data);
            const userId = userData.id;
            let searchedUser = users.find((user) => user.id == userId);
            if (searchedUser) {
                res.end("user found " + JSON.stringify(searchedUser));
            } else {
                res.end("user not found");
            }
        });
    }

}).listen(3000)





//2

// const http = require('http');

// let posts = [
//     { id: 1, date: '2023-09-04', content: 'Post 1 content' },
//     { id: 2, date: '2023-09-03', content: 'Post 2 content' },
//     { id: 3, date: '2023-09-02', content: 'Post 3 content' },
//     { id: 4, date: '2023-09-01', content: 'Post 4 content' },
// ];

// http.createServer((req, res) => {
//     if (req.method == "GET" && req.url == "/") {
//         res.end(JSON.stringify(posts));
//     }

//     else if (req.url == "/addpost" && req.method == "POST") {
//         req.on("data", function (chunk) {
//             const newPost = posts.push(JSON.parse(chunk));
//             res.end(JSON.stringify(newPost));
//         })
//     }
        
//     else if (req.url === "/sortpost" && req.method == "GET") {
//         const sortedPosts = [...posts].reverse((a, b) => a.content.localeCompare(b.content));
//         res.end(JSON.stringify(sortedPosts));
//     }
    
//     else if (req.url === "/deletepost" && req.method === "DELETE") {
//         let data = '';

//         req.on('data', (chunk) => {
//             data += chunk;
//         });

//         req.on('end', () => {
//             const postData = JSON.parse(data);
//             const postId = postData.id;

//             let deletedPost = posts.filter((post) => post.id !== postId);

//             if (deletedPost.length == posts.length) {
//                 res.end("Post not found");
//             } else {
//                 res.end("Post deleted");
//             }
//         });
//     }

        
//     else if (req.url === "/updatepost" && req.method == "PATCH") {
//         req.on("data", function (chunk) {
//             const getData = (JSON.parse(chunk));
//             posts = getData;
//             postId = getData.id;
//             res.end('post updated successfully');
//         })
//     }
        
//     else if (req.url === "/searchpost" && req.method === "POST") {
//         let data = '';
//         req.on('data', (chunk) => {
//             data += chunk;
//         });
//         req.on('end', () => {
//             const postData = JSON.parse(data);
//             const postId = postData.id;
//             let searchedPost = posts.find((post) => post.id == postId);
//             if (searchedPost) {
//                 res.end("Post found " + JSON.stringify(searchedPost));
//             } else {
//                 res.end("Post not found");
//             }
//         });
//     }




// }).listen(3000)