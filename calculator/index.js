const screen=document.getElementById('screen')
const btn=document.querySelectorAll('button')
let screenValue=''
for(item of btn){
    item.addEventListener('click',(e)=>{
        btnText=e.target.innerText;
        // console.log(btnText)
        if(btnText =='X'){
            btnText='*'
            screenValue += btnText
            screen.value = screenValue
        }else if(btnText == '='){
            screen.value = eval(screenValue)
        }
        else if(btnText == 'C'){
            screenValue = ''
            screen.value=screenValue
        }else{
            screenValue += btnText
            screen.value=screenValue
            
        }
     
    })
}

