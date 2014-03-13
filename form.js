function makeStuffAppear(){

    var errorOccurred = 0;
    var regex1 = /^[a-zA-Z0-9'_'\s]{3,16}$/;
    var regex2 = /(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,})$/;
    var regex3 = /^[A-Za-z\s]{1,40}$/;
    var regex4 = /^[0-9A-Za-z\s]{1,75}$/;
    var regex5 = /[\d{5}]/;
    var regex6 = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
    var regex7 = /[A-Za-z0-9\s]*/;
    
    var result1;
    var result2;
    var result3;
    var result4;
    var result5;
    var result6;
    var result7;
    
    result1 = document.getElementById('userName').value.match(regex1);
    result2 = document.getElementById('password').value.match(regex2);
    result3 = document.getElementById('fullName').value.match(regex3);
    result4 = document.getElementById('address').value.match(regex4);
    result5 = document.getElementById('zip').value.match(regex5);
    result6 = document.getElementById('email').value.match(regex6);
    result7 = document.getElementById('comments').value.match(regex7);
    
    document.getElementById('errors').innerHTML="";
    
    if(result1){
    
    }
    else{
        document.getElementById('errors').innerHTML+="<p>Invalid Username</p>";
        errorOccurred = 1;
    }
    
    if(result2){
    
    }
    else{
        document.getElementById('errors').innerHTML+="<p>Invalid Password</p>";
        errorOccurred = 1;
    }
    
    if(result3){
    
    }
    else{
        document.getElementById('errors').innerHTML+="<p>Invalid Name</p>";
        errorOccurred = 1;
    }
    
    if(result4){
    
    }
    else{
        document.getElementById('errors').innerHTML+="<p>Invalid Address</p>";
        errorOccurred = 1;
    }
    
    if(result5){
    
    }
    else{
        document.getElementById('errors').innerHTML+="<p>Invalid Zip Code</p>";
        errorOccurred = 1;
    }
    
    if(result6){
    
    }
    else{
        document.getElementById('errors').innerHTML+="<p>Invalid e-mail</p>";
        errorOccurred = 1;
    }
    
    if(result7){
    
    }
    else{
        document.getElementById('errors').innerHTML+="<p>Invalid Comment</p>";
        errorOccurred = 1;
    }
    
    if(document.getElementById('password').value != document.getElementById('confirmPassword').value){
        document.getElementById('errors').innerHTML+="<p>Passwords did not match.</p>";
        errorOccurred = 1;
    }
    
    if(document.getElementById('email').value != document.getElementById('confirmEmail').value){
        document.getElementById('errors').innerHTML+="<p>Emails did not match.</p>";
        errorOccurred = 1;
    }
    
    if(errorOccurred == 1){
        document.getElementById('errors').style.display="block";
        document.getElementById('errors').style.color="red";
    }
    else{
        document.getElementById('errors').style.display="none";
    }
}