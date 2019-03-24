function form(){
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
}

modul.export = form;