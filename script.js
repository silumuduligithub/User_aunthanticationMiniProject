function submit(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("pwd").value;
    const conformPassword = document.getElementById("conformPwd").value;
    if(password !== conformPassword){
        window.alert("Password not match");
    }else if(name.length == 1 || email.length == 1){
        window.location.reload(true);
        if(name.length == 1){
            window.alert("can not created token due to invalid name");
        }else{
            window.alert("can not created token due to invalid emailId");
        }
    }else{
        localStorage.setItem("Name", name);
        localStorage.setItem("Email", email);
        localStorage.setItem("Password", password);
        const token = genRandonString(8);
        localStorage.setItem("Token", token);
        window.open("./homePage.html");
    }
}

function genRandonString(length) {
    var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
    var charLength = chars.length;
    var result = '';
    for ( var i = 0; i < length; i++ ) {
       result += chars.charAt(Math.floor(Math.random() * charLength));
    }
    return result;
 }