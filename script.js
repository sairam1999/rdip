//TASK 1-CALCULATOR-------------------------------------------------------------------
function add()
{   var input1;
    input1=calculator.output.value + '+';
    console.log(input1);
    return input1;
}

function sub()
{var input2;
    input2=calculator.output.value + '-';
    console.log(input2);
    return input2;
}
function mul()
{
    var input3;
    input3=calculator.output.value + '*';
    console.log(input3);
    return input3;
}
function division()
{
    var input4;
    input4=calculator.output.value + '/';
    console.log(input4);
    return input4;
}
function percent()
{var input5;
    input5 = (calculator.output.value/100);
    input5=input5+'*';
    console.log(input5);
    return input5;
}
function absolute()
{   var input6;
    input6=(eval(calculator.output.value))
    if(input6<0)
    {input6 = Math.abs(input6);}
    console.log(input6);
    return input6;
}
function sqroot()
{   var input7;
    input7=(eval(calculator.output.value))
    input7 = (Math.sqrt(input7))

if((input7).toString().split('.').length==2){
    input7= input7.toFixed(3);
    }
    console.log(input7);
    return input7;

}
function eq()
{   var input8;
    input8=eval(calculator.output.value);
    if(input8.toString().split('.').length ==2)
  { input8=input8.toFixed(3);}
    console.log(input8);
    return input8;
}

function decimal()
{   var input9;
    input9=calculator.output.value + '.';
    if(((input9).split('.').length>2) && ((input9).indexOf('+') <1 && (input9).indexOf('-') <1 && (input9).indexOf('/') <1 && (input9).indexOf('*') <1 ))
    {alert("invalid");
    return '0';}
    console.log(input9);
    return input9;
}





//TASK 2 -FORM VALIDATION------------------------------------------------------------------
function validateName(name) { // Name Validation ---------------------------------
    var nameRegex = /^[$A-Z_][0-9A-Z_$]*$/i;
    return nameRegex.test(name);
}


function validateEmail(email) { // email Validation--------------------------------------
    var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) { // phone number Validation----------------------------------------------
    var phoneRegex = /^(\+91-|\+91|0)?\d{10}$/; 
    return phoneRegex.test(phone);
}

function doValidate() {
    if(!validateName(document.vform.requiredname.value))
    {alert("Invalid Name");
    return false;}
   if (!validateEmail(document.vform.requiredemail.value))  
    {alert("Invalid Email");
    return false;}
    if(!validatePhone(document.vform.requiredphone.value))
    {alert("Invalid PhoneNumber");
    return false;}
    if(validateName(document.vform.requiredname.value) && validateEmail(document.vform.requiredemail.value) && validatePhone(document.vform.requiredphone.value))
    {alert("HEY "+ document.vform.requiredname.value+ "! Your Details " + document.vform.requiredemail.value+" and "+document.vform.requiredphone.value+" Validated Successfully.")}
    
}

//TASK 3- PALINDROME-----------------------------------------------------------------------------------------

function checkPALINDROME(str){
       var tempStr = str.toLowerCase();
       tempStr=tempStr.replace(/[^a-zA-Z0-9]+/g,'');
        var ccount = 0;
        if(tempStr==="") 
        {
            alert("Nothing found!! Try Again...");
            return false;
        }
        if ((tempStr.length) % 2 === 0) 
        {
            ccount = (tempStr.length) / 2;
        }
         else 
         {
            if (tempStr.length === 1) 
            {
                alert( str+" is a PALINDROME.");
                return true;
            } 
            else 
            {
                ccount = (tempStr.length - 1) / 2;
            }
        }
        for (var x = 0; x < ccount; x++) 
        {
            if (tempStr[x] != tempStr.slice(-1-x)[0]) 
            {
                alert(str+" is NOT a PALINDROME.");
                return false;
            }
        }
        alert(str+" is a PALINDROME.");
        return true;
    }
    

    //TASK 3 ANAGRAMS---------------------------------------------------------------------------
    function checkANAGRAM(stringA, stringB) {
        strA=stringA;
        strB=stringB;
        stringA = stringA.replace(/[^\w]/g, '');
        stringA = stringA.toLowerCase();
        stringB = stringB.replace(/[^\w]/g, '');
        stringB = stringB.toLowerCase();
        stringA = stringA.split('');
        stringA = stringA.sort().join('');
        stringB = stringB.split('');
        stringB = stringB.sort().join('');
        if(stringA==="" || stringB==="") 
        {
            alert("Nothing found!! Try Again...");
            return false;
        }
       if(stringA===stringB)
       {
           alert(strA+" and "+strB+" are "+" ANAGRAMS!");
           return true;
       }
       else{
        alert(strA+" and "+strB+" are "+" NOT ANAGRAMS!");
        return false;
       }
    }

    ///SURVIVAL GAME---------------------------------------------------------------------------
    
function checkSURVIVOR(text1,text2)
{//console.log("ww");
    let survivalMap = new Map([
        ['0','Human'],
        ['1','Cockroach'],
        ['2','Nuclear Bomb']
    ]);
    var a = document.gform.input1.value;
   // console.log(a);
     var b = document.gform.input2.value;
   // console.log(b);
    if((a == '') || (b == ''))
    {
        alert("Nothing found!! Try Again...");
        return false;
    }
    a= parseInt(a);
    //console.log(a);
    b= parseInt(b);
    //console.log(b);
    var r = a%3 ;
    var s = b%3;
    //console.log(r,s);
    var TIE=true;
    if (r == s)
    {
    alert("Itz A TIE! ");
    return TIE;
    }
    if(((r ==0) && (s==1)) || ((r==1) && (s==0)))
    {
        if((r ==0) && (s==1))
        {alert(" Objects are "+survivalMap.get('0')+" and " + survivalMap.get('1')+"; Hurry! "+survivalMap.get('0') +" SURVIVES.");}
        else
        {alert(" Objects are "+survivalMap.get('1')+" and " + survivalMap.get('0')+"; Hurry! "+survivalMap.get('0') +" SURVIVES.");}
    return survivalMap.get('0');
    }

    if(((r ==1) && (s==2)) || ((r==2) && (s==1)))
    {
        if((r ==1) && (s==2))
        {alert(" Objects are "+survivalMap.get('1')+" and " + survivalMap.get('2')+"; So "+survivalMap.get('1') +" SURVIVES!");}
        else
        {alert(" Objects are "+survivalMap.get('2')+" and " + survivalMap.get('1')+"; So "+survivalMap.get('1') +" SURVIVES!");}
        return survivalMap.get('1');
    }
    if(((r ==0) && (s==2)) || ((r==2) && (s==0)))
    {   if((r ==0) && (s==2))
        {alert(" Objects are "+survivalMap.get('0')+" and " + survivalMap.get('2')+"; OOPS! "+survivalMap.get('0') +" DIES.");}
        else
        {alert(" Objects are "+survivalMap.get('2')+" and " + survivalMap.get('0')+"; OOPS!  "+survivalMap.get('0') +" DIES.");}
        return survivalMap.get('2');
    }
} 
function generateRandomNumber()
{
    document.getElementById("input1").value=Math.floor(Math.random()*Math.floor(1000));
    document.getElementById("input2").value=Math.floor(Math.random()*Math.floor(1000));
}