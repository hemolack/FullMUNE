import { useState } from 'react';
import Oracle from './components/Oracle/Oracle';
import Portent from './components/Portent/Portent';
import AIService from './services/aiService';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

// TODO: 
// * Player's Journal:
//    List of "trackable" objects (e.g. people, objects, places) that can be added to manually and can alternatively have a description
//    provided by AI and attached to the object.  These can be removed or added any time the players want to keep up with something for
//    consistency and also provide a way to refer back to them for AI interaction.

function App() {
  const [story, setStory] = useState([]);

  const click= () => { 
    AIService.getCompletion('Generate a name, race, class, stats, background, and physical description for a new entity in a fantasy role-playing game', 
      (data) => { 
        // console.info('result', data) 
        console.info('result object', JSON.parse(data.choices[0].message.content))
      }
  )}

  return (
    <div className="App">
      <Oracle story={story} setStory={setStory} />
      <Portent setStory={setStory} />
        <p>
          <span className="title">Full MUNE</span>
        </p>
        <button onClick={click}>Click</button>
    </div>
  );
}

export default App;
