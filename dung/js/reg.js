function validate(){
    var u = document.getElementById('user').value;
   
    var p1 = document.getElementById('password').value;
    var p2 = document.getElementById("password-rp").value;

    if(u== "") {
        alert("Vui lòng nhập tên!");}
    else if(p1 == "") {
        alert("Vui lòng nhập mật khẩu!");}
    else if(p2 == "") {
        alert("Vui lòng nhập lại mật khẩu!");}
    else if(p1 != p2){
        alert("Vui lòng nhập lại chính xác!");}
    
    else{
    const user = {
        username: document.getElementById('user').value,
        password: document.getElementById('password').value,
    };

    let json = JSON.stringify(user);
    localStorage.setItem(document.getElementById('user').value, json);
    window.location.assign('login.html');
    alert('Đăng kí thành công!');

    }
}