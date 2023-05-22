import Nav from "./components/Nav";
import Footer from "./components/footer";
import { Link } from "react-router-dom";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import pages
import About from "./pages/About";
import Administrativestructure from "./pages/Administrativestructure";
import AimObjective from "./pages/AimObjective";
import Contact from "./pages/Contact";
import OfficialDocs from "./pages/OfficialDocs";
import Faq from "./pages/Faq";
import Latestnews from "./pages/Latestnews";
import Minutesofmeeting from "./pages/Minutesofmeeting";
import Nationallevel from "./pages/Nationallevel";
import Nssmanual from "./pages/Nssmanual";
import Programcoordinator from "./pages/Programcoordinator";
import Events from "./pages/Events";
import Statelevel from "./pages/Statelevel";
import Programofficer from "./pages/Programofficer";
import Home from "./components/Home";
import Announcement from "./components/Announcement";
import Team from "./components/Team";

function App() {
  return (
    <div className="App relative min-h-screen">
      {/* <Feed /> */}
      <>
        <Router basename='/NSS_CSVTU'>
          <Nav />
          <Switch />
          <div className="pb-10">
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/announcement">
            <Announcement />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/admin">
            <Administrativestructure />
          </Route>
          <Route path="/aimobjective">
            <AimObjective />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          {/* <Route path="/districtlevel">
            <Districtlevel />
          </Route> */}
          <Route path="/faq">
            <Faq />
          </Route>
          {/* <Route path="/latestnews">
            <Latestnews />
          </Route> */}
          <Route path="/minutesofmeeting">
            <Minutesofmeeting />
          </Route>
          <Route path="/awards">
            <Nationallevel />
          </Route>
          <Route path="/nssmanual">
            <Nssmanual />
          </Route>
         
          <Route path="/programcoordinator">
            <Programcoordinator />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/statelevel">
            <Statelevel />
          </Route>
          
          <Route path="/officialdocs">
            <OfficialDocs />

          </Route>
          <Route path="/nssunits">
            <Programofficer />
          </Route>
          <Route path="/team">
            <Team />
          </Route>
          {/* <Feed /> */}
          </div>
          <Footer />
          <Switch />
        </Router>
      </>
    </div>
  );
}

export default App;
