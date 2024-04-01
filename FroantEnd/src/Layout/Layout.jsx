import Header from '../Componentes/Header/Header';
import Footer from '../Componentes/Footer/Footer';
import Routes from '../routes/AppRoutes';

function Layout() {
  return <>
<Header/>
  <main>
  <Routes/>
  </main>
    <Footer/>
  </>
}

export default Layout
