import Nullstack from 'nullstack';
import './Application.scss';
import Home from './Home';
import OtherPage from './OtherPage'

class Application extends Nullstack {

  prepare({ page }) {
    page.locale = 'en-US';
  }

  renderHead() {
    return (
      <head>
        <link 
          href="https://fonts.gstatic.com" rel="preconnect" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Crete+Round&family=Roboto&display=swap"
          rel="stylesheet" />
      </head> 
    )
  }

  render() {
    return (
      <main>
        <Head />
        <nav>
          <a href="/"> Home </a>
          <a href="/other-page"> Other Page </a>
        </nav>
        <Home route="/" />
        <OtherPage route="*" />
      </main>
    )
  }

}

export default Application;