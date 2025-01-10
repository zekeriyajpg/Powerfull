const stickyNavbar = document.querySelector("header.sticky-navbar");

document.addEventListener("scroll", () => {
  if (window.scrollY > 36) {
    stickyNavbar.classList.add("scrolling");
  } else {
    stickyNavbar.classList.remove("scrolling");
  }
});

// Hamburger Menü Aç/Kapa
const hamburgerBtn = document.getElementById("hamburger-btn");
const navMenu = document.getElementById("nav-menu");

hamburgerBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Tüm butonları ve içerikleri seç
const buttons = document.querySelectorAll(".classes-buttons button");
const contents = document.querySelectorAll(".classes-content");

// Butonlara tıklama olayı ekle
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Tüm butonlardan aktif sınıfını kaldır
    buttons.forEach((btn) => btn.classList.remove("active"));

    // Tıklanan butona aktif sınıfı ekle
    button.classList.add("active");

    // Tüm içerikleri gizle
    contents.forEach((content) => content.classList.remove("active"));

    // Tıklanan butona ait içeriği göster
    const target = button.getAttribute("data-target");
    document.getElementById(target).classList.add("active");
  });
});

// Elemanları Seç
const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const resultElement = document.getElementById("bmi-result");
const indicator = document.getElementById("bmi-indicator");

// Hesaplama Fonksiyonu
function calculateBMI() {
  const height = parseFloat(heightInput.value);
  const weight = parseFloat(weightInput.value);

  if (!height || !weight || height <= 0 || weight <= 0) {
    resultElement.innerHTML = "Invalid input!";
    resultElement.style.color = "red";
    indicator.style.left = "0%";
    return;
  }

  const bmi = (weight / (height / 100) ** 2).toFixed(2);

  let category = "";
  let indicatorPosition = "0%";

  if (bmi < 18.5) {
    category = "Underweight";
    indicatorPosition = "5%";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = "Normal";
    indicatorPosition = "25%";
  } else if (bmi >= 25 && bmi < 29.9) {
    category = "Overweight";
    indicatorPosition = "50%";
  } else if (bmi >= 30 && bmi < 34.9) {
    category = "Obese";
    indicatorPosition = "75%";
  } else {
    category = "Extremely Obese";
    indicatorPosition = "95%";
  }

  // Sonuç Ekrana Yazdır
  resultElement.innerHTML = `${bmi} (${category})`;
  resultElement.style.color = "#2f477a";

  // Üçgeni Hareket Ettir
  indicator.style.left = indicatorPosition;
}

// Girişlerde Anlık Hesaplama
heightInput.addEventListener("input", calculateBMI);
weightInput.addEventListener("input", calculateBMI);