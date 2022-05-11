import GlitchText from "../GlitchText";

const Navbar = () => {
  return (
    <div className="navbar d-flex justify-content-between">
      <div className="navbar-brand d-flex">
        <GlitchText translateValue={2}>D</GlitchText>
        <GlitchText translateValue={2}>U</GlitchText>
      </div>
      <div className="navbar-menu">
        <a href="#">work</a>
        <a href="#">about</a>
        <a href="#">contact</a>
      </div>
    </div>
  );
};

export default Navbar;
