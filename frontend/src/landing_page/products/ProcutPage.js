import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Univers from "./Univers";
import Section from "./Section";

function ProcutPage() {
  return (
    <>
      <Hero />
      <LeftSection
        image={"media/images/kite.png"}
        title={"Kite"}
        description={
          "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        }
        link1={""}
        link1Text={"Try demo"}
        link2={"#"}
        link2Text={"Learn more"}
        googlrePlayImg={"media/images/googlePlayBadge.svg"}
        appStoreImg={"media/images/appstoreBadge.svg"}
        arrowIcon1={<i class="fa-solid fa-arrow-right"></i>}
        arrowIcon2={<i class="fa-solid fa-arrow-right"></i>}
      />
      <RightSection
        image={"media/images/console.png"}
        title={"Console"}
        description={
          "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        }
        link1={"#"}
        link1Text={"Learn more"}
      />
      <LeftSection
        image={"media/images/coin.png"}
        title={"Coin"}
        description={
          "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        }
        link1={"#"}
        link1Text={"Coin"}
        googlrePlayImg={"media/images/googlePlayBadge.svg"}
        appStoreImg={"media/images/appstoreBadge.svg"}
        arrowIcon1={<i class="fa-solid fa-arrow-right"></i>}
      />
      <RightSection
        image={"media/images/kiteconnect.png"}
        title={"Kite Connect API"}
        description={
          "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        }
        link1={"#"}
        link1Text={"Kite Connect "}
        arrowIcon1={<i class="fa-solid fa-arrow-right"></i>}
      />
      <LeftSection
        image={"media/images/varsity.png"}
        title={"Varsity mobile"}
        description={
          "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        }
        googlrePlayImg={"media/images/googlePlayBadge.svg"}
        appStoreImg={"media/images/appstoreBadge.svg"}
      />
      <Section/>
      <Univers />
    </>
  );
}

export default ProcutPage;
