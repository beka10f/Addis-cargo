// Function to send an email when the contact form is submitted
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

// Define the pricing table
const pricingTable = [
  {
    weightRange: "Below 3 Kg",
    lbRange: "Below 6 lb",
    priceKg: 45,
    priceLb: 45,
  },
  { weightRange: "3-10 Kg", lbRange: "6-22 lb", priceKg: 18.0, priceLb: 8.16 },
  {
    weightRange: "11-50 Kg",
    lbRange: "23-110 lb",
    priceKg: 14.0,
    priceLb: 6.35,
  },
  {
    weightRange: "51-100 Kg",
    lbRange: "111-220 lb",
    priceKg: 13.0,
    priceLb: 5.9,
  },
  {
    weightRange: "101-300 Kg",
    lbRange: "221-660 lb",
    priceKg: 12.0,
    priceLb: 5.45,
  },
];

// Function to toggle between Kg and lb units
function toggleUnit(unit) {
  if (unit === "kg") {
    // Display Kg unit as active and hide lb unit
    document.getElementById("kg-button").classList.add("active");
    document.getElementById("lb-button").classList.remove("active");
    const kgRanges = document.getElementsByClassName("weight-range-kg");
    const lbRanges = document.getElementsByClassName("weight-range-lb");
    const kgPrices = document.getElementsByClassName("price-kg");
    const lbPrices = document.getElementsByClassName("price-lb");

    // Show Kg ranges and prices, hide lb ranges and prices
    for (let i = 0; i < kgRanges.length; i++) {
      kgRanges[i].style.display = "inline";
      lbRanges[i].style.display = "none";
      kgPrices[i].style.display = "inline";
      lbPrices[i].style.display = "none";
    }
  } else if (unit === "lb") {
    // Display lb unit as active and hide Kg unit
    document.getElementById("kg-button").classList.remove("active");
    document.getElementById("lb-button").classList.add("active");
    const kgRanges = document.getElementsByClassName("weight-range-kg");
    const lbRanges = document.getElementsByClassName("weight-range-lb");
    const kgPrices = document.getElementsByClassName("price-kg");
    const lbPrices = document.getElementsByClassName("price-lb");

    // Show lb ranges and prices, hide Kg ranges and prices
    for (let i = 0; i < kgRanges.length; i++) {
      kgRanges[i].style.display = "none";
      lbRanges[i].style.display = "inline";
      kgPrices[i].style.display = "none";
      lbPrices[i].style.display = "inline";
    }
  }
}

// Initially, display prices in Kg
toggleUnit("kg");

function calculatePrice() {
  const productDescription = document.getElementById("product-description")
    .value;
  const weight = parseFloat(document.getElementById("weight").value);
  const unit = document.getElementById("unit").value;
  const origin = document.getElementById("origin").value;
  const shippingSpeed = document.getElementById("shipping-speed").value;
  let price = 0;

  // Calculate the price based on the weight and unit
  if (weight <= 3 && unit === "kg") {
    price = 50;
  } else if (weight <= 6 && unit === "lb") {
    price = 50;
  } else if (weight > 3 && weight <= 10 && unit === "kg") {
    price = 18.0 * weight;
  } else if (weight > 6 && weight <= 22 && unit === "lb") {
    price = 8.16 * weight;
  } else if (weight > 10 && weight <= 50 && unit === "kg") {
    price = 14.0 * weight;
  } else if (weight > 22 && weight <= 110 && unit === "lb") {
    price = 6.35 * weight;
  } else if (weight > 50 && weight <= 100 && unit === "kg") {
    price = 13.0 * weight;
  } else if (weight > 110 && weight <= 220 && unit === "lb") {
    price = 5.9 * weight;
  } else if (weight > 100 && weight <= 300 && unit === "kg") {
    price = 12.0 * weight;
  } else if (weight > 220 && weight <= 660 && unit === "lb") {
    price = 5.45 * weight;
  }

  // Apply additional calculations based on shipping speed if necessary
  if (shippingSpeed === "Express (5 - 7 days)") {
    price += 10; // Add express shipping fee
  } else if (shippingSpeed === "Expedited (2 - 5 days)") {
    price += 20; // Add expedited shipping fee
  }

  // Display the price estimate
  document.getElementById(
    "receipt-product-description"
  ).textContent = productDescription;
  document.getElementById("receipt-weight").textContent = `${weight} ${unit}`;
  document.getElementById("receipt-origin").textContent = origin;
  document.getElementById("receipt-shipping-speed").textContent = shippingSpeed;
  document.getElementById("receipt-price").textContent = `$${price.toFixed(2)}`;
}

function openShipNowModal() {
  document.getElementById("ship-now-modal").style.display = "block";
}

function closeShipNowModal() {
  document.getElementById("ship-now-modal").style.display = "none";
}

function submitShipNow() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const contactOptions = document.getElementById("contact-options").value;
  const estimate = document.getElementById("receipt-price").textContent;
  const productDescription = document.getElementById("product-description").value;
  const weight = document.getElementById("receipt-weight").textContent;
  const origin = document.getElementById("receipt-origin").textContent;
  const shippingSpeed = document.getElementById("receipt-shipping-speed").textContent;
  const price = document.getElementById("receipt-price").textContent;

  // Include the product description, weight, origin, shipping speed, and price in the pre-written text
  const preWrittenText = `Estimate: ${estimate}
Name: ${name}
Phone: ${phone}
Product Description: ${productDescription}
Weight: ${weight}
Origin: ${origin}
Shipping Speed: ${shippingSpeed}
Price: ${price}`;

  // Handle the submission according to the chosen contact method
  if (contactOptions === "call") {
    window.location.href = `tel:2027631879`;
  } else if (contactOptions === "text") {
    const smsLink = `sms:2027631879`;
    window.location.href = smsLink;
  } else if (contactOptions === "email") {
    const mailtoLink = `mailto:beka10f@yahoo.com?subject=Shipping Inquiry&body=${encodeURIComponent(
      preWrittenText
    )}`;
    window.location.href = mailtoLink;
  }
  
  // Send email with the entered information
  const emailData = {
    to: "beka10f@yahoo.com",
    subject: "Shipping Inquiry",
    body: preWrittenText,
  };
  Email.send(emailData);
}
