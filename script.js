document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("changeTextBtn");
    const text = document.getElementById("text");

    button.addEventListener("click", function() {
        text.textContent = "The text has been changed!";
    });
});

// with the exception of one of Identity, Email, or FBID
// each of the following fields is optional

clevertap.onUserLogin.push({
    "Site": {
      "Name": "Jack Montana",            // String
      "Identity": 61026032,              // String or number
      "Email": "jack@gmail.com",         // Email address of the user
      "Phone": "+14155551234",           // Phone (with the country code)
      "Gender": "M",                     // Can be either M or F
      "DOB": new Date(),                 // Date of Birth. Date object
   // optional fields. controls whether the user will be sent email, push etc.
      "MSG-email": false,                // Disable email notifications
      "MSG-push": true,                  // Enable push notifications
      "MSG-sms": true,                   // Enable sms notifications
      "MSG-whatsapp": true,              // Enable WhatsApp notifications
    }
   })