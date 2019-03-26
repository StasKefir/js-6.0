function modal() {
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');
        

    more.addEventListener('click', function () {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = "hidden";
    });

    close.addEventListener('click', function () {
        statusMessage = document.querySelector(".status"),
        mainForm = document.querySelector(".main-form");
        overlay.style.display = "none";
        more.classList.remove('more-splash');
        document.body.style.overflow = "";
        console.log(mainForm);
        console.log(statusMessage);
        mainForm.removeChild(statusMessage);

    });
}

module.exports = modal;