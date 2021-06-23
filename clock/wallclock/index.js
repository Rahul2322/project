let hourHand=document.querySelector('.hour-hand');
let minuteHand=document.querySelector('.minute-hand');
let secondHand=document.querySelector('.second-hand');
setInterval(()=>{
    const date=new Date();
    const hours=date.getHours();
    const minutes=date.getMinutes();
    const seconds=date.getSeconds();
    hrotation=30*hours + minutes/2;
    mrotation=6*minutes;
    srotation=6*seconds
    hourHand.style.transform=`rotate(${hrotation}deg)`;
    minuteHand.style.transform=`rotate(${mrotation}deg)`;
    secondHand.style.transform=`rotate(${srotation}deg)`;


},1000)