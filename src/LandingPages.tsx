import Hero from "./components/Sections/Hero";
import Hero1 from "./components/Sections/Title";
import Navbar from "./components/Sections/Navbar";
import Footer from "./components/Sections/Footer";
import ProductsCard from "./components/Sections/Products/ProductsCard";
import SecondSec from "./components/Sections/SecondSec";
import StorySec from "./components/Sections/StorySec";
import LatestProductsSec from "./components/Sections/LatestProductsSec";
import ReviewSec from "./components/Sections/Review/ReviewSec";

const LandingPages = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <SecondSec />
      <LatestProductsSec />
      <StorySec />
      <ProductsCard />
      <ReviewSec />
      <Hero1 />
      <Footer />
    </div>
  );
};

export default LandingPages;
