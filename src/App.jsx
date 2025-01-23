
import About from './components/About'
import Client from './components/Client'
import Nav from './components/Nav'
import Newsletter from './components/Newsletter'
import Pricing from './components/Pricing'
import Services from './components/Services'
import Team from './components/Team'
import Home from './Home'
// import Preloader from './components/Preloader'

function App() {

  return (
    <>
    
    {/* <Preloader /> */}
    <Nav />
    <Home/>
    <Services />
    <About />
    <Client />
    <Pricing />
    <Team />
    <Newsletter />
    </>
  )
}

export default App
