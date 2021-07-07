import './App.css';
import { Main } from './main.js';

function App() {
  return (
    <section className="h-screen overflow-hidden flex items-center justify-center bg-red-400">
      <section className="h-50 p-8">
        <h1 className="mx-20 text-xl font-mono">procure um pokemon</h1>
          <Main/>
      </section>
    </section>
  );
}

export default App;
