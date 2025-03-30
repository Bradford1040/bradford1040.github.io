document.addEventListener('DOMContentLoaded', () => {
        document.addEventListener('DOMContentLoaded', () => {
            const repositoriesSection = document.getElementById('repositories');

            const repositories = [
                { name: 'Repo 1', url: 'https://github.com/yourusername/repo1' },
                { name: 'Repo 2', url: 'https://github.com/yourusername/repo2' },
                { name: 'Repo 3', url: 'https://github.com/yourusername/repo3' }
            ];

            repositories.forEach(repo => {
                const repoDiv = document.createElement('div');
                repoDiv.classList.add('repository');

                const repoLink = document.createElement('a');
                repoLink.href = repo.url;
                repoLink.textContent = repo.name;
                repoLink.target = '_blank';

                repoDiv.appendChild(repoLink);
                repositoriesSection.appendChild(repoDiv);
            });
        });
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
