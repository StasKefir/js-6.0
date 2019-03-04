let week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    today = week[4];
for(i=0; i<week.length; i++){
    if(week[i]== today){
        document.write(week[i].italics()+" <br>");
    }
    document.write(week[i].bold()+" <br>");

}

let arr = ["345678","123457", "653", "7767", "0987", "3424", "0000"];

for(i=0; i<arr.length; i++){
    arr[i] = arr[i].split();
    console.log(arr[i]); 

}