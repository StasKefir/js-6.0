let hours,
    minutes,
    secods,
    output,
    timerFunc = setTimeout(function timer(){
        let date= new Date();
        currentTime = date.toLocaleTimeString('ru-RU', {
            hour : '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        document.body.innerHTML =currentTime;
    setTimeout(timer,1000);
    });

