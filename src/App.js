import React from 'react';
import './App.css';
import { SearchInput } from "./containers/searchComponent/search";
import { SearchResults } from "./containers/searchResultsComponent/searchResults";

function App() {
  return (
    <section className="App">
      <header className="App-header">
        <SearchInput />
      </header>
      <main className="App-main">
        <SearchResults />
      </main>
    </section>
  );
}

export default App;
