import React from "react";

export default function App() {
return (
    
    <form name="Welcome" method="POST" netlify="true" action="/confirm">
     <input type="hidden" name="form-name" value="Welcome" />
        <p><label>If I was to dedicate the next issue you and the continuous discovery challenge you're facing. What would the issue be about?<br />
          <textarea
            name="message"
            id="welcome-form-message"
            aria-labelledby="welcome form message"
            class="form-textarea"
            placeholder="Let me know the types of things I should write about"
            rows="4"
        ></textarea></label>
          </p>
        <p><label>Where did you hear about me?<br />
          <textarea
            name="referral"
            id="welcome-form-referral"
            aria-labelledby="welcome form referral"
            class="form-textarea"
            placeholder="What brought you here…"
            rows="2"
        ></textarea></label>
          </p>
     <button data-element="submit" type="submit">Write for me</button>

</form>
    );
}