import { BrowserRouter } from 'react-router-dom';
import Footer from './ui/Footer'
import Header from './ui/Header'
import Main from './ui/Main'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  );
}

export default App;