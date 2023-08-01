const inputs = document.querySelectorAll("input")
const email = document.getElementById("email")

function checkInput(){
  inputs.forEach(input => {
    if(input.value === ""){
      input.classList.add("error")
      input.classList.remove("ok")
    }else{
      input.classList.remove("error")
      input.classList.add("ok")
    }
  })

  if (email.value !== "") {
    email.classList.remove("error");
    email.classList.add("errormail");
    if (!email.value.trim().includes("@") || !email.value.trim().includes(".com")) {
      email.classList.remove("ok");
    } else {
      email.classList.add("ok");
      email.classList.remove("errormail");
    }
  }
  
  
}

inputs.forEach(input => {
  input.addEventListener("input", checkInput)
})

function message(){
  const emptyInputs = Array.from(inputs).some(input => input.value === "")
  if(emptyInputs){
    alert("Los campos están vacíos")
  }else if(email.classList.contains("errormail")){
    alert("Ingresa un correo electrónico válido")
  }else{
    alert("Datos enviados exitosamente")
  }
}