// =====================================
// ABC ANALYTICS JAVASCRIPT
// =====================================


// Mobile navigation

const menuButton =
    document.querySelector(".menu-toggle");

const navigation =
    document.querySelector(".main-nav");


if (menuButton && navigation) {

    menuButton.addEventListener("click", function () {

        navigation.classList.toggle("open");

    });

}


// Automatically update copyright year

const year =
    document.getElementById("year");


if (year) {

    year.textContent =
        new Date().getFullYear();

}