const description = document.querySelector(".description");
const registration = document.querySelector(".registration");
const offerFeatures = document.querySelector(".offer_features_main");
const footer = document.querySelector(".footer_main");
function changePage(type) {
  const currentPageSpan = document.querySelector("#currentPage");
  let currentPage = Number(currentPageSpan.textContent);

  const totalPageSpan = document.querySelector("#totalPage");
  const totalPage = Number(totalPageSpan.textContent);

  if (type === "plus") {
    if (currentPage < totalPage) {
      currentPageSpan.textContent = ++currentPage;
    } else {
      currentPageSpan.textContent = 1;
      currentPage = 1;
    }
  }
  if (type === "minus") {
    if (currentPage > 1) {
      currentPageSpan.textContent = --currentPage;
    } else {
      currentPageSpan.textContent = totalPage;
      currentPage = Number(totalPage);
    }
  }

  switch (currentPage) {
    case 1:
      console.log(currentPage);
      description.style.display = "block";
      registration.style.display = "none";
      offerFeatures.style.display = "none";
      footer.style.display = "none";
      break;

    case 2:
      description.style.display = "none";
      registration.style.display = "block";
      offerFeatures.style.display = "none";
      footer.style.display = "none";
      break;

    case 3:
      description.style.display = "none";
      registration.style.display = "none";
      offerFeatures.style.display = "block";
      footer.style.display = "block";
      break;

    default:
      break;
  }
}

window.addEventListener("resize", function () {
  const reg_mobile = document.querySelector("#reg_mobile");
  const reg_desktop = document.querySelector("#reg_desktop");
  console.log(reg_mobile);
  if (window.innerWidth < 640) {
    description.style.display = "block";
    registration.style.display = "none";
    offerFeatures.style.display = "none";
    footer.style.display = "none";
  }
  if (window.innerWidth < 1150 && window.innerWidth >= 640) {
    reg_desktop.style.display = "none";
    reg_mobile.style.display = "block";
  }
  if (window.innerWidth >= 1150) {
    description.style.display = "block";
    registration.style.display = "block";
    offerFeatures.style.display = "block";
    footer.style.display = "block";
    reg_mobile.style.display = "none";
    reg_desktop.style.display = "block";
  }
});
