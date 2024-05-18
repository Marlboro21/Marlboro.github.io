document.getElementById("sendMessageBtn").addEventListener("click", function() {
    // Get input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

    // Send the message (replace this with your actual message sending functionality)
    // For demonstration purposes, we'll just log the message to the console
    console.log("Message sent successfully!");
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Phone: " + phone);
    console.log("Message: " + message);

    // Show a confirmation message to the user
    alert("Mensaje enviado exitosamente!");

    // Clear input fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("message").value = "";
  });
