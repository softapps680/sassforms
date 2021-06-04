
const login = () =>{

        let mailformat = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        
       
        if(!mailformat.test(document.getElementById('user').value)) {
                formError.innerText='Nåt fält fel'
                formCorrect.innerText=''
                return false;
        }
       if(document.getElementById('pass').value=='') {
                formError.innerText='Nåt fält fel'
                formCorrect.innerText=''
                return false;
        }
                formError.innerText=''
                formCorrect.innerText='Loggar in...'
                return true;

       
        

}
 





const validate = (event) =>{
        
        let mailformat = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        
      if(event.target.id=='fname' && event.target.value.trim().length<2 ) {
                fnameError.innerText = 'För lite antal tecken' 
                return false;  
                 }
        else fnameError.innerText = '' 
       if(event.target.id=='lname' && event.target.value.trim().length<2) {
                lnameError.innerText = 'För lite antal tecken'
                return false;  
        } 
        else lnameError.innerText = ''
        if(event.target.id=='tel'){
                if(isNaN(event.target.value)) {        
                telError.innerText = 'Siffror i fältet' 
                return false;
                } 
                else telError.innerText = '' 
        }
        if(event.target.id=='epost'){
                if(!mailformat.test(event.target.value)){
                regepostError.innerText='ogiltig e-post'
                return false;
                }
                else  regepostError.innerText=''
        }  
        if(event.target.id=='confirm_password'){
                var password = document.getElementById("password").value;
                var confirmPassword = document.getElementById("confirm_password").value;
               
                if (password != confirmPassword) {
                        losen2Error.innerText='Lösenorden matchar inte'
                        document.getElementById("savebtn").disabled = true;
                    return false;
                }
              else losen2Error.innerText=''
        }
        
        else { return true;}
                
        document.getElementById("savebtn").disabled = false;
        
             
}




const start = () =>{
   
    var login = document.getElementById("login");
    var reg = document.getElementById("register");
    reg.style.display = "none";
    login.style.display = "block";
   
}
const newUser = () =>{
    var login = document.getElementById("login");
    var reg = document.getElementById("register");
    login.style.display = "none";
    reg.style.display="block";

}