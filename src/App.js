import Topbar from './component/Topbar';
import Home from './pages/home'
import Single from './pages/single'
import Write from './pages/write';
import Login from './pages/login';
import Register from './pages/register';
import Contact from './pages/contact';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";

function App() {
  const currentUser = true;
  return (
    <Router>
      <Topbar />
      <Routes>

        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/post" element={<Single />} />
        <Route exact path="/write" element={<Write />} />
        <Route exact path="/contact" element={<Contact />} />

      </Routes>
    </Router>
  );
}

export default App;
