function contactForm() {
    let message = {
        loading: "Loading",
        success: "Спасибо! Скоро мы с Вами свяжемся",
        failure: "Что-то пошло не так..."
    };

    let formContact = document.getElementById("form"),
    inputContact = formContact.getElementsByTagName('input'),
    inputWrapperContact,
    statusMessage = document.createElement('div'),
    arrContact;

    formContact.addEventListener('submit', function(event){
        inputWrapperContact=inputContact[1].value;
        arrContact= inputWrapperContact.split('');
        event.preventDefault();
        formContact.appendChild(statusMessage);
        let formData = new FormData(formContact);

            function postData(data) {
                return new Promise(function(resolve,reject){
            let requestSecond = new XMLHttpRequest();
            requestSecond.open('POST', 'server.php');
            requestSecond.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

            requestSecond.addEventListener('readystatechange', function(){
                if(requestSecond.readyState<4){
                    resolve();
                } else if(requestSecond.readyState == 4 && requestSecond.status == 200){
                   resolve();
                } else {
                    reject();
                }
            }); 
            let obj = {};
            formData.forEach(function (value, key) {
            obj[key] = value;
            });
            let json = JSON.stringify(obj);
           
            requestSecond.send(json);
        });
        }// end postData
    function clearInput(){
        for(let i=0; i<inputContact.length; i++) {
            inputContact[i].value= '';
        }
    }

    postData(formData)
        .then(()=> statusMessage.innerHTML= message.loading)
        .then(()=> statusMessage.innerHTML = message.success)
        .catch(()=>statusMessage.innerHTML = message.failure)
        .then(clearInput);

    });
}
module.exports = contactForm;