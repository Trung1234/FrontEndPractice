  



function addRow(){
    var i =$('#students tr').length-1;

    var name = $("#name").val();
    var category = $("#class").val();
    var math = Number($("#math").val());
    var physic = Number($("#physic").val());
    var chemical = Number($("#chemical").val());
    i++;
    if(name.length==0){
        alert("Họ tên bắt buộc phải nhập");
    }else{
        if(category.length==0){
            alert("Lớp học bắt buộc phải nhập");
        }else{
            if(math.length==0 || math < 0 || math > 10){
                alert("Điểm toán bắt buộc phải nhập");
            }else{
                if(physic.length==0 || physic < 0 || physic > 10){
                    alert("Điểm lý bắt buộc phải nhập");
                }else{
                    if(chemical.length==0 || chemical < 0 || chemical > 10){
                        alert("Điểm hóa bắt buộc phải nhập");
                    }else{
                        $(document).ready(function () {
                            $('#students').append('<tr><td>'+i+'</td><td>'+name+'</td><td>'
                            +category+'</td><td>'+math+'</td><td>'+physic+'</td><td>'+chemical+'</td></tr>');
                        });
                    }
                }
            }
        }
    }

    
    

}