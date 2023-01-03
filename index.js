// bài 3 

document.getElementById("button-money").onclick = function() {
    //B1: gọi giá trị và gán biến  
    let na1 = document.getElementById("na1").value;
    let na2 = +document.getElementById("na2").value;
    let na3 = +document.getElementById("na3").value;

    let showTax = document.getElementById("show-money");
    showTax.style.display = "block";

    // B2: Thuật toán: 

    let moneyTax =  na2 - 4000000 - na3 *1600000 ; // tính thu nhập chịu thuế 


    // Tính thuế thu nhập cá nhân 
    let totalTax;
    function calTax(moneyTax) {
        if (moneyTax > 0 && moneyTax < 60000000){
             totalTax = moneyTax * 0.05 ;
        } else if (moneyTax >= 60000000 && moneyTax <120000000 ) {
            totalTax = ( 60000000 * 0.05 ) + moneyTax * 0.1;
        } else if (moneyTax >= 120000000 && moneyTax < 210000000) {
            totalTax = ( 60000000 * 0.05 ) + ( 120000000 * 0.05 ) + moneyTax * 0.15;
        } else if (moneyTax >= 210000000 && moneyTax < 384000000) {
            totalTax = ( 60000000 * 0.05 ) +  ( 120000000 * 0.05 ) + ( 120000000* 0.15) + moneyTax * 0.2;        
        } else if ( moneyTax >= 384000000 && moneyTax < 624000000 ) {
            totalTax = ( 60000000 * 0.05 ) +  ( 120000000 * 0.05 ) + ( 120000000* 0.15) + ( 210000000 * 0.2) + moneyTax * 0.25;
        } else if ( moneyTax >= 624000000 && moneyTax < 960000000 ) {
            totalTax = ( 60000000 * 0.05 ) +  ( 120000000 * 0.05 ) + ( 120000000* 0.15) + ( 210000000 * 0.2) + (384000000 * 0.25) + moneyTax * 0.3;
        } else if ( moneyTax >= 960000000 ) {
            totalTax = ( 60000000 * 0.05 ) +  ( 120000000 * 0.05 ) + ( 120000000* 0.15) + ( 210000000 * 0.2) + (384000000 * 0.25) + ( 624000000 * 0.3) + moneyTax * 0.35;
        }

        return totalTax;
    }

    let kqMoneyTax = calTax(moneyTax);

    showTax.innerHTML = " Họ tên: " + na1 + " ; " + "Tiền thuế thu nhập cá nhân: " + kqMoneyTax + " VND ";
}


// bài 4 
document.getElementById("button-cap").onclick = function() {
    //B1: gọi giá trị và gán biến  
    let x = +document.getElementById("ID").value;
    let y = +document.getElementById("numK").value;
    let n = +document.getElementById("connect").value;
    let chose = document.getElementById("choose").value;
    let numConnect = +document.getElementById("connect").value;

    
    // Show hiển thị
    let showCap = document.getElementById("show-cap");
    showCap.style.display = "block";
    
    // B2: Thuật toán 

    let kq1;
    function CalCap(y,numConnect) {
        if (chose === "D" && numConnect === 0) {
            kq1 = (y * 50) + 15;
        } else if (chose === "D" && numConnect > 0 && numConnect <= 10  ){
            kq1 = (y * 50) + 75 + 15;
        } else if (chose === "D" && numConnect > 10) { 
            kq1 = (y * 50) + 15 + 75 + ((numConnect - 10 )*5);
        } else if ( chose === "N" && y > 0){
            kq1 = y * 7.5 + 4.5 + 20.5 ;
        } 
        return kq1;
    } 


    // B3: xuất kết quả 
    let totalCap = CalCap(y,numConnect);

    if (chose === "N" && y <= 0 || chose === "D" && y <= 0 && numConnect <= 0 || chose === "0") {
        alert (" vui long nhap du lieu");
    } else {
        showCap.innerHTML = "Mã khách hàng:" + x + " " + "Tiền Cáp: " +"$"+totalCap;
    }
}

function myFunction() {
    let chose = document.getElementById("choose").value;
    let showConnect = document.getElementById("connect");
    if (chose === "D") {
        showConnect.style.display = "block";
    } else {
        showConnect.style.display = "none";
    }         
}
