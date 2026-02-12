/**
 * ProjectCard Component
 * 
 * Creates a reusable project card element
 * @param {string} title - Project name or description
 * @param {string} technologies - Technologies used (e.g., "Node.js · Express · MongoDB")
 * @returns {HTMLElement} - The project card element
 */
function createProjectCard(title, technologies, repoUrl) {
	const card = document.createElement('div');
	card.className = 'project-card';
	
	const titleEl = document.createElement('p');
	const strong = document.createElement('strong');
	strong.textContent = title;
	titleEl.appendChild(strong);
	
	const techEl = document.createElement('p');
	techEl.className = 'tech';
	techEl.textContent = technologies;

    const link = document.createElement('a');
	link.href = repoUrl;
	link.textContent = 'View repository';
	link.target = '_blank';
	link.className = 'repo-link';
	
	card.appendChild(titleEl);
	card.appendChild(techEl);
    card.appendChild(link);
	
	return card;
}

/**
 * Renders multiple project cards into a container
 * @param {string} containerId - ID of the container element
 * @param {Array} projects - Array of project objects with { title, technologies }
 */
function renderProjectCards(containerId, projects) {
	const container = document.getElementById(containerId);
	if (!container) return;
	
	projects.forEach(project => {
		const card = createProjectCard(project.title, project.technologies, project.repoUrl);
		container.appendChild(card);
	});
}
