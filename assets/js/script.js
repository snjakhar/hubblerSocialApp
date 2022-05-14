let sideBar = document.querySelector(".side-bar");
let icons = [
  "/assets/images/bar.svg",
  "/assets/images/people.svg",
  "/assets/images/fileEdit.svg",
  "/assets/images/file.svg",
  "/assets/images/location.svg",
  "/assets/images/cal.svg",
  "/assets/images/setting.svg",
  "/assets/images/add.svg",
];
for (let i = 0; i < 8; i++) {
  let img = document.createElement("img");
  img.src = icons[i];
  img.addEventListener("click", () => handleIconClick(i + 1));
  sideBar.appendChild(img);
}
function handleIconClick(index) {
  console.log("Option " + index + " Clicked");
}
function openMenu(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();
