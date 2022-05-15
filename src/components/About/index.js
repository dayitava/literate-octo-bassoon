/* eslint-disable @next/next/no-img-element */
import SectionHead from "../Section/SectionHead";
import DayitavaDP from "../../assets/AboutPic.png";
import uiuxicon from "../../assets/uiuxicon.svg";
import figmaicon from "../../assets/figmaicon.png";
import xdicon from "../../assets/xdicon.png";
import coffeeicon from "../../assets/coffeeicon.png";
import cssicon from "../../assets/cssicon.png";
import aiicon from "../../assets/aiicon.png";
import animeicon from "../../assets/animeicon.png";
import foodicon from "../../assets/foodicon.svg";
import hikingicon from "../../assets/hikingicon.svg";
import memeicon from "../../assets/memeicon.png";
import travelicon from "../../assets/travelicon.png";
import upanyasicon from "../../assets/upanyasicon.svg";

const About = () => {
  const interestList = [
    {
      id: 1,
      title: "UI/UX",
      img: uiuxicon,
    },
    {
      id: 2,
      title: "Figma",
      img: figmaicon,
    },
    {
      id: 3,
      title: "Adobe XD",
      img: xdicon,
    },
    {
      id: 4,
      title: "Cold Coffee",
      img: coffeeicon,
    },
    {
      id: 5,
      title: "CSS",
      img: cssicon,
    },
    {
      id: 6,
      title: "Dal Baati",
      img: foodicon,
    },
    {
      id: 7,
      title: "Anime",
      img: animeicon,
    },
    {
      id: 8,
      title: "Logo Design",
      img: upanyasicon,
    },
    {
      id: 9,
      title: "Memes",
      img: memeicon,
    },
    {
      id: 10,
      title: "Illustrator",
      img: aiicon,
    },
    {
      id: 11,
      title: "Hiking",
      img: hikingicon,
    },
    {
      id: 12,
      title: "Travelling",
      img: travelicon,
    },
  ];

  return (
    <section>
      <SectionHead title={"About"} />
      <div className="about-me">
        <div className="d-flex dp-and-info">
          <img src={DayitavaDP.src} alt="Dayitava Upadhyay's photo" />
          <div className="my-info">
            <h1>I&apos;m Dayitava</h1>
            <p>
              I am a UI/UX Designer with experience in designing high-quality
              interactive and physical interfaces for various applications,
              which includes mobile, web, desktop and native applications. My
              work focuses on user centric design techniques that allow me to
              conceptualize the end to end product. I also have hands-on
              experience in prototyping of projects, implementing UX guidelines,
              building wireframes and testing them against latest designs.
            </p>
          </div>
        </div>
        <div className="my-interests">
          <h2>My life goes around...</h2>
          <div className="interests-list d-flex">
            {interestList.map((interest) => (
              <div className="interest d-flex" key={interest.id}>
                <img src={interest.img.src} alt={`${interest.title} icon`} />
                {interest.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
