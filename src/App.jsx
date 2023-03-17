import './App.css';
import Step1 from './components/Step1';
import Steps from './components/Steps';

function App() {
  return (<>
    <div className='main-container'>
      <main>
        <Steps />
        <div className='form-part'>
          <Step1 />
        </div>
      </main>
    </div>
  </>);
}

export default App;
