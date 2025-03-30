document.addEventListener('DOMContentLoaded', () => {
    const postForm = document.getElementById('post-form');
    const postsSection = document.getElementById('posts');

    postForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        const post = document.createElement('div');
        post.classList.add('post');

        const postTitle = document.createElement('h3');
        postTitle.textContent = title;

        const postContent = document.createElement('p');
        postContent.textContent = content;

        post.appendChild(postTitle);
        post.appendChild(postContent);

        postsSection.appendChild(post);

        postForm.reset();
    });
});
