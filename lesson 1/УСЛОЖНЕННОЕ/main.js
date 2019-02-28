let num = 33721;
let arr = String(num).split("");
let arr2;



for (var i = 0; i < arr.length-1; i++) {
    arr[0] *= arr[i+1];
}

arr2 =String(arr[0]).split("");
console.log(arr2[0]+" "+arr2[1]);
