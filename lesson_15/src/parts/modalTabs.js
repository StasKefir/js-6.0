function modalTabs() {
    
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
}

module.exports = modalTabs;