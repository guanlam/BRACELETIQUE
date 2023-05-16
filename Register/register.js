function checkUserName(ArrayUserName) {
      if(ArrayUserName == document.getElementById("username").value){  
        return ArrayUserName;                               
      }     
    }
    
    function userLogin() {
      var usersArray = JSON.parse(localStorage.getItem("usersArray")) || [];
      var UserName= usersArray.find(checkUserName);   
      var UserNameIndex= usersArray.findIndex(checkUserName);     
    
      if ( UserName==null ) {   // null = no data
        document.getElementById("display1").innerHTML = "Invalid Email" ;
        document.getElementById("username").value=" " ;  
        document.getElementById("username").focus() ;    
        document.getElementById("password").value = "" ;    
        document.getElementById("display2").innerHTML = "" ;             
      } else { 
        document.getElementById("display1").innerHTML =  "";
        if(usersArray[UserNameIndex+1] == document.getElementById("password").value){      
          document.getElementById("display2").innerHTML = "";                                                           
          var name=usersArray[UserNameIndex];  
          localStorage.setItem("CurrentUser", name);
          document.login.submit();    
        }else {
          document.getElementById("display2").innerHTML = "Invalid Password"  ;   
          document.getElementById("password").value="" ;                  
          document.getElementById("password").focus() ;  
        }
      }      
    }
    
    function addNewuser() {
      var usersArray = JSON.parse(localStorage.getItem("usersArray")) || [];
      var Newusername=document.getElementById("username").value;
      var Newuserpassword= document.getElementById("password").value;
    
      var UserName= usersArray.find(checkUserName);   
      var UserNameIndex= usersArray.findIndex(checkUserName);     
    
      if ( UserName == null) {   // null--> no data
        if (Newuserpassword != "") {
          usersArray.push(Newusername);
          usersArray.push(Newuserpassword);
          localStorage.setItem("usersArray", JSON.stringify(usersArray));
          document.getElementById("username").value=" "; 
          document.getElementById("password").value="";
          document.getElementById("username").focus();        
          document.getElementById("password").foucs="";
          alert("Register Successfully");
        } else {
          document.getElementById("display1").innerHTML = "Please fill out your email" ;
          document.getElementById("display2").innerHTML =  "please fill out your new password";
          document.getElementById("password").foucs="";
        }
      } else { 
        document.getElementById("display1").innerHTML = "Email is used. Please use a new email" ; 
        document.getElementById("display2").innerHTML = "";
        document.getElementById("username").value=" "; 
        document.getElementById("password").value="";
        document.getElementById("username").focus();            
      }
    }


    var usersArray = JSON.parse(localStorage.getItem("usersArray")) || [];
    
