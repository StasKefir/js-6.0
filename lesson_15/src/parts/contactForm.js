function contactForm() {
    let formContact = document.getElementById("form"),
    inputContact = formContact.getElementsByTagName('input'),
    inputWrapperContact,
    arrContact;

    formContact.addEventListener('submit', function(event){
        inputWrapperContact=inputContact[1].value;
        arrContact= inputWrapperContact.split('');
        event.preventDefault();
        formContact.appendChild(statusMessage);
        let formData2 = new FormData(formContact);

            function postData(data) {
                return new Promise(function(resolve,reject){
            let requestSecond = new XMLHttpRequest();
            requestSecond.open('POST', 'server.php');
            requestSecond.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

            requestSecond.addEventListener('readystatechange', function(){
                if(requestSecond.readyState<4){
                    resolve();
                } else if(requestSecond.readyState == 4 && requestSecond.status == 200){
                   resolve();
                } else {
                    reject();
                }
            });
            requestSecond.send(data);
        });
        }// end postData
    function clearInput(){
        for(let i=0; i<inputContact.length; i++) {
            inputContact[i].value= '';
        }
    }

    postData(formData2)
        .then(()=> statusMessage.innerHTML= message.loading)
        .then(()=> statusMessage.innerHTML = message.success)
        .catch(()=>statusMessage.innerHTML = message.failure)
        .then(clearInput);

    });
}
modul.export = contactForm;