import "./Navbar.css";

function Navbar() {
  var name = "<SC/>";

  return (
    <div className="navbar_container">
      <div className="navbar_left">{name}</div>

      <div className="navbar_right">
        {/* create component NavOptions */}
        <p>About</p>
        <p>Tools</p>
        <p>Experience</p>
        <p>Projects</p>
        <p>Resume</p>
      </div>
    </div>
  );
}

export default Navbar;
