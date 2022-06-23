import './App.css';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="App container">
      <div className='row d-flex align-items-center justify-content-center'>
        <div className='col-xxl-4 col-xl-5 col-lg-6 col-md-8 col-sm-10 col-12 d-flex align-items-center justify-content-center h-vh-100'>
          <Calculator />
        </div>
      </div>
    </div>
  );
}

export default App;
