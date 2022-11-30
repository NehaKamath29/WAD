function check() {
    password = document.getElementById("password").value;
    username=document.getElementById("username").value;
    clearErrors()

    if (document.getElementById("username").value == "") {

        seterror("name", "*username should not be blank");
        returnval = false;
        document.getElementById("username").focus()
    } else {
        returnval = true;
    }

    if (returnval == true) {
        if (document.getElementById("password").value == "") {

            seterror("password1", "*password should not be blank");
            returnval = false;
            document.getElementById("password").focus()
        } else {
            returnval = true;
        }  
    }

    
    if (returnval == true) {
        window.location = "hotels.html"
    }
    
    }
    
    function clearErrors() {
    
        errors = document.getElementsByClassName('formerror');
        for (let item of errors) {
            item.innerHTML = "";
        }
    
    
    }
    
    function seterror(id, error) {
        //sets error inside tag of id 
        element = document.getElementById(id);
        element.getElementsByClassName('formerror')[0].innerHTML = error;
    }