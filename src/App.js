import { useState } from 'react';
import Oracle from './components/Oracle/Oracle';
import Portent from './components/Portent/Portent';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [story, setStory] = useState([]);

  return (
    <div className="App">
      <Oracle story={story} setStory={setStory} />
      <Portent setStory={setStory} />
        <p>
          <span className="title">Full MUNE</span>
        </p>
    </div>
  );
}

export default App;
