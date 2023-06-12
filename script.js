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

// Function to calculate the price and estimated delivery time
// Function to calculate the price and estimated delivery time
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

  // Get selected options from the form
  const itemType = document.getElementById("item-type").value;
  const origin = document.getElementById("origin").value;
  const deliveryOption = document.getElementById("delivery-option").value;

  // Perform calculations based on the selected options
  const itemPrice = itemTypes[itemType] || 0;
  let shippingPrice = 0;
  let totalPrice = itemPrice;

  if (deliveryOption === "express") {
    shippingPrice = 10;
  } else if (deliveryOption === "expedited") {
    shippingPrice = 20;
  }

  totalPrice += shippingPrice;

  // Update the price in the receipt section
  const itemPriceElement = document.getElementById("item-price");
  const shippingPriceElement = document.getElementById("shipping-price");
  const totalPriceElement = document.getElementById("total-price");

  itemPriceElement.textContent = `$${itemPrice.toFixed(2)}`;
  shippingPriceElement.textContent = `$${shippingPrice.toFixed(2)}`;
  totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;

  // Show "Ship Now" button
  const shipNowButton = document.getElementById("ship-now-button");
  shipNowButton.style.display = "block";
}

// Function to open email client
function openEmailClient() {
  // Get the selected options from the form
  const itemType = document.getElementById("item-type").value;
  const deliveryOption = document.getElementById("delivery-option").value;

  // Get the price result from the page
  const itemPrice = document.getElementById("item-price").textContent;
  const shippingPrice = document.getElementById("shipping-price").textContent;
  const totalPrice = document.getElementById("total-price").textContent;
  const email = "beka10f@yahoo.com";
  const subject = "Shipment Estimate";
  const body = `Hello,\n\nI would like to discuss a shipment with the following details:\n\nItem: ${itemType}\nDelivery Type: ${deliveryOption}\n\nEstimated Prices:\n\nItem Price: ${itemPrice}\nShipping Price: ${shippingPrice}\nTotal Price: ${totalPrice}\n\nLooking forward to your response.\n\nBest regards,`;

  // Create a modal for contact options
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
  });

  const emailButton = document.createElement("button");
  emailButton.textContent = "Email";
  emailButton.addEventListener("click", function () {
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
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
