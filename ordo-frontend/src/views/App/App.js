
import Home from '../Home/Home';
import Movies from '../Movies/Movies';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation/Navigation';


function App() {
  return (
    <div>
      <Navigation />
      <div style={{margin:'0 10% 0 10%'}}>
        <Home />
        {/* <Movies /> */}
      </div>
      <Footer />
    </div>
  );
}
export default App;
