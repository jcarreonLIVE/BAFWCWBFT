    function checkPswd() {
      var confirmPassword = "1234";
      var password = document.getElementById("pswd").value;
      if (password == confirmPassword) {
        window.location = "welkom.html";
      }
    }
