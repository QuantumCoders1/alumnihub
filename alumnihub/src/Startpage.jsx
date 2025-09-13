import { Link } from "react-router-dom";
import "./Startpage.css";

function Startpage() {
  return (
    <div className="start-container">
      <div className="start-left">
        <h1>Alumni Portal</h1>
        <p>
          Stay connected with your alma mater and friends. 
          Build networks and propel your career to the next stage.
        </p>
        <div className="button-group">
          <Link to="/login" className="btn btn-primary">Login</Link>
          <Link to="/register" className="btn btn-outline">Register</Link>
        </div>
      </div>

      <div className="start-right">
        <img src="https://maxpharma.org/admin/alumni_images/alumni_image.jpg"/>
      </div>
    </div>
  );
}

export default Startpage;
