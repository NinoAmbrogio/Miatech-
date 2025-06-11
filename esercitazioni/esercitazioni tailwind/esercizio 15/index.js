const nameInput = document.getElementById("name");
    const surnameInput = document.getElementById("surname");
    const submitBtn = document.getElementById("submitBtn");

    function checkInputs() {
      if (nameInput.value.trim() !== "" && surnameInput.value.trim() !== "") {
        submitBtn.disabled = false;
      } else {
        submitBtn.disabled = true;
      }
    }

    nameInput.addEventListener("input", checkInputs);
    surnameInput.addEventListener("input", checkInputs);

  
    window.addEventListener("DOMContentLoaded", checkInputs);0 