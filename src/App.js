import './App.css';
import Description from './Description';
import Movies from './Movies';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 
function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path="/" element={<Movies />} />
            <Route path="movie/:id" element = {<Description />} />

            {/* <Route path="/description" element={<Description />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// https://api.tvmaze.com/search/shows?q=all