import React from "react";
import "../css/index.css";
import Fade from "react-reveal/Fade";
function FormModel(props) {
  let toggleReveal = props.display;
  return (
    <Fade bottom>
      <div className={toggleReveal ? "formModel" : "modelOff"}>
        <form>
          <label className="teal-text">Name</label>
          <input type="text" name="name" className="white-text grey darken-3" />
          <label className="teal-text">Email</label>
          <input
            type="text"
            name="email"
            className="white-text grey darken-3"
          />
          <label className="teal-text">Subject</label>
          <input
            type="text"
            name="subject"
            className="white-text grey darken-3"
          />
          <label className="teal-text">Message</label>
          <textarea
            name="comments"
            placeholder="Let me know how I can help you..."
            className="white-text grey darken-3"
          />
          <submit />
        </form>
      </div>
    </Fade>
  );
}
export default FormModel;
