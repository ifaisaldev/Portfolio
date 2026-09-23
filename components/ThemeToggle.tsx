'use client';

import { useSyncExternalStore } from 'react';
import { Moon, Sun } from 'lucide-react';

// The theme lives on <html class="dark">, set before paint by the script in app/layout.tsx.
// Reading it through useSyncExternalStore keeps the icon in sync without a hydration mismatch.
const subscribe = (onChange: () => void) => {
    const observer = new MutationObserver(onChange);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
};
const getSnapshot = () => document.documentElement.classList.contains('dark');
const getServerSnapshot = () => false;

const ThemeToggle = () => {
    const isDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

    const toggleTheme = () => {
        const nextDark = !isDark;
        document.documentElement.classList.toggle('dark', nextDark);
        document.querySelector('meta[name="theme-color"]')?.setAttribute('content', nextDark ? '#0f172a' : '#f8fafc');
        try {
            localStorage.setItem('theme', nextDark ? 'dark' : 'light');
        } catch {
            // Storage can be blocked (private mode); the theme still applies for this visit.
        }
    };

    const label = isDark ? 'Switch to light mode' : 'Switch to dark mode';

    return (
        <button
            type="button"
            onClick={toggleTheme}
            aria-label={label}
            title={label}
            className="inline-flex items-center justify-center p-2 rounded-md text-fg-2 hover:text-fg hover:bg-chip transition-colors"
        >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
    );
};

export default ThemeToggle;
