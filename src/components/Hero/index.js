/* eslint-disable @next/next/no-img-element */
import GlitchText from "../GlitchText";
import Dayitava from "../../assets/dayitava.svg";
import Upadhyay from "../../assets/upadhyay.svg";

const Hero = () => (
  <section className="hero">
    <div className="name">
      <div className="d-flex dayi">
        <img src={Dayitava.src} alt="Dayitava svg" />
        <GlitchText style={{ marginLeft: "20px", marginRight: "20px" }}>
          Dayitava
        </GlitchText>
        <img src={Dayitava.src} alt="Dayitava svg" />
      </div>
      <div className="d-flex upa">
        <img src={Upadhyay.src} alt="Upadhyay svg" />
        <GlitchText style={{ marginLeft: "20px", marginRight: "20px" }}>
          Upadhyay
        </GlitchText>
        <img src={Upadhyay.src} alt="Upadhyay svg" />
      </div>
    </div>
    <div className="intro">
      I am a UI/UX Designer based in Gwalior, India. I am a self-taught designer
      and I am passionate about creating beautiful and functional user
      interfaces.
    </div>
    <div className="hero-button-group d-flex justify-content-center">
      <button className="theme-btn black mr-3">See My Portfolio</button>
      <button className="theme-btn white">Download Resume</button>
    </div>
  </section>
);

export default Hero;
