function form() {
    let message = {
        loading: "Loading",
        success: "Спасибо! Скоро мы с Вами свяжемся",
        failure: "Что-то пошло не так..."
    };

    let mainForm = document.querySelector(".main-form"),
        input = mainForm.getElementsByTagName('input'),
        statusMessage = document.createElement('div'),
        inputWrapper,
        arr;


    statusMessage.classList.add('status');
    function validatePhone (a) {
        return /^(\+|\d)\d{0,12}$/.test(a);
    }

    input[0].addEventListener('input', function(){
        if (!validatePhone(this.value)) {
            this.value = this.value.slice(0, -1);
        }
    });
    mainForm.addEventListener('submit', function (event) {
        inputWrapper = input[0].value;
        arr = inputWrapper.split('');

        if (!isNaN(+input[0].value) || (input[0].value[0] == '+' && !(isNaN(+input[0].value.slice(1, input[0].value.length + 1))))) {

            event.preventDefault();
            mainForm.appendChild(statusMessage);
            let formData = new FormData(mainForm);

            function postData(data) {
                return new Promise(function (resolve, reject) {
                    let requestSecond = new XMLHttpRequest();
                    requestSecond.open('POST', 'server.php');
                    requestSecond.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

                    requestSecond.addEventListener('readystatechange', function () {
                        if (requestSecond.readyState < 4) {
                            resolve();
                        } else if (requestSecond.readyState == 4 && requestSecond.status == 200) {
                            resolve();
                        } else {
                            reject();
                        }
                    });
                    let obj = {};
                    data.forEach(function (value, key) {
                        obj[key] = value;
                    });
                    let json = JSON.stringify(obj);

                    requestSecond.send(json);
                });
            } // end postData
            function clearInput() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
            }

            postData(formData)
                .then(() => statusMessage.innerHTML = message.loading)
                .then(() => statusMessage.innerHTML = message.success)
                .catch(() => statusMessage.innerHTML = message.failure)
                .then(clearInput);


        } else {
            event.preventDefault();
            mainForm.appendChild(statusMessage);
            statusMessage.innerHTML = "Используйте цифры и знак +";
        }
    });
}

module.exports = form;