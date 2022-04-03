
// import Home from '../Home/Home';
import Movies from '../Movies/Movies';
import Navigation from '../../components/Navigation/Navigation';

function App() {
  return (
    <div>
      <Navigation />
      <div style={{margin:'0 10% 0 10%'}}>
        {/* <Home /> */}
        <Movies />
      </div>
    </div>
  );
}
export default App;
