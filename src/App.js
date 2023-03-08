  import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Flex, Text } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeaderMob from "./components/mob/Header/HeaderMob";
import HomeSc from "./screens/HomeSc";
import CareersSc from "./screens/CareersSc";
import Contact from "./screens/Contact";
import EnergySc from "./screens/EnergySc";
import ChannelPartner from "./screens/ChannelPartner";
import SkyHighSc from "./screens/SkyHighSc";
import NewsMediaSc from "./screens/NewsMediaSc";
import AreteHomes from "./screens/AreteHomes";
import ReferAndEarn from "./screens/ReferAndEarn";
import CommercialProperties from "./screens/CommercialProperties";
import ServicedApartSc from "./screens/ServicedApartSc";
import BlogSc from "./screens/BlogSc";
import SkyhighInvestSc from "./screens/SkyhighInvestSc";
import AretehomesInvestSc from "./screens/AretehomesInvestSc";
import { useEffect, useState } from "react";
import MobReferAndEarn from "./screens/ReferAndEarn .mob";
import MobContact from "./screens/Contact.mob";
import MobChannelPartner from "./screens/ChannelPartner.mob";
import MobBlogSc from "./screens/BlogSc.mob";
import MobCareersSc from "./screens/CareersSc.mob";
import MobEnergySc from "./screens/EnergySc.mob";
import BottomMenu from "./components/comercial Properties/BottomMenu";
import AboutUsSc from "./screens/AboutUsSc";
import NewsMediaScMob from "./screens/NewsMediaSc.mob";
import ServicedApartMobSc from "./screens/ServicedApartSc.mob";
import SkyhighInvestMobSc from "./screens/SkyhighInvestSc.mob";
import AretehomesInvestMobSc from "./screens/AretehomesInvestSc.mob";
import SkyHighScMob from "./screens/SkyHighSc.mob";
import AreteHomesMob from "./screens/AreteHomes.mob";
import AboutUsScMob from "./screens/AboutUsSc.mob";
import ExpertiseSc from "./screens/ExpertiseSc";
import ExpertiseScMob from "./screens/ExpertiseSc.mob";
import WhyInvestSc from "./screens/WhyInvestSc";
import WhyInvestScMob from "./screens/WhyInvestSc.mob";
import HomeScMob from "./screens/HomeSc.mob";
import FooterMob from "./components/Footer.mob";

function App() {
  const [isMobile,setIsMobile]=useState(false);
  useEffect(() => {
    const details = navigator.userAgent;
    const regexp = /android|iphone|kindle|ipad/i;
    const isMobileDevice = regexp.test(details);
    if(isMobileDevice){
      setIsMobile(true);
    }
  },[]);
  console.log("app",isMobile)
  if(!isMobile){
  return (
    <BrowserRouter>
      <Header/>
      <Flex
        as="main"
        direction="column"
        w="100%"
        minH="xl"
        bgColor="white"
        color="black"
        overflowX="hidden"
        align="center"
        justify="center"
      >
        <Routes>
          <Route path="/" element={<HomeSc />} />
          <Route path="/about-us" element={<AboutUsSc />} />
          <Route path="/expertise" element={<ExpertiseSc />} />
          <Route path="/why-invest" element={<WhyInvestSc />} />
          <Route path="/careers" element={<CareersSc />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/energy-get-in-touch-with-us" element={<EnergySc />} />
          <Route path="/channel-partner" element={<ChannelPartner />} />
          <Route path="/sky-high" element={<SkyHighSc />} />
          <Route path="/arete-homes" element={<AreteHomes />} />
          <Route path="/news-and-media" element={<NewsMediaSc />} />
          <Route path="/refer-and-earn" element={<ReferAndEarn />} />
          <Route path="/green-power" element={<EnergySc />} />
          <Route path="/commercial-properties" element={<CommercialProperties />} />
          <Route path="/serviced-apartments" element={<ServicedApartSc />} />
          <Route path="/blog" element={<BlogSc />} />
          <Route path="/sky-high-invest" element={<SkyhighInvestSc />} />
          <Route path="/arete-homes-invest" element={<AretehomesInvestSc />} />
        </Routes>
      </Flex>
      <Footer />
    </BrowserRouter>
  );}
  else{
    return (
      <BrowserRouter>
        <HeaderMob/>
        <Flex
          as="main"
          direction="column"
          w="100%"
          minH="xl"
          bgColor="white"
          color="black"
          overflowX="hidden"
          align="center"
          justify="center"
        >
          <Routes>
            <Route path="/" element={<HomeScMob />} />
            <Route path="/about-us" element={<AboutUsScMob />} />
            <Route path="/expertise" element={<ExpertiseScMob />} />
            <Route path="/why-invest" element={<WhyInvestScMob />} />
            <Route path="/careers" element={<MobCareersSc />} />
            <Route path="/contact-us" element={<MobContact />} />
            <Route path="/energy-get-in-touch-with-us" element={<MobEnergySc />} />
            <Route path="/channel-partner" element={<MobChannelPartner />} />
            <Route path="/sky-high" element={<SkyHighScMob />} />
            <Route path="/arete-homes" element={<AreteHomesMob />} />
            <Route path="/news-and-media" element={<NewsMediaScMob/>} />
            <Route path="/refer-and-earn" element={<MobReferAndEarn />} />
            <Route path="/commercial-properties" element={<CommercialProperties />} />
            <Route path="/serviced-apartments" element={<ServicedApartMobSc />} />
            <Route path="/blog" element={<MobBlogSc />} />
            <Route path="/sky-high-invest" element={<SkyhighInvestMobSc />} />
            <Route path="/arete-homes-invest" element={<AretehomesInvestMobSc />} />
          </Routes>
        </Flex>
        <BottomMenu/>
        <FooterMob/>
        {/* <Footer /> */}
      </BrowserRouter>
    );}
}

export default App;
