

function formValidate(){
let fname = document.getElementById('firstname').value;
let lname = document.getElementById('lastname').value;
let email = document.getElementById('email').value;
let error = document.getElementsByTagName('p');
    if (fname==''){
        error[0].style.color = 'red';
        error[0].innerHTML = 'please fill up your firstname';
      //alert('please fill up your first Name');


    }else{
        if(fname.length < 3){
            error[0].style.color = 'red';
            error[0].innerHTML = 'Length of the first name must be greater than 3'
            //alert('Length of the first name must be greater than 3');
            
        }
     }
     if (lname ==''){
        error[1].style.color = 'red';
        error[1].innerHTML = 'please fill up your Last Name';
        //alert('please fill up your lase Name');

    

    } else{
        if(lname.length < 3){
            error[1].style.color = 'red';
            error[1].innerHTML = 'Length of the last name must be greater than 3'
           //alert('Length of the last name must be greather than 3');
            
        }
     }
     if (email==''){
        error[2].style.color = 'red';
        error[2].innerHTML = 'please fill up your Email';
        //alert('please fill up your Email');

    } else{
        let atpos = email.indexOf('@');
        let dotpos = email.lastIndexOf('.');

        if (atpos < 1 || (dotpos - atpos) < 2){
            error[2].style.color = 'red';
            error[2].innerHTML = 'please input a correct Email address';
            error[2].innerHTML = 'please input a correct email address';
            //alert('please input a correct email address');
        }
       
     }
}