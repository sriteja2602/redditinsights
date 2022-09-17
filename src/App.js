import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'tw-elements';
import './App.css';

import Home from './components/Home';
import About from './components/About';
import Books from './components/Books';
import Navbar from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import NotFound from './components/NotFound';

import { RedditProvider } from "./context/RedditContext";
import Analytics from './components/Analytics';

function App() {
  return (
  <RedditProvider>
    <Router>
      <div className='flex flex-col justify-between h-screen'>
        <Navbar/>
        <main className='container mx-auto px-3 pb-12'>
{/* <Button content='Primary' primary /> */}

          <Routes>
            <Route path='/redditinsights' element={<Home/>}></Route>
            <Route path='/redditinsights/about' element={<About/>}></Route>
            <Route path='/redditinsights/books' element={<Books/>}></Route>
            <Route path='/redditinsights/analytics' element={<Analytics/>}></Route>
            <Route path='/redditinsights/notfound' element={<NotFound />}></Route>
            <Route path='/redditinsights/*' element={<NotFound />}></Route>
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  </RedditProvider>
  );
}

export default App;
