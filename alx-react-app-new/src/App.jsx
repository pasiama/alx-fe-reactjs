
import './App.css'
// import WelcomeMessage from './WelcomeMessage'

import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'
import Header from './components/Header'

function App() {
 

  return (
    <>
    {/* <WelcomeMessage /> */}
   <Header />
    <MainContent />
    <Footer />
    <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
     
    </>
  )
}

export default App
