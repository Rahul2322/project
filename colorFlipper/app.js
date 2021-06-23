const colors=['green','red',"rgba(133,122,200)", "#f15025"]
const btn=document.getElementById('btn')
const color=document.querySelector('.color')

btn.addEventListener('click',()=>{
    
    document.body.style.backgroundColor=colors[getColor()]
    color.textContent=colors[getColor()]
})
function getColor(){
    return Math.floor(Math.random()*colors.length)
}