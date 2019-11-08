  



function addRow(){
    resetError();
    var tableRows = $('#students tr').length;
    var name = $("#name").val();
    var classOfStudent = $("#class").val();
    var math = Number($("#math").val());
    var physic = Number($("#physic").val());
    var chemical = Number($("#chemical").val());
    if(name.length==0){
        $("#nameError").css("color", "red").text("Họ tên bắt buộc phải nhập");
    }else{
        if(classOfStudent.length==0){       
            $("#classError").css("color", "red").text("Lớp học bắt buộc phải nhập");
        }else{
            if(math.length==0 || math <= 0 || math > 10){
                $("#mathError").css("color", "red").text("Điểm toán bắt buộc phải nhập và phải trong khoảng từ 0 đến 10");
            }else{
                if(physic.length==0 || physic <= 0 || physic > 10){
                    $("#physicError").css("color", "red").text("Điểm lý bắt buộc phải nhập và phải trong khoảng từ 0 đến 10");
                }else{
                    if(chemical.length==0 || chemical <= 0 || chemical > 10){
                        $("#chemicalError").css("color", "red").text("Điểm hóa bắt buộc phải nhập và phải trong khoảng từ 0 đến 10");
                    }else{
                        $(document).ready(function () {
                            $('#students').append('<tr><td>'+tableRows+
                            '</td><td style="text-align:left;">'+name+'</td><td>'
                            +classOfStudent+'</td><td>'+math+'</td><td>'
                            +physic+'</td><td>'+chemical+'</td></tr>');
                        });
                    }
                }
            }
        }
    }    
}
function resetError(){
    $("#nameError").text("");
    $("#classError").text("");
    $("#mathError").text("");
    $("#physicError").text("");
    $("#chemicalError").text("");
}