/* Task 11
Create an array of `posts` where each post has `title`, `content`, and `likes`.
Add a "Like" button next to each post that increases the `likes` count and updates the display.
*/

const posts = [
    { title: "Post 1", content: "Content of post 1.", likes: 0 },
    { title: "Post 2", content: "Content of post 2.", likes: 0 },
    { title: "Post 3", content: "Content of post 3.", likes: 0 }
];


function displayPosts() {

    posts.forEach((post) => {
        
       
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');

     
        const title = document.createElement('h2');
        title.textContent = post.title;

 
        const content = document.createElement('p');
        content.textContent = post.content;

    
        const likes = document.createElement('p');
        likes.textContent = `Likes: ${post.likes}`;

     

        const likeButton = document.createElement('button');
        likeButton.textContent = 'Like';
        likeButton.onclick = function () {
            post.likes++;
            likes.textContent = `Likes: ${post.likes}`;
        };

        postDiv.appendChild(title);
        postDiv.appendChild(content);
        postDiv.appendChild(likes);
        postDiv.appendChild(likeButton);

        postList.appendChild(postDiv);
    });
}
displayPosts();