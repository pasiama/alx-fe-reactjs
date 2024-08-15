
import './App.css'
// import WelcomeMessage from './WelcomeMessage'

import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'
import Header from './components/Header'
import Counter from './components/Counter'

function App() {
 

  return (
    <>
    {/* <WelcomeMessage /> */}
   <Header />
    <MainContent />
 
    <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
    <Counter />
    <Footer />
    </>
  )
}

export default App
