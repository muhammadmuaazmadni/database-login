const url="http://localhost:3000/";

function signup(){

    var obj ={
     name:document.getElementById("names").value,
     email:document.getElementById("emails").value,
     password:document.getElementById("passwords").value,
     gender:document.getElementById("gender").value,
     
     number:document.getElementById("numbers").value
    }
    console.log(obj)
  
    const Http = new XMLHttpRequest();
    
    // const url = 'http://localhost:3000/';
    
    
    Http.open("POST", url +"/signup");
    Http.setRequestHeader("Content-type", "application/json")
    Http.send(JSON.stringify(obj));
    
    Http.onreadystatechange = (e) => {
        if (Http.onreadystate === 4) {
            let jsonRes = json.parse(Http.responseText)
            console.log(jsonRes);
            if (jsonRes===200){
                alert(jsonRes.message);
            }
            else{jsonRes.message}
        }
        
        window.location.href = "signin.html"
    }
    return false
}

function loginForm(){
    var obj={
        logemail:document.getElementById("logemail").value,
        password:document.getElementById("loginpass").value
    }
    const Http = new XMLHttpRequest();
    Http.open("POST", url + "/login");
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify(obj));
    Http.onreadystatechange = (e) => {
        if (Http.onreadystate === 4) {
            let jsonRes = json.parse(Http.responseText)
            console.log(jsonRes);
            if (jsonRes===200){
                alert(jsonRes.message);
                alert("login succesfully")
                window.location.href = "profile.html"
            }
            else{
                alert(jsonRes.message)
            }
        }
        
    }
    return false


}

