import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <section class="h-screen overflow-hidden flex items-center justify-center bg-green-300">
      <section class="h-50 p-8">
        <h1 class="mx-20 text-xl font-mono">Pesquise filmes</h1>
        <div class="flex container mx-auto py-8">
          <input class="w-full h-16 px-3 rounded mb-8 focus:outline-none focus:shadow-outline text-xl px-8 shadow-lg" type="search" placeholder="Search..."/>
          <button class="mx-5 px-8 h-14 my-1 rounded bg-gray-100 hover:bg-gray-500 hover:text-white"> 
            pesquisar
          </button>          
        </div>
      </section>
    </section>


  );
}

export default App;
