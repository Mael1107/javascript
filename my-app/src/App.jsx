import { useTheme } from "./Context/ThemeContext"
import ThemeToggle from "./review/ThemeToggle"

const App = () => {
  const { dark } = useTheme()

  return (
    <div className={dark ? "dark" : "light"}>
      <ThemeToggle />
    </div>
  )
}

export default App