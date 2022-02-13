document.getElementById('caseplus').addEventListener('click',function(){
    let input = document.getElementById('input');
    let increase = input.value;
    total = parseInt(increase)+1;
    input.value = total;
    
    totalprice = input.value * 59;
    let price = document.getElementById('casetotal');
    price.innerText = totalprice;
})


document.getElementById('caseminus').addEventListener('click',function(){
    let input = document.getElementById('input');
    let increase = input.value;
    if(increase > 0){
        total = parseInt(increase)-1;
    }
    
    input.value = total;
    totalprice = input.value * 59;
    let price = document.getElementById('casetotal');
    price.innerText = totalprice;
   
    
})


document.getElementById('phoneminus').addEventListener('click',function(){
    let input = document.getElementById('input1');
    let increase = input.value;
    if(increase > 0){
        total = parseInt(increase)-1;
    }
    
    input.value = total;
    totalprice = input.value * 1219;
    let price = document.getElementById('phonetotal');
    price.innerText = totalprice;
   
    
})


document.getElementById('phoneplus').addEventListener('click',function(){
    let input = document.getElementById('input1');
    let increase = input.value;
    total = parseInt(increase)+1;
    input.value = total;
    
    totalprice = input.value * 1219;
    let price = document.getElementById('phonetotal');
    price.innerText = totalprice;
})