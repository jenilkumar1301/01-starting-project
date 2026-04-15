import { CORE_CONCEPTS } from './data.js';
import Header from './components/header/header.jsx';
import CoreConcept from './components/coreconcepts/coreconcepts.jsx';
import TabButton from './components/TabButton/TabButton.jsx';
function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <ul>
            <TabButton>Components</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;