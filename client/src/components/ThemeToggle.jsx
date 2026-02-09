import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-200 dark:bg-white/10 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-white/20 transition-all duration-300"
            aria-label="Toggle Theme"
        >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
    );
}
