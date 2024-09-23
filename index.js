const fullBody = document.querySelector("body");
const fullBodyDark = document.querySelector("body .dark");
const containedDark = document.querySelector(".container");
const darkModeCheckBox = document.getElementById("full-dark");
const containedDarkModeCheckBox = document.getElementById("contained-dark");

const darkMode = JSON.parse(localStorage.getItem("darkModeCheckBox"));
const containedMode = JSON.parse(
  localStorage.getItem("containedDarkModeCheckBox")
);

darkModeCheckBox.addEventListener("change", (e) => {
  if (darkModeCheckBox.checked) {
    // console.log("checked");
    fullBody.classList.add("dark");
    localStorage.setItem("darkModeCheckBox", true);
  } else {
    fullBody.classList.remove("dark");
    localStorage.setItem("darkModeCheckBox", false);
  }
  containedDarkModeCheckBox.checked = darkModeCheckBox.checked;
  changeContainedDark();
});

function changeContainedDark() {
  if (containedDarkModeCheckBox.checked) {
    console.log("checked");
    containedDark.classList.add("dark");
    localStorage.setItem("containedDarkModeCheckBox", true);
  } else {
    console.log("Not checked");
    containedDark.classList.remove("dark");
    localStorage.setItem("containedDarkModeCheckBox", false);
  }
}

containedDarkModeCheckBox.addEventListener("change", changeContainedDark);
