"use strict";

let tab = function () {
  let tabNav = document.querySelectorAll(".menu__services__item"),
    tabContent = document.querySelectorAll(".item__content"),
    tabName;

  tabNav.forEach((item) => {
    item.addEventListener("click", selectTabNav);
  });
  function selectTabNav() {
    tabNav.forEach((item) => {
      item.classList.remove("is-active");
    });
    this.classList.add("is-active");
    tabName = this.getAttribute("tab-name");
    selectTabContent(tabName);
  }
  function selectTabContent(tabName) {
    tabContent.forEach((item) => {
      item.classList.contains(tabName)
        ? item.classList.add("is-active")
        : item.classList.remove("is-active");
    });
  }
};

tab();

let showHidePicturesHover = function () {
  const imgsCollectionWrapper = document.querySelectorAll(".img__box");
  imgsCollectionWrapper.forEach((elem) => {
    const divHover = document.getElementById("img-hover");

    elem.addEventListener("mouseenter", function hideImgs() {
      elem.appendChild(divHover);
      const spanImgName = document.getElementById("img__name");
      spanImgName.innerHTML = elem.firstElementChild.getAttribute("alt");
      spanImgName.style.cssText = `font-weight: bold; font-size: 14.1771px; line-height: 25px; text-transform: uppercase; color: #18CFAB; display: block; padding-top: 30px; text-align: center`;

      const spanCategory = document.getElementById("category");

      let tabs = document.querySelectorAll(".work-tabs-item");
      tabs.forEach((element) => {
        let attr = element.getAttribute("data-filter");
        if (
          elem.firstElementChild.classList.contains(attr) &&
          attr !== "work-all"
        ) {
          spanCategory.innerHTML = element.innerHTML;
        }
      });

      spanCategory.style.cssText = `font-weight: 300; font-size: 12.1518px; line-height: 20px; color: #8A8A8A; display: block; text-align: center`;

      elem.firstElementChild.style.opacity = 0;
      divHover.style.opacity = 1;
    });

    divHover.addEventListener("mouseleave", function showImgs() {
      elem.firstElementChild.style.opacity = 1;
      divHover.style.opacity = 0;
    });
  });
};

showHidePicturesHover();

let imageName = "work-all";
let imagesCategory = function () {
  let tabs = document.querySelectorAll(".work-tabs-item"),
    tabsContent;

  tabs.forEach((elem) => {
    elem.addEventListener("click", selectCategory);
  });

  function selectCategory() {
    tabs.forEach((elem) => {
      elem.classList.remove("active");
    });
    this.classList.add("active");
    imageName = this.getAttribute("data-filter");
    selectImgs(imageName);
  }

  function selectImgs(imageName) {
    tabsContent = document.querySelectorAll(".work__img");
    tabsContent.forEach((elem) => {
      if (elem.classList.contains(imageName)) {
        elem.classList.add("active");
      } else {
        elem.classList.remove("active");
      }
    });
  }
};

imagesCategory();

let loadMorePictures = function () {
  let flag = true;
  const btnLoadMoreWork = document.getElementById("load-more-work");
  const divWithImgs = document.getElementById("work__images__block");
  btnLoadMoreWork.addEventListener("click", function LoadPictures() {
    const loading = document.getElementById("load-content");
    btnLoadMoreWork.before(loading);
    loading.style.display = "flex";
    btnLoadMoreWork.style.padding = "30px 0 99px";

    setTimeout(() => {
      if (flag === true) {
        let divArr = [],
          imgArr = [];
        for (let i = 0; i < 12; i++) {
          divArr[i] = document.createElement("span");
          divArr[i].className = "img__box";
          imgArr[i] = document.createElement("img");
          imgArr[i].setAttribute("width", 285);
          imgArr[i].setAttribute("height", 211);
        }

        imgArr[0].setAttribute(
          "src",
          "img/img-content/our amazing work/Wordpress/wordpress2.jpg"
        );
        imgArr[0].setAttribute("alt", "Comments");
        imgArr[0].classList.add(
          "work__img",
          "work-wordpress",
          "work-all",
          "active"
        );

        imgArr[1].setAttribute(
          "src",
          "img/img-content/our amazing work/Web design/web-design6.jpg"
        );
        imgArr[1].setAttribute("alt", "Negotiations");
        imgArr[1].classList.add(
          "work__img",
          "work-web-design",
          "work-all",
          "active"
        );

        imgArr[2].setAttribute(
          "src",
          "img/img-content/our amazing work/Graphic design/graphic-design.jpg"
        );
        imgArr[2].setAttribute("alt", "Bright design");
        imgArr[2].classList.add(
          "work__img",
          "work-graphic-design",
          "work-all",
          "active"
        );

        imgArr[3].setAttribute(
          "src",
          "img/img-content/our amazing work/Wordpress/wordpress8.jpg"
        );
        imgArr[3].setAttribute("alt", "Logo");
        imgArr[3].classList.add(
          "work__img",
          "work-wordpress",
          "work-all",
          "active"
        );

        imgArr[4].setAttribute(
          "src",
          "img/img-content/our amazing work/Web design/web-design1.jpg"
        );
        imgArr[4].setAttribute("alt", "Icons");
        imgArr[4].classList.add(
          "work__img",
          "work-web-design",
          "work-all",
          "active"
        );

        imgArr[5].setAttribute(
          "src",
          "img/img-content/our amazing work/Landing pages/landing-page1.jpg"
        );
        imgArr[5].setAttribute("alt", "Variety");
        imgArr[5].classList.add(
          "work__img",
          "work-landing-pages",
          "work-all",
          "active"
        );

        imgArr[6].setAttribute(
          "src",
          "img/img-content/our amazing work/Landing pages/landing-page7.jpg"
        );
        imgArr[6].setAttribute("alt", "Phones");
        imgArr[6].classList.add(
          "work__img",
          "work-landing-pages",
          "work-all",
          "active"
        );

        imgArr[7].setAttribute(
          "src",
          "img/img-content/our amazing work/Wordpress/wordpress4.jpg"
        );
        imgArr[7].setAttribute("alt", "Tablets");
        imgArr[7].classList.add(
          "work__img",
          "work-wordpress",
          "work-all",
          "active"
        );

        imgArr[8].setAttribute(
          "src",
          "img/img-content/our amazing work/Web design/web-design7.jpg"
        );
        imgArr[8].setAttribute("alt", "Network");
        imgArr[8].classList.add(
          "work__img",
          "work-web-design",
          "work-all",
          "active"
        );

        imgArr[9].setAttribute(
          "src",
          "img/img-content/our amazing work/Graphic design/graphic-design9.jpg"
        );
        imgArr[9].setAttribute("alt", "Structure");
        imgArr[9].classList.add(
          "work__img",
          "work-graphic-design",
          "work-all",
          "active"
        );

        imgArr[10].setAttribute(
          "src",
          "img/img-content/our amazing work/Wordpress/wordpress9.jpg"
        );
        imgArr[10].setAttribute("alt", "Logo W");
        imgArr[10].classList.add(
          "work__img",
          "work-wordpress",
          "work-all",
          "active"
        );

        imgArr[11].setAttribute(
          "src",
          "img/img-content/our amazing work/Web design/web-design4.jpg"
        );
        imgArr[11].setAttribute("alt", "Laptop");
        imgArr[11].classList.add(
          "work__img",
          "work-web-design",
          "work-all",
          "active"
        );

        for (let i = 0; i < 12; i++) {
          divWithImgs.appendChild(divArr[i]);
          divArr[i].appendChild(imgArr[i]);
        }

        selectImgs();
        showHidePicturesHover();

        btnLoadMoreWork.remove();
        divWithImgs.style.paddingBottom = "99px";
      }
      loading.style.display = "none";
      btnLoadMoreWork.style.padding = "70px 0 99px";
    }, 2000);

    function selectImgs() {
      let tabsContent = document.querySelectorAll(".work__img");
      tabsContent.forEach((elem) => {
        if (elem.classList.contains(imageName)) {
          elem.classList.add("active");
        } else {
          elem.classList.remove("active");
        }
      });
    }
  });
};
loadMorePictures();

let showHidePicturesHoverNew = function () {
  const imgsCollectionWrapper = document.querySelectorAll(".img__box");
  imgsCollectionWrapper.forEach((elem) => {
    const divHover = document.getElementById("img-hover");

    elem.addEventListener("mouseenter", function hideImgs() {
      elem.appendChild(divHover);
      const spanImageName = document.getElementById("img__name");
      spanImageName.innerHTML = elem.firstElementChild.getAttribute("alt");
      spanImageName.style.cssText = `font-weight: bold; font-size: 14.1771px; line-height: 25px;
                                        text-transform: uppercase; color: #18CFAB; display: block;
                                        padding-top: 30px; text-align: center`;

      const spanCategory = document.getElementById("category");

      let tabs = document.querySelectorAll(".work-tabs-item");
      tabs.forEach((element) => {
        let attr = element.getAttribute("data-filter");
        if (
          elem.firstElementChild.classList.contains(attr) &&
          attr !== "work-all"
        ) {
          spanCategory.innerHTML = element.innerHTML;
        }
      });

      spanCategory.style.cssText = `font-weight: 300; font-size: 12.1518px; line-height: 20px;
                                        color: #8A8A8A; display: block; text-align: center`;

      elem.firstElementChild.style.opacity = 0;
      divHover.style.opacity = 1;
    });

    divHover.addEventListener("mouseleave", function showImgs() {
      elem.firstElementChild.style.opacity = 1;
      divHover.style.opacity = 0;
    });
  });
};
showHidePicturesHover();
