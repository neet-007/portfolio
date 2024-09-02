import './App.css'
import { BriefAboutMe } from './components/BriefAboutMe'
import { Contact } from './components/Contact'
import { Credintails } from './components/Credintails'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { useThemeContext } from './context/themeContext'
import { useScrollToSection } from './hooks/scrollToSection'

function App() {
  const { theme } = useThemeContext();

  useScrollToSection();

  return (
    <div className={`flex f-d-column gap-7 animate-bg-color ${theme === "light" ?
      "bg-light-primary color-ligth-secondary" : "bg-dark-primary color-dark-secondary"}`}>
      <Navbar />
      <BriefAboutMe />
      <Projects />
      <Credintails />
      <Contact />
    </div>
  )
}

export default App
