import { useTheme } from '../../context/ThemeContext';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg transition-colors duration-200
                 text-navy-700 hover:text-navy-900
                 dark:text-blue-300 dark:hover:text-blue-100"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <LightModeIcon fontSize="large" />
      ) : (
        <DarkModeIcon fontSize="large" />
      )}
    </button>
  );
}

export default ThemeToggle;
