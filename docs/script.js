// Responsive shape change
const topPolygon = document.getElementById("responsiveTopPolygon");
function updatePolygon() {
  if (window.innerWidth <= 768) {
    // mobile
    topPolygon.setAttribute(
      "points",
      "0,0 0,650 110,0"
    );
  } else {
    // desktop
    topPolygon.setAttribute(
      "points",
      "0,0 0,650 330,0"
    );
  }
}

updatePolygon();
window.addEventListener("resize", updatePolygon);

// Parallax Scroll
document.addEventListener("scroll", function () {
  // Get the scroll position
  var scrollPosition = window.scrollY;
  var homeSection = document.getElementById("home");
  var infoSection = document.getElementById("info");
  var portfolioSection = document.getElementById("portfolio");

  // Adjust the position of parallax elements based on scroll
  var parallaxSvg = document.querySelector(".parallax-svg");
  var parallaxText = document.querySelector(".parallax-text");
  var parallaxInfoText = document.querySelector(".parallax-info-text");
  var parallaxPortfolioText = document.querySelector(
    ".parallax-portfolio-text"
  );
  // console.log(scrollPosition > infoSection.offsetTop);
  // if (scrollPosition < portfolioSection.offsetTop) {
  parallaxSvg.style.transform =
    "translate(-50%, -50%) translateY(" + scrollPosition * 0.5 + "px)";
  parallaxText.style.transform =
    "translate(-50%, -50%) translateY(" + scrollPosition * 0.7 + "px)";
  // }
  // if (scrollPosition > infoSection.offsetTop) {
  parallaxInfoText.style.transform =
    "translate(-50%, -50%) translateY(" +
    (scrollPosition - infoSection.offsetTop) * 0.3 +
    "px)";
  // }
  if (scrollPosition > infoSection.offsetTop) {
    parallaxPortfolioText.style.transform =
      "translate(-50%, -50%) translateY(" +
      (scrollPosition - portfolioSection.offsetTop) * 0.5 +
      "px)";
  }
});

document.dispatchEvent(new Event("scroll"));

// Nav and Sections
const sections = document.querySelectorAll("section");
const navlists = document.querySelectorAll("nav ul li a");

// When window scroll, get id of current page, update naclists
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 120) {
      current = section.getAttribute("id");
    }
  });

  navlists.forEach((a) => {
    a.classList.remove("active");
    if (a.classList.contains(current)) {
      a.classList.add("active");
    }
  });
};

// Slides
var slideIndex = 1;
var slides = document.getElementsByClassName("slides");

function setLinks(id, item, name) {
  const displayLink = document.getElementById(id);
  const textNode = displayLink.querySelector(".ext-span");
  if (!item) {
    displayLink.style.display = "none";
  } else {
    displayLink.style.display = "inline-block";
    displayLink.href = item;
    textNode.textContent = name;
  }
}

function initSlide() {
  var getTitle = slides[0].getAttribute("data-slide-title");
  var getDesc = slides[0].getAttribute("data-slide-desc");
  var getPreview = slides[0].getAttribute("data-slide-preview");
  var getLink1 = slides[0].getAttribute("data-slide-link-1");
  var getLink2 = slides[0].getAttribute("data-slide-link-2");
  var getLinkName2 = slides[0].getAttribute("data-slide-link-name-2");
  var getMetaTag = slides[0]
    .getAttribute("data-slide-meta-tag")
    .split(",")
    .map((tag) => tag.trim());
  var getTag = slides[0]
    .getAttribute("data-slide-tag")
    .split(",")
    .map((tag) => tag.trim());

  // Clear and add tags
  $("#displaystag").empty();
  getMetaTag.forEach(function (tag) {
    $("#displaystag").append(`<span class="tag meta">${tag}</span>`);
  });
  getTag.forEach(function (tag) {
    $("#displaystag").append(`<span class="tag">${tag}</span>`);
  });

  $("#displaystitle").text(getTitle);
  $("#displaysdesc").html(getDesc);

  setLinks("displayslink-1", getLink1, "Code");
  setLinks("displayslink-2", getLink2, getLinkName2);
}

initSlide()

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
  slider.appendChild(slider.firstElementChild);
  slides[0].className += " currentslide";
  slides[1].className += " nslide";
  slides[2].className += " nnslide";
  slides[3].className += " nnnslide";
  slides[4].className += " nnnnslide";
  var getTitle = slides[0].getAttribute("data-slide-title");
  var getDesc = slides[0].getAttribute("data-slide-desc");
  var getPreview = slides[0].getAttribute("data-slide-preview");
  var getLink1 = slides[0].getAttribute("data-slide-link-1");
  var getLink2 = slides[0].getAttribute("data-slide-link-2");
  var getLinkName2 = slides[0].getAttribute("data-slide-link-name-2");
  var getMetaTag = slides[0]
    .getAttribute("data-slide-meta-tag")
    .split(",")
    .map((tag) => tag.trim());
  var getTag = slides[0]
    .getAttribute("data-slide-tag")
    .split(",")
    .map((tag) => tag.trim());
  $("#displaystitle").text(getTitle);
  $("#displaysdesc").html(getDesc);

  // Clear and add tags
  $("#displaystag").empty();
  getMetaTag.forEach(function (tag) {
    $("#displaystag").append(`<span class="tag meta">${tag}</span>`);
  });
  getTag.forEach(function (tag) {
    $("#displaystag").append(`<span class="tag">${tag}</span>`);
  });

  setLinks("displayslink-1", getLink1, "Code");
  setLinks("displayslink-2", getLink2, getLinkName2);

  // Get the element with the currentslide class
  const currentSlide = document.querySelector(".currentslide img");
  // Change the src attribute of the image
  currentSlide.src = getPreview;
}

function minusSlides(n) {
  showSlides((slideIndex += n));
  slider.prepend(slider.lastElementChild);
  slides[0].className += " currentslide";
  slides[1].className += " nslide";
  slides[2].className += " nnslide";
  slides[3].className += " nnnslide";
  slides[4].className += " nnnnslide";
  var getTitle = slides[0].getAttribute("data-slide-title");
  var getDesc = slides[0].getAttribute("data-slide-desc");
  var getPreview = slides[0].getAttribute("data-slide-preview");
  var getLink1 = slides[0].getAttribute("data-slide-link-1");
  var getLink2 = slides[0].getAttribute("data-slide-link-2");
  var getLinkName2 = slides[0].getAttribute("data-slide-link-name-2");

  var getMetaTag = slides[0]
    .getAttribute("data-slide-meta-tag")
    .split(",")
    .map((tag) => tag.trim());
  var getTag = slides[0]
    .getAttribute("data-slide-tag")
    .split(",")
    .map((tag) => tag.trim());
  $("#displaystitle").text(getTitle);
  $("#displaysdesc").html(getDesc);

  // Clear and add tags
  $("#displaystag").empty();
  getMetaTag.forEach(function (tag) {
    $("#displaystag").append(`<span class="tag meta">${tag}</span>`);
  });
  getTag.forEach(function (tag) {
    $("#displaystag").append(`<span class="tag">${tag}</span>`);
  });

  setLinks("displayslink-1", getLink1, "Code");
  setLinks("displayslink-2", getLink2, getLinkName2);

  // Get the element with the currentslide class
  const currentSlide = document.querySelector(".currentslide img");
  // Change the src attribute of the image
  currentSlide.src = getPreview;
}

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides((slideIndex = n));
//   var getTitle = slides[0].getAttribute("data-slide-title");
//   var getDesc = slides[0].getAttribute("data-slide-desc");
//   var getLink1 = slides[0].getAttribute("data-slide-link-1");
//   var getLink2 = slides[0].getAttribute("data-slide-link-2");
//   var getLinkName2 =slides[0].getAttribute("data-slide-link-name-2");
//   $("#displaystitle").text(getTitle);
//   $("#displaysdesc").html(getDesc);

//   setLinks("displayslink-1", getLink1, "Code");
//   setLinks("displayslink-2", getLink2, getLinkName2);
// }

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    // slides[i].style.display = "none";
    slides[i].className = slides[i].className.replace(" currentslide", "");
    slides[i].className = slides[i].className.replace(" nslide", "");
    slides[i].className = slides[i].className.replace(" nnslide", "");
    slides[i].className = slides[i].className.replace(" nnnslide", "");
    slides[i].className = slides[i].className.replace(" nnnnslide", "");
  }

  document.querySelector(".slides img").src = slides[0].getAttribute(
    "data-slide-thumbnail"
  );

  //   slides[slideIndex-1].style.display = "block";
  // console.log(slideIndex);
}

// Animation
ScrollReveal().reveal("#home h1");
ScrollReveal().reveal("#info h1", { delay: 500 });

ScrollReveal().reveal(".timeline");
// ScrollReveal().reveal("#carousel");

function openImage(slide) {
  // If NOT current slide → continue sliding
  if (!slide.classList.contains("currentslide")) {
    plusSlides(1);
    return;
  }

  // Current slide → open modal
  const img = slide.querySelector("img");

  document.getElementById("modalImage").src = img.src;
  document.getElementById("imageModal").classList.add("show");
}

function closeImage() {
  document.getElementById("imageModal").classList.remove("show");
}