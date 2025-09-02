import { BrowserRouter as Router } from 'react-router-dom';

import Container from './components/layout/Container';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import RoutesContainer from './routes';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Container customClass="min-height">
          <RoutesContainer />
        </Container>
        <Footer />
      </Router>
    </div>
  );
}

export default App;