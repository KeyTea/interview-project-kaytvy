import './App.css';
import Question from "./Question";
import * as React from "react";
import {useState} from "react";
import Answer from "./Answer";

export const AppContext = React.createContext();
function App() {
    const questions = ['food', 'soccer team', 'sport activity'];
    const [answers, addAnswer] = useState([]);
    const [index, setIndex] = useState(0);

  return (
      <AppContext.Provider value={{
          questions,
          index,
          inc: () => setIndex(index + 1),
          answers,
          add: (answer) => addAnswer( [...answers, answer]),
      }}>
    <div className="App">
        {
            answers.length < 3 ?
                <Question/> : <Answer/>
        }
    </div>
    </AppContext.Provider>
  );
}

export default App;
