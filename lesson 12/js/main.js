window.addEventListener('DOMContentLoaded', function() {

    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');


    function hideTabContent(a){
        for(let i=a; i<tabContent.length; i++){
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b){
        if(tabContent[b].classList.contains('hide')){
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event){
        let target = event.target;
        if(target && target.classList.contains('info-header-tab')){
            for(let i=0; i< tab.length; i++){
                if(target == tab[i]){
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    // Timer
    let deadLine='2019-03-27';

    function getTimeRemaining(endtime){
        let t = Date.parse(endtime) - Date.parse(new Date());
        let seconds, minutes, hours;
        if(Date.parse(new Date()) >= Date.parse(endtime)){
                seconds = 0;
                minutes = 0;
                hours = 0;
        } else {
                seconds = Math.floor((t/1000) % 60);
                minutes = Math.floor((t/1000/60) % 60);
                hours = Math.floor((t/(1000*60*60)));
        }
        
            return {
                'total' : t,
                'hours' : hours,
                'minutes' : minutes,
                'seconds' : seconds
            };
    }

    function setClock(id,endtime){
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval =setInterval(updateClock, 1000);

        function updateClock(){
            let t = getTimeRemaining(endtime);
            if(t.hours < 10){
                hours.textContent = "0" + t.hours;
            } else {
                hours.textContent = t.hours;
            }
            
            if(t.minutes < 10){
                minutes.textContent = '0' + t.minutes;
            } else {
                minutes.textContent = t.minutes;
            }

            if(t.seconds < 10) {
                seconds.textContent = '0' + t.seconds;
            } else {
                seconds.textContent = t.seconds;
            }
            
            
            if(t.total<=0){
                clearInterval(timeInterval);
            }
            
        }
    }

    setClock('timer', deadLine);

    //Modal

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', function(){
        overlay.style.display ='block';
        this.classList.add('more-splash');
        document.body.style.overflow ="hidden";
    });

    close.addEventListener('click', function(){
        overlay.style.display ="none";
        more.classList.remove('more-splash');
        document.body.style.overflow ="";
    });

    //Modal Tabs

    let btnTabs = document.querySelectorAll('.description-btn');

    btnTabs.forEach(function(item){
        item.addEventListener('click', function(){
            overlay.style.display ='block';
            this.classList.add('more-splash');
            document.body.style.overflow ="hidden";
        });
        close.addEventListener('click', function(){
            overlay.style.display ="none";
            more.classList.remove('more-splash');
            document.body.style.overflow ="";

    });
    });

    // Form
    let message = {
        loading: "Loading",
        success: "Спасибо! Скоро мы с Вами свяжемся",
        failure: "Что-то пошло не так..."
    };

    let form = document.querySelector(".main-form"),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div'),
        inputWrapper,
        arr;
        
        
        statusMessage.classList.add('status');  

        form.addEventListener('submit', function(event){
            inputWrapper=input[0].value;
            arr= inputWrapper.split('');

            if(!isNaN(+input[0].value)){

                event.preventDefault();
                form.appendChild(statusMessage);

                let request = new XMLHttpRequest();
                request.open('POST', 'server.php');
                request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

                let formData = new FormData(form);
                request.send(formData);

                request.addEventListener('readystatechange', function(){
                    if(request.readyState<4){
                        statusMessage.innerHTML = message.loading;
                    } else if(request.readyState == 4 && request.status == 200){
                        statusMessage.innerHTML = message.success;
                    } else {
                        statusMessage.innerHTML = message.failure;
                    }
                });

            for(let i=0; i<input.length; i++) {
                input[i].value= '';
            }
        } else if (arr[0]==='+'){ let count=0;
            for(let i=1; i<arr.length; i++){
                if(typeof(arr[i])==='number'){count++;}
                else{event.preventDefault();
                    form.appendChild(statusMessage);
                    statusMessage.innerHTML ="Используйте цифры и знак +"; 
                    break;
                }
                if(count==arr.length-1){
                    event.preventDefault();
            form.appendChild(statusMessage);

            let request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

            let formData = new FormData(form);
            request.send(formData);

            request.addEventListener('readystatechange', function(){
                if(request.readyState<4){
                    statusMessage.innerHTML = message.loading;
                } else if(request.readyState == 4 && request.status == 200){
                    statusMessage.innerHTML = message.success;
                } else {
                    statusMessage.innerHTML = message.failure;
                }
            });

            for(let i=0; i<input.length; i++) {
                input[i].value= '';
            }
            }
        }
        }
        else { event.preventDefault();
            form.appendChild(statusMessage);
            statusMessage.innerHTML ="Используйте цифры и знак +"; }
        });


        //contact form
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
});