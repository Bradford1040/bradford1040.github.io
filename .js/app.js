document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    const repositoriesSection = document.getElementById('repositories');
    console.log('Repositories section:', repositoriesSection);

    const repositories = [
        { name: 'Punisher', url: 'https://github.com/Bradford1040/PUNISHER' },
        { name: 'Kane', url: 'https://github.com/Bradford1040/KANE' },
        { name: 'Able', url: 'https://github.com/Bradford1040/ABLE' },
        { name: 'Ben10', url: 'https://github.com/Bradford1040/BEN10' },
        { name: 'Repo 5', url: 'https://github.com/yourusername/repo5' }
    ];

    repositories.forEach(repo => {
        console.log('Adding repo:', repo);
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
