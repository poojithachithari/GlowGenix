//nav-bar mobile
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

//herosection

function changeImage(src) {
    document.getElementById('mainImage').src = src;
  }

  function updateQty(change) {
    const qtyInput = document.getElementById('qtyInput');
    let value = parseInt(qtyInput.value);
    if (isNaN(value)) value = 1;
    value += change;
    if (value < 1) value = 1;
    qtyInput.value = value;
  }

  function toggleFaq(button) {
    const content = button.nextElementSibling;
    const icon = button.querySelector('span');
    const isOpen = !content.classList.contains('hidden');

    document.querySelectorAll('section button + div').forEach(el => el.classList.add('hidden'));
    document.querySelectorAll('section button span').forEach(span => span.textContent = '+');

    if (!isOpen) {
      content.classList.remove('hidden');
      icon.textContent = '−';
    }
  }

  //product features
  const toggleBtn = document.getElementById("toggle-btn");
  const moreText = document.getElementById("more-text");

  toggleBtn.addEventListener("click", () => {
    const isHidden = moreText.classList.toggle("hidden");
    toggleBtn.textContent = isHidden ? "Read More" : "Read Less";
  });

//slider
const sliderContainer = document.getElementById("slider-container");
const overlay = document.getElementById("overlay");
const handle = document.getElementById("handle");

// Labels
const label1 = document.getElementById("label-day1");
const label5 = document.getElementById("label-day5");
const label33 = document.getElementById("label-day33");

let isDragging = false;

sliderContainer.addEventListener("mousedown", () => isDragging = true);
sliderContainer.addEventListener("mouseup", () => isDragging = false);
sliderContainer.addEventListener("mouseleave", () => isDragging = false);
sliderContainer.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  updateSlider(e.pageX);
});

sliderContainer.addEventListener("touchstart", () => isDragging = true);
sliderContainer.addEventListener("touchend", () => isDragging = false);
sliderContainer.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  updateSlider(e.touches[0].pageX);
});

function updateSlider(x) {
  const rect = sliderContainer.getBoundingClientRect();
  const offset = Math.min(Math.max(0, x - rect.left), rect.width);
  const percent = (offset / rect.width) * 100;

  overlay.style.clipPath = `inset(0 0 0 ${percent}%)`;
  handle.style.left = `${percent}%`;

  // Update label highlight based on slider %
  highlightLabel(percent);
}

function highlightLabel(percent) {
  // Reset all
  label1.classList.remove("text-[#FF7A00]");
  label5.classList.remove("text-[#FF7A00]");
  label33.classList.remove("text-[#FF7A00]");

  if (percent < 33) {
    label1.classList.add("text-[#FF7A00]");
  } else if (percent >= 33 && percent < 66) {
    label5.classList.add("text-[#FF7A00]");
  } else {
    label33.classList.add("text-[#FF7A00]");
  }
}
// window.addEventListener("load", () => {
//     updateSlider(sliderContainer.getBoundingClientRect().left + sliderContainer.offsetWidth * 0.11);
//   });
  sliderContainer.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    e.preventDefault(); // Prevent scrolling
    updateSlider(e.touches[0].pageX);
  }, { passive: false });

  sliderContainer.addEventListener("mousedown", () => {
    isDragging = true;
    sliderContainer.classList.add("cursor-grabbing");
  });
  sliderContainer.addEventListener("mouseup", () => {
    isDragging = false;
    sliderContainer.classList.remove("cursor-grabbing");
  });
  sliderContainer.addEventListener("mouseleave", () => {
    isDragging = false;
    sliderContainer.classList.remove("cursor-grabbing");
  });

  window.addEventListener("resize", () => {
    updateSlider(sliderContainer.getBoundingClientRect().left + sliderContainer.offsetWidth * 0.11);
  });
  window.addEventListener("load", () => {
    setTimeout(() => {
      updateSlider(sliderContainer.getBoundingClientRect().left + sliderContainer.offsetWidth * 0.11);
    }, 300);
  });
  // Cart functionality
  
  