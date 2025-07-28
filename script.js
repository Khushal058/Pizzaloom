// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// JS Tab Handling - Show One Item per Category
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    // Handle tab UI
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const selectedCategory = tab.dataset.category;
    const allCards = document.querySelectorAll('.menu-card');

    allCards.forEach(card => {
      const cardCategory = card.dataset.category;

      // Show card if category matches or if 'all' is selected (then show first card)
      if (selectedCategory === 'all') {
        card.style.display = 'block';
        allCards.forEach((c, i) => { c.style.display = i === 0 ? 'block' : 'none'; });
      } else {
        card.style.display = (cardCategory === selectedCategory) ? 'block' : 'none';
      }
    });
  });
});

const stateSelect = document.getElementById("state");
const citySelect = document.getElementById("city");
const deliveryResult = document.getElementById("deliveryResult");
const checkBtn = document.getElementById("checkDelivery");

const stateCityMap = {
  maharashtra: [
    "Mumbai", "Pune", "Nagpur", "Nashik", "Thane", 
    "Aurangabad", "Solapur", "Kolhapur", "Amravati"
  ],
  karnataka: [
    "Bengaluru", "Mysuru", "Hubli", "Mangaluru", 
    "Belgaum", "Tumakuru", "Shivamogga", "Davangere"
  ],
  delhi: [
    "New Delhi", "Dwarka", "Rohini", "Saket", 
    "Karol Bagh", "Janakpuri", "Connaught Place", "Lajpat Nagar"
  ],
  gujarat: [
    "Ahmedabad", "Surat", "Vadodara", "Rajkot", 
    "Bhavnagar", "Jamnagar", "Gandhinagar", "Anand"
  ],
  tamilnadu: [
    "Chennai", "Coimbatore", "Madurai", "Salem", 
    "Tirunelveli", "Tiruchirappalli", "Vellore", "Erode"
  ],
  uttarpradesh: [
    "Lucknow", "Kanpur", "Ghaziabad", "Agra", 
    "Varanasi", "Noida", "Meerut", "Allahabad"
  ]
};

// Populate cities dynamically
stateSelect.addEventListener("change", () => {
  const selectedState = stateSelect.value;
  citySelect.innerHTML = `<option value="">-- Select City --</option>`;

  if (selectedState && stateCityMap[selectedState]) {
    stateCityMap[selectedState].forEach(city => {
      const option = document.createElement("option");
      option.value = city.toLowerCase().replace(/\s+/g, '-');
      option.textContent = city;
      citySelect.appendChild(option);
    });
    citySelect.disabled = false;
  } else {
    citySelect.disabled = true;
  }

  deliveryResult.style.display = "none";
});

checkBtn.addEventListener("click", () => {
  const state = stateSelect.options[stateSelect.selectedIndex].text;
  const city = citySelect.options[citySelect.selectedIndex]?.text;

  if (!stateSelect.value || !citySelect.value) {
    deliveryResult.innerHTML = `<span style="color: #f87171;">⚠️ Please select both state and city.</span>`;
  } else {
    deliveryResult.innerHTML = `
      ✅ <strong>Delivery Available!</strong><br>
      Nearest Pizzaloom outlet in <b>${city}, ${state}</b>.<br>
      Estimated Delivery Time: <b>25–35 mins</b> 🚴‍♂️
    `;
  }

  deliveryResult.style.display = "block";
});

// Accordion Toggle Logic
document.querySelectorAll('.accordion-header').forEach(button => {
  button.addEventListener('click', () => {
    const body = button.nextElementSibling;
    const isOpen = body.style.display === 'block';
    
    // Close all
    document.querySelectorAll('.accordion-body').forEach(b => b.style.display = 'none');
    
    // Toggle current
    body.style.display = isOpen ? 'none' : 'block';
  });
});

// FAQ Accordion Logic
document.querySelectorAll('.accordion-header').forEach(btn => {
  btn.addEventListener('click', () => {
    const body = btn.nextElementSibling;
    const isOpen = body.style.display === 'block';

    // Close all
    document.querySelectorAll('.accordion-body').forEach(item => item.style.display = 'none');

    // Open current
    body.style.display = isOpen ? 'none' : 'block';
  });
});

// Complaint Form Submission (basic)
document.querySelector('.complaint-form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Your complaint has been submitted. Our team will get in touch shortly!");
  this.reset(); // Optional: clear form
});

<script>
  document.querySelector(".footer-bottom p").innerHTML =
    "&copy; " + new Date().getFullYear() + " Pizzaloom. All rights reserved.";
</script>



// Default: Show one card (any) on load
window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.tab[data-category="all"]').click();
});

