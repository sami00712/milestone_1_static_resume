var btn = document.getElementById('button') as HTMLButtonElement
var skl = document.getElementById('skill') as HTMLElement

btn.addEventListener('click', ()=>{
    if(skl.style.display === 'none'){
        skl.style.display = 'block'
    }else{
        skl.style.display = 'none'
    }
})