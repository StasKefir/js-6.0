function tabs(){
let tabWrapper = document.querySelector('.decoration_slider'),
    tab = document.querySelectorAll('.btn-item'),
    tabContent = document.querySelectorAll('.tab_content');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }


    tabWrapper.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('btn-item')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                    console.log(tab[i]);
                }
            }
        } else{  console.log('Hello');}
      
        console.log(target);
    });

    
}
module.exports = tabs;