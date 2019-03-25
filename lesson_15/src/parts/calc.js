function calc() {
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0,
        nValue,
        arrValue;


    totalValue.innerHTML = 0;

    function check(input) {
        return /\d$/.test(input);
    }

    persons.addEventListener('input', function () {
        personsSum = +this.value;


        if (!check(this.value)) {
            this.value = this.value.slice(0, -1);
        }

        if (persons.value == '' || restDays.value == '' ) {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = (daysSum * personsSum) * 4000 * place.options[place.selectedIndex].value;
        }
    });
    restDays.addEventListener('input', function () {
        daysSum = +this.value;
        if (!check(this.value)) {
            this.value = this.value.slice(0, -1);
        }
        if (persons.value == '' || restDays.value == '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = (daysSum * personsSum) * 4000 * place.options[place.selectedIndex].value;
        }
    });
    place.addEventListener('change', function () {
        if (restDays.value == '' || persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            let a = total;
            totalValue.innerHTML = daysSum * personsSum * 4000 * this.options[this.selectedIndex].value;
        }
    });
}

module.exports = calc;