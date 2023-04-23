// import logo from './logo.svg';
import intro from './intro.mp4';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      <div className='main'>
      <div className="overlay"></div>
        <video src={intro} autoPlay loop muted />
        </div>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          // className="App-link"
          href="./memes.js"
          // target="_blank"
          // rel="noopener noreferrer"
        >
          Learn React
        </a> */}

     
      </header>
    </div>
  );
}

export default App;
