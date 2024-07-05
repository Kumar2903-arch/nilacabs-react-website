import React from "react";
import Gmail from "../images/gmail.jpg";
import Phone from "../images/phone.png";
import Address from '../images/address.jpg';
import "./contact.css";

export default function Contact() {
  return (
    <>
    <div className="contact_page" id="contact">
      <h1>Contact Us</h1>
      <div className="col-md-6 pe-md-5 submit_form">
        <div className="left-form-wrap">
          <h2 className="sec-head animation-element slide-top in-view">
            Send Us a message
          </h2>
          <form>
            <div className="banner-user-details-wrap row">
              <div className="single user-img-details col-md-12">
                <div className="d-flex icon-input mb-4">
                  <input
                    className="form-control form-1"
                    type="text"
                    id="contact_name"
                    placeholder="Your Name"
                  />
                </div>
              </div>
              <div className="single user-img-details col-md-6">
                <div className="d-flex icon-input mb-4">
                  <input
                    className="form-control form-1"
                    type="email"
                    id="contact_email"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              <div className="single user-img-details col-md-6">
                <div className="d-flex icon-input mb-4">
                  <input
                    className="form-control form-1"
                    type="text"
                    id="contact_subject"
                    placeholder="Your Subject..."
                  />
                </div>
              </div>
              <div className="single user-img-details col-md-12">
                <div className="d-flex icon-input mb-4">
                  <textarea
                    name="tamessage"
                    placeholder="Message"
                    rows="7"
                    className="form-control"
                    id="contact_message"
                  ></textarea>
                </div>
              </div>
              <a id="form_submit" onclick="contact_submit()"
                className="submit-btn"
              >
                send message
              </a>
              {/* <button>send message</button> */}
              <div className="submit-btn-top col-md-12"></div>
            </div>
            <div className="form-row thankyou-message">
              <span id="thank_you"></span>
            </div>
          </form>
        </div>
      </div>
    </div>
          <footer className="footer">
            <div className="email">
                <div className="email">
                <img src={Address} alt="" className="gmail_logo"/>
                <h5><span className="bold">Head Office : </span>No.8, First Floor, Thulukanathamman Koil Main Road, Pallikaranai, Chennai, Tamil Nadu 600100</h5>
                </div>
                <div className="email">
                <img src={Gmail} alt="" className="gmail_logo"/>
                <p className="email_id">nilacabs.nilacabs@gmail.com</p>
                </div>
                <div className="email">
                <img src={Phone} alt="" className="phone_logo"/>
                <p className="email_id">044-48657099 / 9846758442</p>
                </div>
            </div>
          </footer>
    </>
  );
}
