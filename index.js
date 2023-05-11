
     // Handle form submission
     document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting
        
        // Display the message
        var message = document.getElementById('message');
        message.textContent = "Our team will contact you soon.";
        document.getElementById('contact-form').reset();
      });
      document.getElementById('contact-form').reset();

async function logJSONData() {

    const response = await fetch("https://gorest.co.in/public/v2/users");
   
    const jsonData = await response.json();
   
    console.log(jsonData);
   
   }