const menu = () => {
    let openBtn = document.querySelector(".header__menu-icon"),
        closeBtn = document.querySelector(".menu__close-icon"),
        menu = document.querySelector(".menu");

    openBtn.addEventListener("click", () => {
        menu.style.left = 0;
    });

    closeBtn.addEventListener("click", () => {
        menu.style.left = -30 + "rem";
    });
};

export default menu;