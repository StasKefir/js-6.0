let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let question1 = prompt("Введите обязательную статью расходов в этом месяце");
let result1 = prompt("Во сколько обойдется?");
let question = prompt("Введите обязательную статью расходов в этом месяце");
let result2 = prompt("Во сколько обойдется?");

let appData = {
    budget: money,
    timeData: time,
    expenses: {
        [question1] : result1,
        [question] : result2
    },
    optionalExpenses: {},
    income: [],
    saving: false
};

let budgetFor1Day = money/30;
alert("Ваш бюджет на 1 день: " +budgetFor1Day+"грн");

console.log(appData.expenses);
