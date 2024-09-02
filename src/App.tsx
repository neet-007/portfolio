import './App.css'
import { BriefAboutMe } from './components/BriefAboutMe'
import { Contact } from './components/Contact'
import { Credintails } from './components/Credintails'
import { Projects } from './components/Projects'
import { useThemeContext } from './context/themeContext'

function App() {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <div className={`flex f-d-column gap-7 animate-bg-color ${theme === "light" ?
      "bg-light-primary color-ligth-secondary" : "bg-dark-primary color-dark-secondary"}`}>
      <BriefAboutMe />
      <Projects />
      <Credintails />
      <Contact />
      <button onClick={toggleTheme}>ada</button>
    </div>
  )
}

export default App
