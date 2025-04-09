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
