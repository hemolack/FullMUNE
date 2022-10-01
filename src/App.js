import { useState } from 'react';
import Oracle from './components/Oracle/Oracle';
import Portent from './components/Portent/Portent';
import './App.css';

function App() {
  const [story, setStory] = useState([]);

  return (
    <div className="App">
      <Oracle story={story} setStory={setStory} />
      <Portent setStory={setStory} />
        <p>
          <span>Full MUNE</span>
        </p>
    </div>
  );
}

export default App;
