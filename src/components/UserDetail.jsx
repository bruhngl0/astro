import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/userDetail.css";
import { useNavigate } from "react-router-dom";

const UserDetail = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    age: 0, // Default value set to null
    occupationCategory: "",
    playedPickleball: "",
    excitedAbout: "",
    idealSundayVibe: "",
    heardFrom: "",
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
        "https://clone.adityashrm500.workers.dev/api/v1/pickleball",
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
            <img src="aslogo.png" className="detail-logo" />
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
              placeholder="Phone Number"
              value={formData.phoneNumber}
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
              id="occupationCategory"
              name="occupationCategory"
              value={formData.occupationCategory}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled hidden>
                How would you describe yourself?
              </option>
              <option value="Entrepreneur_Founder">Entrepreneur</option>
              <option value="Working_Professional">Working Professional</option>
              <option value="Creative_Artist">Creative</option>
              <option value="Wellness_Practitioner">
                Wellness Practitioner
              </option>
              <option value="Student">Student</option>
              <option value="Athlete_Sportsperson_Fitness_Enthusiast">
                Athlete
              </option>
              <option value="Homemaker">Homemaker</option>
              <option value="Currently_exploring">Exploring</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <select
              id="playedPickleball"
              placeholder="Have you played pickleball before?"
              name="playedPickleball"
              value={formData.playedPickleball}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled hidden>
                Have you played pickleball before?
              </option>

              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="A_few_times">A few times</option>
            </select>
          </div>

          <div className="form-group">
            <select
              id="excitedAbout"
              name="excitedAbout"
              value={formData.excitedAbout}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled hidden>
                What are you most excited about at Serve Social?
              </option>

              <option value="Playing_pickleball">Playing pickleball</option>
              <option value="Meeting_new_people">Meeting new people</option>
              <option value="F_B_popups">F&B pop-ups</option>
              <option value="Just_hanging_out">Just hanging out</option>
              <option value="All_of_it">All of it</option>
            </select>
          </div>

          <div className="form-group">
            <input
              id="idealSundayVibe"
              name="idealSundayVibe"
              placeholder="How would you describe your ideal Sunday vibe in one line? "
              value={formData.idealSundayVibe}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <select
              id="heardFrom"
              name="heardFrom"
              value={formData.heardFrom}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled hidden>
                How did you hear about this event?
              </option>
              <option value="Instagram">Instagram</option>
              <option value="Friend">Friend</option>
              <option value="WhatsApp_Group">Whatsapp group</option>
              <option value="Other">Other</option>
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

export default UserDetail;
