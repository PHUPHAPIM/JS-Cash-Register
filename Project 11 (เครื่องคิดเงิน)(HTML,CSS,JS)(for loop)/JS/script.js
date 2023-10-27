for(var i = 0; i<50; i++){
    document.getElementById("dash").innerHTML += "-";
    document.getElementById("dash-2").innerHTML += "-";
}

let qrt = prompt("กรอกจำนวนสินค้า");
let sum = 0;

for(var i = 1 ; i<=qrt; i++){

    let list = prompt("ราคาสินค้าชิ้นที่" + " " + i);
    
    sum = sum + parseInt(list);
    document.getElementById("list-2").innerHTML += "ชิ้นที่ :" + " " + i + " " + "</br>";
    document.getElementById("list-1").innerHTML += i + "</br>";
    document.getElementById("list-3").innerHTML += list + "</br>";

}   

document.getElementById("total").innerHTML = "รวม" +" " + sum + " " +  "บาท";