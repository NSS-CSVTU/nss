import Nav from "./components/Nav";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import pages
import About from "./pages/About";
import Administrativestructure from "./pages/Administrativestructure";
import AimObjective from "./pages/AimObjective";
import Contact from "./pages/Contact";
import Districtlevel from "./pages/Districtlevel";
import Download from "./pages/Download";
import Faq from "./pages/Faq";
import Institutions from "./pages/Institutions";
import Latestnews from "./pages/Latestnews";
import Minutesofmeeting from "./pages/Minutesofmeeting";
import Nationaklevel from "./pages/Nationallevel";
import Nssmanual from "./pages/Nssmanual";
import Organizationchart from "./pages/Organisationchart";
import Programcoordinator from "./pages/Programcoordinator";
import Regular from "./pages/Regular";
import Special from "./pages/Special";
import Statelevel from "./pages/Statelevel";
import Strengthofvolunteer from "./pages/Strengthofvolunteer";
import Trainingcenter from "./pages/Trainingcenter";
import Programofficer from "./pages/Programofficer";
import Home from "./components/Home";
import Announcement from "./components/Announcement";

function App() {
  return (
    <div className="App">
      {/* <Feed /> */}
      <>
        <Router>
          <Nav />
          <Switch />
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
          <Route path="/districtlevel">
            <Districtlevel />
          </Route>
          <Route path="/download">
            <Download />
          </Route>
          <Route path="/faq">
            <Faq />
          </Route>
          <Route path="/institutions">
            <Institutions />
          </Route>
          <Route path="/latestnews">
            <Latestnews />
          </Route>
          <Route path="/minutesofmeeting">
            <Minutesofmeeting />
          </Route>
          <Route path="/nationallevel">
            <Nationaklevel />
          </Route>
          <Route path="/nssmanual">
            <Nssmanual />
          </Route>
          <Route path="/organizationchart">
            <Organizationchart />
          </Route>
          <Route path="/programcoordinator">
            <Programcoordinator />
          </Route>
          <Route path="/regular">
            <Regular />
          </Route>
          <Route path="/special">
            <Special />
          </Route>
          <Route path="/statelevel">
            <Statelevel />
          </Route>
          <Route path="/strengthofvolunteer">
            <Strengthofvolunteer />
          </Route>
          <Route path="/trainingcenter">
            <Trainingcenter />
          </Route>
          <Route path="/programofficer">
            <Programofficer />
          </Route>
          {/* <Feed /> */}
          <Footer />
          <Switch />
        </Router>
      </>
    </div>
  );
}

export default App;
