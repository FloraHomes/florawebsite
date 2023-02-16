import React from "react";
import image from "../../../assets/floraEcopolis-images/view 50.. 9.1 PH.jpg";
import image2 from "../../../assets/floraEcopolis-images/FloraCity SET 6......._6 - Photo PH.jpg";
import image3 from "../../../assets/floraEcopolis-images/view 29 PH .1.jpg";
import image4 from "../../../assets/floraEcopolis-images/FloraCity VIEW 31. PH.jpg";
import image5 from "../../../assets/floraEcopolis-images/FloraCity VIEW SET.. 1...._14 - Photo PH 2.0.jpg";
import image6 from "../../../assets/floraEcopolis-images/FloraCity VIEW 32 PH.jpg";
import ReuseableMainComponent from "./ReuseableMainComponent";
const FloraImagesComponent = () => {
  return (
    <>
      <ReuseableMainComponent
        span="A. "
        h1={"1 Bedroom Luxury Flat"}
        headingParagraph="A finely balanced and spacious home , this apartment features a
  living room, guest wc, a balcony, an open kitchen and
  a bedroom."
        imageHeadline="Co-own for Income at N2m per slot (Max. of 5 slots) OR Fully-own the
      apartment."
        image={image}
        isList
        li1={[
          "Per Apartment Price: N17m",
          "Documentation: 5%",
          "Per Slot Price: N2m",
        ]}
        li2={[
          "Total Number of Slots: 140",
          "Annual Rental Profit: 25%",
          "One-Off 12-months Resell Profit: 40%",
        ]}
      />
      <ReuseableMainComponent
        span="B. "
        h1={"1 Bedroom Luxury Duplex (Mezzanine)"}
        headingParagraph="Truly stunning to behold, this loft apartment features a living room, guest wc, an open Kitchen, backyard terrace and garden, a private open sit-out, a first floor balcony and
        a suspended-floor ventilated bedroom."
        imageHeadline="Co-own for Income at N5m per slot (Max. of 5 slots) OR Fully-own the apartment."
        image={image4}
        isList
        li1={[
          "Per Apartment Price: N26m",
          "Documentation: 5%",
          "Per Slot Price: N5m",
        ]}
        li2={[
          "Annual Rental Profit: 35%",
          "One-Off 12-months Resell Profit: 50%",
          "Total Number of Slots: 45",
        ]}
      />
      <ReuseableMainComponent
        span="C. "
        h1={"2 Bedroom Luxury Flat"}
        headingParagraph="You see this right here? It is the definition of beauty and eco lifestyle. It features a ventilated
        living room with terrace, guest wc, an open Kitchen, 2 spacious and well
        ventilated rooms."
        image={image3}
        isList
        li1={[
          "Per Apartment Price: N28.5m",
          "Documentation: 5%",
          "Upper floor: N500,000 extra.",
        ]}
        price="478M"
        extraPrice="Upper floor: N500,000 extra."
      />
      <ReuseableMainComponent
        span="D. "
        h1={"2 Bedroom Luxury Duplex with a Study"}
        headingParagraph="Breathtaking is it right? This stunning 2 bedrooms duplex features a well ventilated living room with
        balcony, BQ, guest wc, an open Kitchen, backyard garden, a private open sit-out, 2
        spacious bedrooms with their respective balconies."
        image={image6}
        isList
        li1={[
          "Per Apartment Price: N36m",
          "Documentation: 5%",
          "Corner piece: N1,000,000 extra.",
        ]}
        price="460M per Apartment"
        extraPrice="Corner piece: N1,000,000 extra."
      />
      <ReuseableMainComponent
        span="E. "
        h1={"3 Bedroom Luxury Flat"}
        headingParagraph="What you see right here is the definition of beauty, luxury and a green lifestyle with trees
        planted at different positions to maximise air circulation. It features a ventilated living room with
        terrace, guest wc, an open Kitchen, 3 spacious and well ventilated rooms."
        image={image5}
        isList
        li1={[
          "Per Apartment Price: N51.5m",
          "Documentation: 5%",
          "Upper floor: N500,000 extra.",
        ]}
        price="465M per Apartment"
        extraPrice="Upper floor: N500,000 extra."
      />
      <ReuseableMainComponent
        span="F. "
        h1={"3 Bedroom Luxury Duplex with a BQ & a study"}
        headingParagraph="We're actually short of words to describe this state of the heart massive 3 bedrooms duplex featuring
        a well ventilated living room with balcony, a spacious BQ, a study, guest wc, an open Kitchen, backyard garden, a private open sit-out, 3 spacious bedrooms with their respective
        balconies."
        image={image2}
        isList
        li1={[
          "Per Slot Price: N57m",
          "Documentation: 5%",
          "Corner piece: N1,000,000 extra.",
        ]}
        price="478m"
        extraPrice="Corner piece: N1,000,000 extra."
      />
    </>
  );
};

export default FloraImagesComponent;
