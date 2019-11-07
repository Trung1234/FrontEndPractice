  

function generate(){
    var firstname = document.getElementById("firtname").value;
    var lastname = document.getElementById("lastname").value;
    document.getElementById("fullname").value
     = firstname +" "+lastname ;

}
function finalGenerate(){
    var fullname = document.getElementById("fullname").value
    var color = document.getElementById("color").value;
    var font = document.getElementById("font").value;
    var type = document.getElementById("type").value;
    document.getElementById("final").innerHTML = fullname;
    document.getElementById("final").style.color = color;
    document.getElementById("final").style.fontSize = font;
    document.getElementById("final").style.fontStyle = type;
}

function validate(){
    var fullname = document.getElementById("fullname").value
    var color = document.getElementById("color").value;
    var font = document.getElementById("font").value;
    if(fullname.length==0){
        alert("hãy nhập vào tên");
    }
    else if(font.length==0){
        alert("hãy nhập vào font chữ");
    }
    else if(color.length==0){
        alert("hãy nhập vào màu sắc");
    }
    else if(color.charAt(0)!='#' || color.length!=7){
        alert("màu sắc định dạng sai");
    }

}