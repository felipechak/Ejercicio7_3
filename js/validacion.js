function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

document.getElementById("regBtn").addEventListener('click',()=>{
    let todosNoVacios = true
    var inputs = document.getElementsByTagName('input')
    for (let i = 0; i < inputs.length; i++) {
        todosNoVacios = todosNoVacios && inputs[i].value != '';
    }
    let largoPassword = document.getElementById('password1').value.length >= 6
    let passwordIguales = document.getElementById('password1').value == document.getElementById('password2').value
    let condicionesCheck = document.getElementById('terminos').checked
    console.log(todosNoVacios, largoPassword, passwordIguales, condicionesCheck)
    if (todosNoVacios && largoPassword && passwordIguales && condicionesCheck) {
        showAlertSuccess()
    }else{
        showAlertError()
    }
})