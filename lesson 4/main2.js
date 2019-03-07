let arr=[],
    arr2=[];

    for(p=2; p<=100; p++){
        arr.push(p);
    }
    step:
for (i = 0; i < arr.length; i++) {
    for (j = 0; j < i; j++) {
        if (arr[i] % arr[j] == 0) {
            continue step;
        } 

    }
    arr2.push(arr[i]);
}

arr=[];
arr2.forEach(function(item,i,muus){
    let getTextItem = " Делители этого числа: 1 и " + item; 
    let summItemAndString = item + getTextItem;
    arr.push(summItemAndString);
});
console.log(arr);


