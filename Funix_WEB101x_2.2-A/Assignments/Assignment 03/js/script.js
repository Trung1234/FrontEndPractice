
function logSubmit() {
    let error = '';
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var regexPattern = new RegExp(regex);
    let email = document.getElementById('exampleInputEmail').value;
    if(!email) {
        error = `Hãy nhập vào mail`;
    }
    else {
       console.log(regex.test(email))
       if (!regexPattern.test(email)) {
         error = ` mail không đúng định dạng`;
       } else {
        document.getElementById("input-info").style.display = "none";
        document.getElementById("personal-info").style.display = "block";
       }
    }
    document.getElementById('error').innerHTML = error;
    
    // event.preventDefault();
  }

  function myFunction() {
    var moreText = document.getElementById("experience-content");
    var btnText = document.getElementById("myBtn");
  
    if (moreText.style.display === "inline") {
      btnText.innerHTML = "+ View more"; 
      moreText.style.display = "none";
    } else {
      btnText.innerHTML = "+ View  less"; 
      moreText.style.display = "inline";
    }
  }
  
  $( "experience" ).hover(
    function() {
        document.getElementById("myBtn").style.display = "block";
    }, function() {
        document.getElementById("myBtn").style.display = "none";
    }
  );
  function showBtn() {
    document.getElementById("myBtn").style.display = "block";
  }
  function hideBtn() {
    document.getElementById("myBtn").style.display = "none";
  }

