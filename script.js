function sendEmail(event) {
  event.preventDefault(); // Prevent form submission

  // Get form data
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Compose email details
  var emailData = {
    to: "beka10f@yahoo.com",
    from: email,
    subject: "New Message from Website Contact Form",
    body: "Name: " + name + "\nEmail: " + email + "\nMessage: " + message,
  };

  // Send email using SMTPJS library
  Email.send(emailData);

  // Reset form
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";

  // Show success message
  alert("Thank you for your message. We will get back to you soon.");
}

function calculatePrice() {
  const itemTypes = {
    medicine: 15,
    clothing: 10,
    electronics: 50,
    books: 10,
    "baby-products": 10,
    shoes: 15,
    cosmetics: 15,
    jewelry: 30,
    "personal-care": 15,
  };

  const deliveryTimes = {
    standard: "7 to 12 days",
    express: "5 to 7 days",
    expedited: "2 to 5 days",
  };

  const itemType = document.getElementById("item-type").value;
  const origin = document.getElementById("origin").value;
  const deliveryOption = document.getElementById("delivery-option").value;

  // Perform calculations based on the selected options
  let price = itemTypes[itemType] || 0;
  let deliveryTime = deliveryTimes[deliveryOption] || "";

  if (deliveryOption === "express") {
    price *= 1.5;
  } else if (deliveryOption === "expedited") {
    price *= 2;
  }

  // Display the result
  const priceResult = document.getElementById("price-result");
  priceResult.innerHTML = `Estimated Price: $${price}<br>Estimated Delivery Time: ${deliveryTime}`;

  // Show ship now button
  const shipNowButton = document.getElementById("ship-now-button");
  shipNowButton.style.display = "block";
}

function openEmailClient() {
  const priceResult = document.getElementById("price-result").textContent;
  const email = "beka10f@yahoo.com";
  const subject = "Shipment Estimate";
  const body = `Hello,\n\nI would like to discuss a shipment with the following estimated price:\n\n${priceResult}\n\nLooking forward to your response.\n\nBest regards,`;

  const modal = document.createElement("div");
  modal.classList.add("modal");

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");

  const closeButton = document.createElement("button");
  closeButton.classList.add("close-button");
  closeButton.innerHTML = "&times;";
  closeButton.addEventListener("click", closeModal);

  const title = document.createElement("h3");
  title.textContent = "Contact Options";

  const description = document.createElement("p");
  description.textContent = "Please choose your preferred method of contact:";

  const callButton = document.createElement("button");
  callButton.textContent = "Call";
  callButton.addEventListener("click", function () {
    // Replace the phone number with the appropriate phone number
    window.location.href = "tel:+12027631879";
    closeModal();
  });

  const emailButton = document.createElement("button");
  emailButton.textContent = "Email";
  emailButton.addEventListener("click", function () {
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    closeModal();
  });

  modalContent.appendChild(closeButton);
  modalContent.appendChild(title);
  modalContent.appendChild(description);
  modalContent.appendChild(callButton);
  modalContent.appendChild(emailButton);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  function closeModal() {
    document.body.removeChild(modal);
  }
}
var menu = document.getElementById("menu");
var toggleBtn = document.getElementById("toggle-btn");

toggleBtn.addEventListener("click", function () {
  menu.classList.toggle("show");
});
