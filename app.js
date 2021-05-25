    function checkPswd() {
      var confirmPassword = "VATT-SFFIRIF-1845";
      var password = document.getElementById("pswd").value;
      if (password == confirmPassword) {
        window.location = "welkom.html";
      }
    }
