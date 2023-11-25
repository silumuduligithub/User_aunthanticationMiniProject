function Logout(){
    removeTheDataFromLocalStorage();
    window.open("index.html");
}
function data(){
    const fullName = document.getElementById("name");
    const mailId = document.getElementById("email");
    const token = document.getElementById("token");
    const pwd = document.getElementById("password");
    fullName.innerText = localStorage.getItem("Name");
    mailId.innerText = localStorage.getItem("Email");
    pwd.innerText = localStorage.getItem("Password");
    token.innerText = localStorage.getItem("Token");
}
function removeTheDataFromLocalStorage(){
    localStorage.removeItem("Name");
    localStorage.removeItem("Email");
    localStorage.removeItem("Password");
    localStorage.removeItem("Token");
}
data();
