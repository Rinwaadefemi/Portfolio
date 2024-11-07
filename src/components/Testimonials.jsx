import React from "react";
import star from "../images/star star.png";
import profile1 from "../images/yellow profile.png";
import profile2 from "../images/sky blue profile.png";
import profile3 from "../images/light brown profile.png";

const Testimonials = () => {
  return (
    <div>
      <div id="testimonials" className="testimonials_section">
        <div className="testimonials_header">
          <h5>Clients Feedback</h5>
          <h2>Customer testimonials</h2>
        </div>
        {/* ====================================== */}
        <div className="testimonials_list">
          <div className="testimonial_item">
            <div className="stars">
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
            </div>
            <p className="testimonial_quote">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare."
            </p>
            <div className="testimonial_profile">
              <img src={profile1} alt="profilepic" />
              <div className="testimonial_name">
                <h4>Dianne Russell</h4>
                <p>Starbucks</p>
              </div>
            </div>
          </div>
          {/* ======================== */}
          <div className="testimonial_item">
            <div className="stars">
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
            </div>
            <p className="testimonial_quote">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare."
            </p>
            <div className="testimonial_profile">
              <img src={profile2} alt="profilepic" />
              <div className="testimonial_name">
                <h4>Kristin Watson</h4>
                <p>Louis Vuitton</p>
              </div>
            </div>
          </div>
          {/* ========================= */}
          <div className="testimonial_item">
            <div className="stars">
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
            </div>
            <p className="testimonial_quote">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare."
            </p>
            <div className="testimonial_profile">
              <img src={profile3} alt="profilepic" />
              <div className="testimonial_name">
                <h4>Kathryn Murphy</h4>
                <p>McDonald's</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
