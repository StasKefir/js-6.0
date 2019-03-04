let str = "урок-3-был слишком легким";
let str2 =str[0].toUpperCase();

str= str.substring(1);
str= str2+str;  

console.log(str);     //result

let arrPosition =[];
function searchIndex(target){
let pos=0;
while(true){
    let fPosition = str.indexOf(target,pos);
    if(fPosition == -1) break;
    arrPosition.push(fPosition);
    pos= fPosition+1;
}
}
searchIndex("-");

let firstPosit = str.slice(0,arrPosition[0]);
let secondPosit = str.slice(arrPosition[0]+1,arrPosition[1]);
let thirdPosit = str.slice(arrPosition[1]+1);
let space = " ";

str= firstPosit+space+secondPosit+space+thirdPosit;

console.log(str); ////result

arrPosition = [];
searchIndex("легким");
let previusPosition = str.slice(0,arrPosition[0]);
let nextPosition = str.slice(arrPosition[0]);
let lastSimvol = nextPosition.slice(0,nextPosition.length-2);

nextPosition= lastSimvol + "о";
str= previusPosition+nextPosition;
alert(str);          
console.log(str);                          ////result

arrPosition = [];
let arr = [22,33,1,"Человек",2,3];

function searchIndex2(target){
    let pos=0;
    while(true){
        let fPosition = arr.indexOf(target,pos);
        if(fPosition == -1) break;
        arrPosition.push(fPosition);
        pos= fPosition+1;
    }
    }
    searchIndex2("Человек");
    previusPosition = arr.slice(0,arrPosition[0]);
    nextPosition = arr.slice(arrPosition[0]+1);
    arr= previusPosition.concat(nextPosition);
    
    let summEl;
    for(i=0;i<arr.length; i++){
        arr[i]= Math.pow(arr[i],3);
    }
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    console.log( Math.sqrt(arr.reduce(reducer)));
    // console.log(arr);


    function getString(strochka){
        let a = strochka;
        if(typeof(a) === "string"){
            alert(" strochka");
            a= a.trim();
            if(a.length>50){
                a= a.slice(0,50)+ "...";
            }
        } else {
            alert("no strochka");
        } console.log(a);           //result
    }
    
    getString("   ывба ьрварволпры  влоапрылвоапрд sdmnfsbdfmns sdfkj sdf fsd sdfsdf sdf fsd ad ekkkkk kkk kkkfsm dkd kdmd dkd  ");
    
