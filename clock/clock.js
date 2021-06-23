function showTime(){
    var getdate=new Date();
    var gethours=getdate.getHours();
    var getminutes=getdate.getMinutes();
    var getseconds=getdate.getSeconds();
    var timeofday=getdate>12?'PM':'AM';
    getminutes=(getminutes<10?"0":"")+getminutes;
    getseconds=(getseconds<10?"0":"")+getseconds;
    var timestr=gethours + ':' + getminutes + ':' + getseconds +  ' '+  timeofday;
    document.getElementById('clock').innerHTML=timestr
    }
    showTime()