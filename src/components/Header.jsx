import header_img from "../assets/scenery/bg.jpg";

function Header() {
  return (
    <div className="hero_container">
      <div
        className="header_image"
        style={{ backgroundImage: `url(${header_img})` }}
      ></div>
    </div>
  );
}

export default Header;
