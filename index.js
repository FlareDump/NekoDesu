function toggleDropdown() {
  const dropdown = document.getElementById("dropdown-menu");
  dropdown.classList.toggle("hidden");
}

document.addEventListener("click", function (event) {
  const dropdown = document.getElementById("dropdown-menu");
  const button = document.querySelector('button[onclick="toggleDropdown()"]');
  if (!dropdown.contains(event.target) && !button.contains(event.target)) {
    dropdown.classList.add("hidden");
  }
});

function toggleHeart(icon) {
  if (icon.classList.contains("fa-regular")) {
    icon.classList.remove("fa-regular", "fa-heart");
    icon.classList.add("fa-solid", "fa-heart");
    icon.style.color = "#ff0000";
  } else {
    icon.classList.remove("fa-solid", "fa-heart");
    icon.classList.add("fa-regular", "fa-heart");
    icon.style.color = "";
  }
}
