(() => {
	const toggle = document.getElementById('theme-toggle');
	const root = document.documentElement;

	function setTheme(theme) {
		if (theme === 'dark') root.classList.add('dark');
		else root.classList.remove('dark');
		localStorage.setItem('theme', theme);
		updateButton();
	}

	function updateButton() {
		if (!toggle) return;
		toggle.textContent = root.classList.contains('dark') ? '☀️' : '🌙';
		toggle.title = root.classList.contains('dark') ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro';
	}

	// Initialize from localStorage or system preference
	const saved = localStorage.getItem('theme');
	if (saved) setTheme(saved);
	else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		setTheme('dark');
	} else {
		setTheme('light');
	}

	if (toggle) {
		toggle.addEventListener('click', () => {
			const next = root.classList.contains('dark') ? 'light' : 'dark';
			setTheme(next);
		});
	}

})();
