import React from "react";

const ContactMe = () => {
  return (
    <div>
      <div id="contact" className="contact_section">
        <div className="contact_header">
          <h5>Get In Touch</h5>
          <h3>Contact me</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div>
          <form action="" className="contactme">
            <div className="form_group">
              <div className="form_field">
                <label htmlFor="">First Name</label>
                <input type="text" />
              </div>
              {/* ==================== */}
              <div className="form_field">
                <label htmlFor="">Last Name</label>
                <input type="text" />
              </div>
            </div>
            {/* ===================== */}

            <div className="form_group">
              <div className="form_field">
                <label htmlFor="">Email</label>
                <input type="email" />
              </div>
              {/* ===================== */}
              <div className="form_field">
                <label htmlFor="">Phone Number</label>
                <input type="tel" />
              </div>
            </div>
            {/* ========================= */}

            <div className="message_field">
              <label htmlFor="">Message</label>
              <textarea
                id="description"
                cols="30"
                rows="8"
                name=""
                placeholder="Type your message..."
              ></textarea>
            </div>

            {/* ========================= */}
            <div class="terms_check">
              <input type="checkbox" id="checkbox" name="checkbox" />
              <label htmlFor="checkbox">I accept the terms</label>
            </div>

            {/* =========================== */}

            <div className="form_submit">
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
