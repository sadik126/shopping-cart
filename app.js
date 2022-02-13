document.getElementById('caseplus').addEventListener('click',function(){
    let input = document.getElementById('input');
    let increase = input.value;
    total = parseInt(increase)+1;
    input.value = total;
})


document.getElementById('caseminus').addEventListener('click',function(){
    let input = document.getElementById('input');
    let increase = input.value;
    if(increase > 0){
        total = parseInt(increase)-1;
    }
    
    input.value = total;
})