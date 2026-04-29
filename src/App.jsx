import { EXAMPLES } from './data.js';
import Header from './components/header/header.jsx';
import { useState } from 'react';
import CoreConceptss from './components/coreconcepts/coreconceptss.jsx';
import Examples from './components/examples/Examples.jsx';

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  console.log('App is rendered');

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

    
  return (
    <div>
      <Header />
      <main>
        <CoreConceptss /> 
         <Examples
        selectedTopic={selectedTopic}
        onSelect={handleSelect}
        tabContent={tabContent}
        />
      </main>
    </div>
  );
}

export default App;