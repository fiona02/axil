import AboutComponent from "@/components/AboutComponent";
import CatalogSwiperSection from "@/components/CatalogSwiperSection";
import CatalogueSection from "@/components/CatalogueSection";
import CompanySection from "@/components/CompanySection";
import HeroSection from "@/components/HeroSection";
import ReviewSection from "@/components/ReviewSection";


export default function Home() {
  return (
    <main>
      <HeroSection/>
      <CompanySection/>
      <AboutComponent/>
      <CatalogueSection/>
      <CatalogSwiperSection/>
      <ReviewSection/>
     
      
    </main>
  );
}