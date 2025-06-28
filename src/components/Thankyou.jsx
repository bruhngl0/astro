import "../styles/thankyou.css";
import Socials from "./Socials";

const Thankyou = () => {
  return (
    <div className="tq-main">
      <div className="tq-icon">
        <img src="tq1-logo.png" className="tq-logo" />
      </div>
      <h1 className="tq-head">Thankyou!</h1>
      <p className="tq-des">
        <span style={{ fontSize: "16px", fontStyle: "bold" }}>
          Disclaimer:{" "}
        </span>{" "}
        <br /> <br /> This is a waitlist, not a confirmed spot. Once you
        register, we’ll review your entry and reach out via email if your spot
        is confirmed. Space is limited to keep the experience intimate and
        intentional.
      </p>

      <div className="tq-socials">
        <Socials />
      </div>

      <div className="tq-cpright">
        <p>©2025</p>

        <p>stillcircle.com</p>
      </div>
    </div>
  );
};

export default Thankyou;
