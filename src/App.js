import { useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./css/App.css";

import Nav from "./components/layouts/Nav";
import Home from "./components/pages/Home/Home";
// import Footer from "./components/layouts/Footer";
import SearchModal from "./components/layouts/SearchModal";
import LorR from "./components/pages/LoginAndRegister/LorR";
import Product from "./components/pages/Product/Product";
import Contact from "./components/pages/Contact/Contact";
import About from "./components/pages/About/About";
import Verification from "./components/pages/verification/Verification";
import CompleteBuyer from "./components/pages/CompleteBuyerAndService/CompleteBuyer";
import Floracity from "./components/pages/FloraCity/Floracity";
import TheHive from "./components/pages/FloraCity/TheHive";
import FloraEcopolis from "./components/pages/FloraCity/FloraEcopolis";
import OurEstates from "./components/pages/OurEstates/OurEstates";
import LagosSetToDigitalize from "./components/pages/BlogDetails.jsx/LagosSetToDemolish/LagosSetToDemolish";
import KnowYourLandSize from "./components/pages/BlogDetails.jsx/KnowYourLandSize/KnowYourLandSize";
import KnowYourPropertyTitle from "./components/pages/BlogDetails.jsx/KnowYourPropertyTitle/KnowYourTitle";
import Blogs from "./components/pages/BlogDetails.jsx/Blogs";
import QuickLinks from "./components/pages/QuickLinks/QuickLinks";
import RealEstateMistakes from "./components/pages/BlogDetails.jsx/RealEstateMistakes/RealEstateMistakes";
import Books from "./components/pages/Books/Books";
import ScrollToTup from "./ScrollToTup";
import NotFound from "./components/pages/404";
import ThankYou from "./components/pages/ThankYou";
import ProfessionalAdvisory from "./components/pages/Professional Advisory/ProfessionalAdvise";
import Investment from "./components/pages/Investments/Investment";
import OptinForm from "./components/SharedComponents/OptinForm";
import VerificationDetail from "./components/pages/verifications/VerificationDetail";
import ThankYouCommon from "./components/pages/ThankYouCommon";
import DBM from "./components/pages/Development Build And Manage/DBM";
import Affilate from "./components/pages/Affilate/Affilate";

const App = () => {
  const myRef = useRef();
  useEffect(() => {
    myRef.current.scrollTo(0, 0);
  }, []);
  return (
    <div ref={myRef} className="App">
      <Router>
        <ScrollToTup />
        <SearchModal />
        <Nav />
        <Switch>
          <Route exact path="/" children={<Home />} />
          <Route path="/login-register" children={<LorR />} />
          <Route path="/product" children={<Product />} />
          <Route path="/contact" children={<Contact />} />
          <Route path="/about" children={<About />} />
          <Route path="/verification" children={<Verification />} />
          <Route
            path="/verification-detail"
            children={<VerificationDetail />}
          />
          <Route path="/cpbs" children={<CompleteBuyer />} />
          <Route
            path="/professional-advisory"
            children={<ProfessionalAdvisory />}
          />
          <Route path="/investments" children={<Investment />} />
          <Route path="/floracity" children={<Floracity />} />
          <Route path="/fern-island" children={<Floracity />} />
          <Route path="/the-hive" children={<TheHive />} />
          <Route path="/floracity-ecopolis" children={<FloraEcopolis />} />
          <Route path="/design-build-manage" children={<DBM />} />
          <Route path="/affilate" children={<Affilate />} />
          <Route path="/our-estate" children={<OurEstates />} />
          <Route path="/optin" children={<OptinForm />} />
          <Route path="/blog-1" children={<LagosSetToDigitalize />} />
          <Route path="/blog-2" children={<KnowYourLandSize />} />
          <Route path="/blog-3" children={<KnowYourPropertyTitle />} />
          <Route path="/blog-3" children={<KnowYourPropertyTitle />} />
          <Route path="/blogs" children={<Blogs />} />
          <Route
            path="/real-estate-mistakes"
            children={<RealEstateMistakes />}
          />
          <Route path="/links" children={<QuickLinks />} />
          <Route path="/book/re-inv-wo-tears" children={<Books />} />
          <Route path="/thank-you" children={<ThankYou />} />
          <Route
            path="/thank-you-for-submission"
            children={<ThankYouCommon />}
          />
          <Route component={NotFound} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
};

export default App;

//TODO: PUSH LATEST UPDATES
