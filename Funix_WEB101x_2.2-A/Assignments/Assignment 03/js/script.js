
// Event when input mail
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
    // return false to prevent reload screen
    return false;
  }

  // Event when click on View More or View Less
  function viewMoreAndLess(idBtn, idContent) {
    var moreText = document.getElementById(idContent);
    var btnText = document.getElementById(idBtn);
    if (idContent === 'hobbies-content') {
      if (moreText.style.display === "none") {
        btnText.innerHTML = "+ View  less"; 
        moreText.style.display = "flex";
      } else {
        btnText.innerHTML = "+ View more"; 
         moreText.style.display = "none";
      }
    } else {
      if (moreText.style.display === "inline") {
        btnText.innerHTML = "+ View more"; 
        moreText.style.display = "none";
      } else {
        btnText.innerHTML = "+ View  less"; 
        moreText.style.display = "inline";
      }
    }    
  }
  

