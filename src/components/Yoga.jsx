import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/userDetail.css";
import { useNavigate } from "react-router-dom";

const Yoga = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    age: 0, // Default value set to null
    personaType: "",
    yogaExperience: "",
    intention: "",
    aromaSensitivity: "",
    wantsUpdates: "",
    instagramHandle: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // If age field is being updated, convert the value to a number
    if (name === "age" && value !== "") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: Number(value), // Convert to number
      }));
    } else if (name === "age") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: null, // If value is empty, reset to null
      }));
    } else if (name === "phoneNumber") {
      // Remove all non-digit characters
      const digitsOnly = value.replace(/\D/g, "");
      setFormData((prevData) => ({
        ...prevData,
        [name]: digitsOnly,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "https://stillcircle.adityashrm500.workers.dev/api/v1/yoga-event",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message);
        navigate("/contact");
      } else {
        toast.error(data.message || "Failed to submit. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="user-details-container">
        <ToastContainer />
        <form onSubmit={handleSubmit} className="user-details-form">
          <div className="detail-logo-div">
            <img src="logo31.png" className="detail-logo" />
          </div>
          <div className="detail-text">
            <p className="detail1-text1">Join Waitlist.</p>
            <p className="detail2-text2">
              Please tell us a bit about yourself so we can review your request
              to join the waitlist.
            </p>
          </div>
          <div className="form-group">
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Full Name"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Phone Number- eg (9419112345)"
              value={formData.phoneNumber}
              inputMode="numeric" // mobile numeric keypad
              pattern="[0-9]*" // numeric input pattern
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="number"
              id="age"
              name="age"
              placeholder="Age"
              value={formData.age || ""} // Display null as empty string
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <select
              id="personaType"
              name="personaType"
              value={formData.personaType}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled hidden>
                How would you describe yourself?
              </option>
              <option value="ENTREPRENEUR_FOUNDER">
                Entrepreneur / Founder
              </option>
              <option value="WORKING_PROFESSIONAL">Working Professional</option>
              <option value="CREATIVE_ARTIST">Creative / Artist</option>
              <option value="WELLNESS_PRACTITIONER">
                Wellness Practitioner
              </option>
              <option value="STUDENT">Student</option>
              <option value="ATHLETE_SPORTSPERSON">
                Athlete / Sportsperson / Fitness Enthusiast
              </option>
              <option value="HOMEMAKER">Homemaker</option>
              <option value="EXPLORING">Exploring</option>
              <option value="OTHER">Other</option>
            </select>
          </div>

          <div className="form-group">
            <select
              id="yogaExperience"
              placeholder="How would you describe your relationship with yoga?"
              name="yogaExperience"
              value={formData.yogaExperience}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled hidden>
                How would you describe your relationship with yoga?
              </option>

              <option value="NEW_TO_YOGA">New To Yoga</option>
              <option value="OCCASIONAL_PRACTICE">Occasional Practice</option>
              <option value="REGULAR_PRACTICE">Regular Practice</option>
            </select>
          </div>

          <div className="form-group">
            <select
              id="intention"
              name="intention"
              value={formData.intention}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled hidden>
                What are you hoping to receive from this experience?
              </option>

              <option value="DEEP_CALM">A deep sense of calm</option>
              <option value="BREAK_FROM_ROUTINE">A break from routine</option>
              <option value="SENSORY_EXPLORATION">Sensory exploration</option>
              <option value="GROUNDING_MINDFULNESS">
                Grounding and mindfulness
              </option>
              <option value="SOMETHING_DIFFERENT">Something different</option>
            </select>
          </div>

          <div className="form-group">
            <select
              id="aromaSensitivity"
              name="aromaSensitivity"
              placeholder="Are you sensitive to aroma or essential oils?"
              value={formData.aromaSensitivity}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled hidden>
                Are you sensitive to aromas or essential oils?
              </option>
              <option value="YES">Yes</option>
              <option value="NO">No</option>
              <option value="NOT_SURE">Not Sure</option>
            </select>
          </div>

          <div className="form-group">
            <select
              id="wantsUpdates"
              name="wantsUpdates"
              placeholder="Want updates on future Still Circle experiences?"
              value={formData.wantsUpdates}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled hidden>
                Want updates on future Still Circle experiences?
              </option>
              <option value="YES">Yes</option>
              <option value="NO">No</option>
            </select>
          </div>

          <div className="form-group">
            <input
              type="text"
              id="instagramHandle"
              name="instagramHandle"
              placeholder="Instagram Handle"
              value={formData.instagramHandle}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="user-btn">
            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "Submitting..." : "SUBMIT"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Yoga;
