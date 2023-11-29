function reg()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    var cpassword=document.getElementById("cpassword").value;
    if(username=="" && password=="" && cpassword=="")
    {
        alert("Please fill all necessary information to register")
        return;
    }
    if(username==""){
        alert("Fill all information being asked properly")
        return;
    }
    if(password==""){
        alert("Fill all information being asked properly")
        return;
    }
    if(cpassword!==password){
        alert("Please Confirm Password")
        return;
    }
    else
    {
        window.location="shop.html";
    }
}