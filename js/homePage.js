const menuItems = document.querySelectorAll(".list-item");
const displayedHead = document.querySelector(".content-head");
const displayedContent = document.querySelector(".content-content");

menuItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    displayedHead.innerText = e.target.parentElement.children[1].innerText;
    displayedContent.innerText = e.target.parentElement.children[2].innerText;
  });
});

const aboutBtn = document.querySelector(".about-btn");
const aboutMe = document.querySelector(".about-me");

aboutBtn.addEventListener("click", () => {
  aboutMe.classList.toggle("open");
});
