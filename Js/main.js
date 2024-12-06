let UserNameInput=document.getElementById("NameReg");
let EmailInput=document.getElementById("EmailReg");
let PasswordInput=document.getElementById("PassReg");

let SignUpBtn=document.getElementById("SignUpBtn");
let LoginBtn=document.getElementById("LoginBtn");

let LoginEmail=document.getElementById("UserEmail");
let LoginPass=document.getElementById("UserPass");

let LoginWarning;
let Warning;

let UserWarning;
let EmailWarning;
let AccWarning;
let SignUpWarning;
let AccSuccess;

let WelcomeUser;

let Accounts=[];

let OneAcc;


if(localStorage.getItem("Acc") !=null)
{
Accounts=JSON.parse(localStorage.getItem("Acc"))
}
function SignUp()
{
    if(NameValidation()==true&&EmailValidation()==true && !SignUpError())
    {
        OneAcc =
        {
         UserName:UserNameInput.value,
         Email:EmailInput.value,
         Password:PasswordInput.value
        }
       Accounts.push(OneAcc);
       localStorage.setItem("Acc" , JSON.stringify(Accounts));
       AccSuccess=document.getElementById("AccSuccess").classList.remove("d-none");
       AccWarning=document.getElementById("AccWarning").classList.add("d-none");
       
    }
    else if (!EmailInput.value || !UserNameInput.value)
        {
            AccWarning=document.getElementById("AccWarning").classList.remove("d-none");
            AccSuccess=document.getElementById("AccSuccess").classList.add("d-none");
            SignUpWarning=document.getElementById("SignUpWarning").classList.add("d-none");

        }
        else if (SignUpError()==true)
        {
           AccSuccess=document.getElementById("AccSuccess").classList.add("d-none")
        }
    else
    return false;
}

function SignUpError()
{
    for(var i=0;i<Accounts.length;i++)
    {
        if(EmailInput.value.toLowerCase()==Accounts[i].Email.toLowerCase())
        {
            AccWarning=document.getElementById("AccWarning").classList.add("d-none");
            AccSuccess=document.getElementById("AccSuccess").classList.add("d-none");
            SignUpWarning=document.getElementById("SignUpWarning").classList.remove("d-none");
            localStorage.setItem("Acc")==null
        }
        
    }
}

function Login()
{
for(var i=0;i<Accounts.length;i++)
{
if(LoginEmail.value.toLowerCase()==Accounts[i].Email.toLowerCase()&&LoginPass.value==Accounts[i].Password)
{
window.location.href="Welcome.html";
}
else if (!LoginEmail.value || !LoginPass.value) // all inputs required
{
Warning=document.getElementById("Warning").classList.remove("d-none"); // all inputs required
LoginWarning=document.getElementById("LoginWarning").classList.add("d-none"); // incorrect email or password
return;
}
else
Warning=document.getElementById("Warning").classList.add("d-none");
LoginWarning=document.getElementById("LoginWarning").classList.remove("d-none");
}
}
for(var i=0;i<Accounts.length;i++)
{
    WelcomeUser=document.getElementById("WelcomeUser").innerHTML="Welcome " + Accounts[i].UserName
}

function NameValidation()
{
var UserNameText=document.getElementById("NameReg").value;
var NameRegex = /^[a-z0-9_-]{3,15}$/;
if(NameRegex.test(UserNameText.toLowerCase()))
{
    UserWarning=document.getElementById("UserWarning").classList.add("d-none");
    return true;
}
else
{
    UserWarning=document.getElementById("UserWarning").classList.remove("d-none");
    return false;
}
}

function EmailValidation()
{
    var EmailText=document.getElementById("EmailReg").value;
    var EmailRegex= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(EmailRegex.test(EmailText))
    {
        EmailWarning=document.getElementById("EmailWarning").classList.add("d-none");
        return true;  
    }
    else
    {
        EmailWarning=document.getElementById("EmailWarning").classList.remove("d-none");
        return false;  
    }
}
function Logout()
{
    window.location.href="index.html";
}













