//5bb0a656

import { useEffect } from "react";

const api_url = 'http://www.omdbapi.com?apikey=5bb0a656';

const App = () => {

  const searchMovies = async (title) => {
    const resp = await fetch(`${api_url}&s=${title}`)
    const data = await resp.json();
    console.log(data.Search);
  }
  useEffect(() => {
    searchMovies('Ironman');
  }, []);
  return (
    <div  >
      <h1>App ddd</h1>
    </div>
  );
}

export default App;
