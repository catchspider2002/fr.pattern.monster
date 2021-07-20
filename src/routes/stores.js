import { writable } from 'svelte/store';

export const themeStore = writable("light");
export const langStore = writable("fr");
export const webStore = writable("https://fr.pattern.monster");
