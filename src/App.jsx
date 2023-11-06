
import './App.css'
import { Aboutme } from './components/Aboutme'
import { Contactme } from './components/Contactme'
import { Home } from './components/Home'
import { Menu } from './components/Menu'
import { Projects } from './components/Projects'


function App() {
 

  return (
    <>
      <div>
        <Menu />
        <Home />
        <Projects />
        <Aboutme />
        <Contactme />
      </div>
     
      
    </>
  )
}

export default App
