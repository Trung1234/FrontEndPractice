alert("Chào mừng đến với ứng dụng Javascript đầu tiên");
document.getElementById("header").innerHTML = "Ứng dụng thu nhập thông tin cá nhân";
var name = prompt("Hãy nhập tên của bạn: ","");
document.getElementById("name").innerHTML = "Tên của bạn: "+"<span  style=\"font-weight: bold;\">"+name+"</span>";
var city = prompt("Hãy nhập thành phố ̉cua bạn: ","");
document.getElementById("city").innerHTML = "Nơi sống: "+"<span  style=\"font-weight: bold;\">"+city+"</span>";
var phone = prompt("Hãy nhập số điện thoại của bạn: ","");
document.getElementById("phone").innerHTML = "Số điện thoại :"+"<span  style=\"font-weight: bold;\">"+phone+"</span>";
alert("Cám ơn bạn đã cung cấp thông tin!");