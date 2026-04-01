
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("nav .nav-links a");
let toggleBtn = document.getElementById("theme-toggle-button");
let tabs = document.querySelectorAll("button.portfolio-filter");
let tabSections = document.querySelectorAll("#portfolio .portfolio-item");

let sun = false;
let html_page = document.querySelector("html");


let garBtn = document.querySelector("#settings-toggle");
let sideBar = document.querySelector("#settings-sidebar");
let closeSideBarBtn = document.querySelector("#close-settings");

let sideBarWidth = sideBar.offsetWidth;

let colorButtons = document.querySelectorAll(".theme-color");
let htmlTag = document.querySelector("html");
let fontBtns = document.querySelectorAll(".font-option");
let bodyTag = document.body;

let carsouselContainer = document.querySelector("#testimonials-carousel");
let carouselIndicators = document.querySelectorAll(".carousel-indicator");


let NextBtn = document.querySelector("#next-testimonial");
let PrevBtn = document.querySelector("#prev-testimonial");
let cardWidth;
console.log(NextBtn);
console.log(carsouselContainer.scrollWidth,carsouselContainer.clientWidth
);
NextBtn.addEventListener("click", () => {
  cardWidth = document.querySelector(".testimonial-card").clientWidth;
  carsouselContainer.scrollLeft += cardWidth;

});
PrevBtn.addEventListener("click", () => {
  cardWidth = document.querySelector(".testimonial-card").clientWidth;
  carsouselContainer.scrollLeft -= cardWidth;

});






fontBtns.forEach(font => {
  font.addEventListener("click", () => {
    console.log("hello");
    let curentFont = font.dataset.font;
    bodyTag.classList.remove("font-tajawal")
    bodyTag.classList.remove("font-cairo");
    bodyTag.classList.remove("font-alexandria");
    bodyTag.classList.add(`font-${curentFont}`);

  })
})


console.log(fontBtns);
colorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let primary = button.dataset.primary;
    let secondary = button.dataset.secondary;
    let accent = button.dataset.accent;
    htmlTag.style.setProperty("--color-primary",primary);
    htmlTag.style.setProperty("--color-secondary", secondary);
    htmlTag.style.setProperty("--color-accent", accent);
    
  })
})



closeSideBarBtn.onclick = () => {
  sideBar.style.right = "0px";
}
garBtn.onclick = function () {
  console.log("hello");
  if (sideBar.style.right === "0px") {
    sideBar.style.right = `${sideBarWidth}px`;
  } else {
    sideBar.style.right = "0px";
  }
};


window.addEventListener("scroll", () => {
  let currentSection = "";
  sections.forEach((section) => {
    let SectionSpaceTop = section.offsetTop;
    let SectionHeight = section.offsetHeight;
    if (window.scrollY >= SectionSpaceTop - 150) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});

toggleBtn.addEventListener("click", () => {

  if (sun) {
    html_page.classList.add("dark");
    sun = false;
  } else {
    html_page.classList.remove("dark");
    sun = true;
  }
});


tabs.forEach(function (tab) {
  tab.addEventListener("click", function () {
    tabs.forEach((t) => {
      // إزالة active
      t.classList.remove(
        "bg-linear-to-r",
        "from-primary",
        "to-secondary",
        "text-white",
        "hover:shadow-lg",
        "hover:shadow-primary/50",
      );

      // إضافة الشكل العادي
      t.classList.add(
        "bg-white",
        "dark:bg-slate-800",
        "text-slate-600",
        "dark:text-slate-300",
        "border",
        "border-slate-300",
        "dark:border-slate-700",
      );
    });
    tabSections.forEach(function (section) {
      section.classList.add("hidden");
    });

    // إضافة active للتاب المضغوط
    this.classList.add(
      "bg-linear-to-r",
      "from-primary",
      "to-secondary",
      "text-white",
      "hover:shadow-lg",
      "hover:shadow-primary/50",
    );

    // إزالة الشكل العادي منه
    this.classList.remove(
      "bg-white",
      "dark:bg-slate-800",
      "text-slate-600",
      "dark:text-slate-300",
      "border",
      "border-slate-300",
      "dark:border-slate-700",
    );

    //همسك الداتا كاستوم اتربيوت الي متخزنه جوا التاب
    const dataCategory = tab.dataset.filter;
    console.log(dataCategory);
    if (dataCategory === "all") {
      tabSections.forEach(function (section) {
        section.classList.remove("hidden");
      });
    } else {
      let sectionCategorys = document.querySelectorAll(
        `[data-category='${dataCategory}']`,
      );
      sectionCategorys.forEach(s => {
        s.classList.remove("hidden");
      })
    }
  });
});




