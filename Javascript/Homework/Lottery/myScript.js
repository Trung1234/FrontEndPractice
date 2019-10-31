  
alert("Xin mời bạn nhập số!!!");
function dial(){
    var out = Math.floor(Math.random() * 10);
    var input = document.getElementById("input").value;
    document.getElementById("output").innerHTML = out.toString();
    if(input == null || input.length==0){
        document.getElementById("result").innerHTML = "Try again!!";
    }
    else if(input == out){
        document.getElementById("result").innerHTML = "Congratulation! you have a price!!";
        
    }else{
        document.getElementById("result").innerHTML = "Try again!!";
    }
}