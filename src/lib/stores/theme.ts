import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Get initial theme from localStorage or default to 'dark'
const getInitialTheme = () => {
	if (browser) {
		const stored = localStorage.getItem('theme');
		return stored || 'dark';
	}
	return 'dark';
};

export const theme = writable<'light' | 'dark'>(getInitialTheme());

// Subscribe to theme changes and update localStorage and DOM
if (browser) {
	theme.subscribe((value) => {
		localStorage.setItem('theme', value);
		document.documentElement.className = value;
	});
}

export const toggleTheme = () => {
	theme.update((current) => (current === 'dark' ? 'light' : 'dark'));
}; 