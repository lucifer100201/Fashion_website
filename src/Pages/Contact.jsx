import React from 'react'
import './contact.css';

const Contact = () => {
  return (
    <div class="site-footer">
      <div class="page-width">
        <div class="inner-flex">
          <div class="newsletter">
            <h2>Newsletter</h2>
            <p>Get news about articles and updates in your inbox.</p>
          </div>
          <div class="form-input">
            <form>
              <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="NAME" />
              </div>
              <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="EMAIL" />
              </div>
              <div class="form-group">
                <label for="message">Message:</label>
                <textarea id="message" name="message" rows="1" placeholder="MESSAGE"></textarea>
              </div>

            </form>
          </div>
        </div>
        <div class="contact_heading">
          <button class="circle-container">
            <svg class="circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
              <circle cx="100" cy="100" r="90" stroke="#F07E15" stroke-width="2" fill="none" />
            </svg>
            <div class="text-container">
              <span class="text">SEND</span>
            </div>
          </button>
          <h1>GET<br />IN TOUCH</h1>
        </div>
      </div>
      <div class="copyright">Copyright 2022 All Right Reserved By SG</div>
    </div>
  )
}

export default Contact
