const modal = () => {
    const inputFile = document.querySelector("input[type='file']"),
        textBlock = document.querySelector(".modal__file-left"),
        inputCheckbox = document.querySelector("input[type='checkbox']"),
        checkboxLabel = document.querySelector(".modal__label_checkbox"),
        okButton = document.querySelector("button[type='submit']");

    inputFile.addEventListener("change", () => {
        textBlock.textContent = "File upload";
        textBlock.style.color = "#000000";
    });

    inputCheckbox.addEventListener("change", () => {
        okButton.classList.toggle("button_disabled");
        checkboxLabel.classList.toggle("modal__label_checkbox-checked");
    });

    function bindModal(modalSelector, closeSelector, triggerSelector = false) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            scroll = calcScroll();

        if (triggerSelector != false) {
            trigger.forEach((item) => {
                item.addEventListener("click", (e) => {
                    if (e.target) {
                        e.preventDefault();
                    }
                    modal.style.display = "block";
                    setTimeout(() => {
                        modal.style.opacity = 1;
                    }, 100);
                    document.body.style.overflow = "hidden";
                    document.body.style.marginRight = `${scroll}px`;
                });
            });
        }

        close.addEventListener("click", () => {
            modal.style.opacity = 0;
            setTimeout(() => {
                modal.style.display = "none";
            }, 500);
            document.body.style.overflow = "";
            document.body.style.marginRight = `0px`;
        });
    }

    function calcScroll() {
        let div = document.createElement("div");

        div.style.width = "50px";
        div.style.height = "50px";
        div.style.overflowY = "scroll";
        div.style.visibility = "hidden";

        document.body.appendChild(div);

        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

    bindModal(".overlay", ".button_close", ".base__button");
};

export default modal;