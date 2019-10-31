  
alert("Xin mời bạn nhập số!!!");
function myFu(){
    var out = Math.floor(Math.random() * 10);
    var input = document.getElementById("input").value;
    document.getElementById("output").innerHTML = out.toString();
    if(input == out){
        document.getElementById("result").innerHTML = "Congratulation! you have a price!!";
        
    }else{
        document.getElementById("result").innerHTML = "Try again!!";
    }
}