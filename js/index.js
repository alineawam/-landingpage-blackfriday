function cadastrarEmail() {
    localStorage.clear();
    let email = document.getElementById('email').value;
    localStorage.setItem("e-mail", email)
}