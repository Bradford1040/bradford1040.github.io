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
