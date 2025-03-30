document.addEventListener('DOMContentLoaded', () => {
    const repositoriesSection = document.getElementById('repositories');

    const repositories = [
        { name: 'Repo 1', url: 'https://github.com/yourusername/repo1' },
        { name: 'Repo 2', url: 'https://github.com/yourusername/repo2' },
        { name: 'Repo 3', url: 'https://github.com/yourusername/repo3' },
        { name: 'Repo 4', url: 'https://github.com/yourusername/repo4' },
        { name: 'Repo 5', url: 'https://github.com/yourusername/repo5' }
    ];

    repositories.forEach(repo => {
        const repoDiv = document.createElement('div');
        repoDiv.classList.add('repository');

        const repoLink = document.createElement('a');
        repoLink.href = repo.url;
        repoLink.target = '_blank';

        const icon = document.createElement('i');
        icon.classList.add('fas', 'fa-code-branch'); // Font Awesome icon class

        const repoName = document.createElement('span');
        repoName.textContent = repo.name;

        repoLink.appendChild(icon);
        repoLink.appendChild(repoName);
        repoDiv.appendChild(repoLink);
        repositoriesSection.appendChild(repoDiv);
    });
});
