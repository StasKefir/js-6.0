let money,time;

function start(){
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD"); 
    
    while(isNaN(money) || money=="" || money == null ) {
        money = +prompt("Ваш бюджет на месяц?");
    }

    
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function(){
        for(i=0; i<2; i++){
            let a = prompt("Введите обязательную статью расходов в этом месяце"),
                b = prompt("Во сколько обойдется?");
            
            if( typeof(a)==='string' && typeof(a) != null && typeof(b) != null
            && a != '' && b != '' && a.length < 50){
                console.log("done");
                appData.expenses[a] = b;
            } else{
                i--;
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget/30).toFixed();
        alert("Ежедневный бюджет :" +appData.moneyPerDay);
    },
    detectLevel: function() {
        if(appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if(appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function() {
        if(appData.savings == true) {
            let save = +prompt("Какова сума накоплений?"),
                percent = +prompt("Под какой процент?");
    
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с Вашего депозита: "+ appData.monthIncome);    
        }
    },
    chooseOptExpenses: function() {
        for(i=1; i<4; i++){
            let num = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i]=num;
            console.log(i);
        }
        console.log(appData.optionalExpenses);
    },
   chooseIncome: function() {
        for(i=0; i<1;i++){
        let items = prompt('Что принесёт дополнительный доход? (Перечислете через запятую)', '');
        if(typeof(items)=== 'string' && items != '' && items != null && isNaN(items)){
            appData.income= items.split(', ');
        appData.income.push(prompt('Может что-то ещё?'));
        appData.income.sort();
        
    }else {
        i--;
    }
    }
    alert("Способы доп. зароботка:");
    appData.income.forEach(function(item, i, muss){
        alert( (i+1) +": "+ item +" ");
    }); 
    console.log("Наша програма включает в себя:");
    for(let key in appData){
        console.log(key+appData[key]);

    }
   }

};




