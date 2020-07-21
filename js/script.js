    var dayoftheweek= ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday", "Sunday"];

    var akanmale=["Kwasi","Kwado","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    var akanfemale=["Akosua","Adwoa", "Abenaa","Akua","Yaa","Afua","Ama"];
    function akannames()
{

    var day= parseInt(document.getElementById("day").value);
    var month= parseInt(document.getElementById("month").value); 
    var year= parseInt(document.getElementById("year").value); 

    var male=document.getElementById("male").value;
    var female=document.getElementById("female").value; 
    var date= new Date (year + "/"+ month + "/"+ day);
    var birth= date.getDay();

    if (year <= 1900 || year > 2020) alert("Input the correct year!");
    else if (month <= 0 || month > 12) alert("Input correct month!");
    else if (day <= 0 || day > 31) alert("Input correct day!");
  
    if (male==="male"){alert ("your akan name is "+akanmale[birth]);}
   else if (female==="female") {alert ("your akan name is"+akanfemale[birth]);}

}

