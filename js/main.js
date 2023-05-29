const box = document.querySelector(".box")
const inputGroup = document.querySelector(".input-group");
let clickStatus = false;


inputGroup.addEventListener('click', function(){
    if(!clickStatus){
        inputGroup.classList.remove('w-30');
        inputGroup.classList.add('w-40')
        clickStatus = true;
    }
    else{
        inputGroup.classList.remove('w-40');
        inputGroup.classList.add('w-30')
        clickStatus = false;
    }
})
