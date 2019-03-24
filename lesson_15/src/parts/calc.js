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

        if (persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            total = (daysSum + personsSum) * 4000;

            if (restDays.value == '') {
                totalValue.innerHTML = 0;
            } else {
                totalValue.innerHTML = total;
            }
        }
    });
    restDays.addEventListener('input', function () {
        daysSum = +this.value;
        if (!check(this.value)) {
            this.value = this.value.slice(0, -1);
        }
        if (restDays.value == '') {
            totalValue.innerHTML = 0;
        } else {
            total = (daysSum + personsSum) * 4000;

            if (persons.value == '') {
                totalValue.innerHTML = 0;
            } else {
                totalValue.innerHTML = total;
            }
        }
    });
    place.addEventListener('change', function () {
        if (restDays.value == '' || persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            let a = total;
            totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }
    });
}

module.exports = calc;