import { useTheme } from "../Context/ThemeContext"

const ThemeToggle = () => {
  const { dark, toggleTheme } = useTheme()

  return (
    <button onClick={toggleTheme}>
      {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  )
}

export default ThemeToggle