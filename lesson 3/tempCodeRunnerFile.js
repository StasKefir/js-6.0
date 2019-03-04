function chooseOptExpenses(){
    let num = prompt("Введите обязательную статью расходов в этом месяце");

    for(i=1; i<3; i++){
        let num = prompt("Введите обязательную статью расходов в этом месяце");
        appData.optionalExpenses[i]=num;
    }
}