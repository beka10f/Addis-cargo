// Function to send an email when the contact form is submitted
function sendEmail(event) {
  event.preventDefault(); // Prevent form submission

  // Get form data
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Compose email details
  var emailData = {
    to: "addis.ship@gmail.com",
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
  const weight = parseFloat(document.getElementById("weight").value);
  const unit = document.getElementById("unit").value;
  const pickupLocation = document.getElementById("pickup-location").value;
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

  // Save the calculated information to local storage
  localStorage.setItem("weight", `${weight} ${unit}`);
  localStorage.setItem("pickupLocation", pickupLocation);
  localStorage.setItem("price", `$${price.toFixed(2)}`);
  localStorage.setItem("shippingSpeed", shippingSpeed); // Add this line

  // Construct the query parameters
  const queryParams = `weight=${encodeURIComponent(
    weight
  )}&unit=${encodeURIComponent(unit)}&pickupLocation=${encodeURIComponent(
    pickupLocation
  )}&shippingSpeed=${encodeURIComponent(
    shippingSpeed
  )}&price=${encodeURIComponent(price.toFixed(2))}`;

  // Redirect to the "ship_now.html" page with the query parameters
  window.location.href = `ship_now.html?${queryParams}`;
}

///////


document.getElementById('english-button').addEventListener('click', function() {
  document.getElementById('product1-description').innerText = 'We simplify online shopping for you. Purchase products from international stores and get them delivered straight to Ethiopia.';
  document.getElementById('product2-description').innerText = 'Our service provides you with the US dollars you need. You simply pay us in Birr, we give you the dollars for your imports. ';
});

document.getElementById('amharic-button').addEventListener('click', function() {
  document.getElementById('product1-description').innerText = 'ብራችን ወደ ዶላር ቀይሩ። ከፈለጋችሁ አገር እቃ ገዝታችሁ ወደኢትዮጵያ ማስመጣት ትችላላችሁ።';
  document.getElementById('product2-description').innerText = 'ለኢትዮጵያ ቢዝነሶች ከዉጪ ሀገር እቃ ማስገባት እናቀላለን። ብሩ ኢትዮጵያ ሲሰጥ ከውጪ ሀገር በዶላር ዕቃው እንገዛለን።';
});
