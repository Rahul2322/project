//set initial count
let count=0;

const value=document.getElementById('value')
const btns=document.querySelectorAll('.btn')

btns.forEach((btn)=>{
    // console.log(btn)
    btn.addEventListener('click',(e)=>{
        const styles=e.currentTarget.classList
        // console.log(styles)
        if(styles.contains('decrease')){
            count--;

        }
        else if(styles.contains('increase')){
           count++;
        }
        else{
            count=0
        }
        value.textContent=count
    })
})