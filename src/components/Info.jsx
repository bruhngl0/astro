import React, { useEffect } from "react";
import { gsap } from "gsap";
import "../styles/info.css";

const Info = () => {
  useEffect(() => {
    // GSAP animation for the title and text
    gsap.fromTo(
      ".experience-title",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" },
    );

    gsap.fromTo(
      ".experience-description",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, delay: 0.5, ease: "power3.out" },
    );

    gsap.fromTo(
      ".event-details",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, delay: 1, ease: "power3.out" },
    );

    gsap.fromTo(
      ".cta-button",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, delay: 1.5, ease: "power3.out" },
    );
  }, []);

  return (
    <div className="experience-page">
      {/* Floating Sound Immersion Section */}
      <section className="experience-section">
        <h2 className="experience-title">
          Astro Sports x Ferro Hub present
          <br />
          Serve Social
          <br />
          Where we serve more than just points.
          <br />
        </h2>

        <p className="experience-description">
          A drop-in style pickleball and lifestyle gathering designed for
          beginners and intermediate players combining short-format games with
          curated lounging zones, music, and elevated F&B experiences.
          <br />
          This isn’t just about the sport, it’s about community, good energy,
          and discovering brands that align with how you live and move.
        </p>
      </section>

      {/* Event Details Section */}
      <section className="event-details">
        <h3>Event Details</h3>
        <div className="venue-details">
          <p>
            <strong>Date:</strong> Sunday, 6th July.
          </p>
          <p>
            <strong>Time:</strong> 10:00 AM to 4:00 PM
          </p>

          <p>
            <strong>Venue:</strong> Ferro Hub, Miller’s Road
          </p>
          <p>
            <strong>Price:</strong> ₹1,800 per person
          </p>
        </div>
        <br /> <br />
        <p>Whats included:</p>
        <div className="venue-details">
          <ul>
            <li>Open-format pickleball games throughout the day</li>
            <li>Live DJ set to keep the energy flowing</li>
            <li>Purpose Matcha pop-up</li>
            <li>Specialty coffee & bakes by Isobel</li>
            <li>Fresh wraps & sandwiches</li>
          </ul>
        </div>
        <a href="/userDetail" style={{ textDecoration: "none" }}>
          <button className="info-btn">Join the Waitlist</button>
        </a>
      </section>
    </div>
  );
};

export default Info;
