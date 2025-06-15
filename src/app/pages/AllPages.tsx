
import Navbar from "@/app/components/Navbar";
import Home from "../pages/Home";
import About from "../pages/About";
import Work from "../pages/Work";
import VideoReel from "../pages/VideoReel";
import Features from "../pages/Features";
import Services from "../pages/Services";
import Portfolio from "../pages/Portfolio";
import Offer from "../pages/Offer";
import Events from "../pages/Events";
import OurTeams from "../pages/OurTeams";
import Founder from "../pages/Founder";
import Testimonials from "../pages/Testimonials";
import Pricing from "../pages/Pricing";
import Faq from "../pages/Faq";
import Award from "../pages/Award";
import Blog from "../pages/Blog";
import MapPage from "../pages/MapPage";
import Help from "../pages/Halp";
import Footer from "../pages/Footer";
const AllPages = () => {
  return (
    <div>
        <Navbar />
        <Home/>
        <About/>
        <Work/>
        <VideoReel/>
        <Features/>
        <Services/>
        <Portfolio/>
        <Offer/>
        <Events/>
        <OurTeams/>
        <Founder/>
        <Testimonials/>
        <Pricing/>
        <Faq/>
        <Award/>
        <Blog/>
        <MapPage/>
        <Help/>
        <Footer/>
    </div>
  )
}

export default AllPages