  chooseIncome: function() {
        let items = prompt('Что принесёт дополнительный доход? (Перечислете через запятую)', '');
        while(typeof(items) != 'string' || items == '' || typeof(items) == null)
        appData.income= items.split(', ');
        appData.income.push(prompt('Может что-то ещё?'));
        appData.income.sort();
    
}