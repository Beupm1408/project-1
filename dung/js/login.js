function validate(){
    var u = document.getElementById("user").value;
    var p1 = document.getElementById("password").value;
    
    if(u=="admin"){
        if(p1 =="admin"){
            window.location.assign('admin.html')
            alert("đăng nhập thành công")
            }
    }
    else{
        const user = JSON.parse(localStorage.getItem(document.getElementById('user').value));
        if  (
            user.username === document.getElementById("user").value &&
            user.password === document.getElementById("password").value
        )   {
            window.location.assign('/fame.html');
            alert('Đăng nhập thành công!'); 
        }
    }

}