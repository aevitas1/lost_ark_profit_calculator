function Footer() {
  let d = new Date();
  let currentYear = d.getFullYear();

  return (
    <>
      <div className="footer">
        <p>Made by aevitas1. &copy; {currentYear}</p>
      </div>
    </>
  );
}

export default Footer;
