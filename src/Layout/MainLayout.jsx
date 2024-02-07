import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import Navbar from "./Header/Navbar/Navbar"

const MainLayout = ({children}) => {
  return (
    <>
    <header>
      <Header/>
      <Navbar/>
    </header>
      <main>
        {children}
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default MainLayout
