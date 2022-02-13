document.getElementById('caseplus').addEventListener('click',function(){
    let input = document.getElementById('input');
    let increase = input.value;
    let total = parseInt(increase)+1;
    input.value = total;
    
    totalprice = input.value * 59;
    let price = document.getElementById('casetotal');
    price.innerText = totalprice;
    totalp();
})


document.getElementById('caseminus').addEventListener('click',function(){
    let input = document.getElementById('input');
    let increase = input.value;
    if(increase > 0){
       let total = parseInt(increase)-1;
       input.value = total;
    }
    
    
    totalprice = input.value * 59;
    let price = document.getElementById('casetotal');
    price.innerText = totalprice;
    totalp();
   
    
})


document.getElementById('phoneminus').addEventListener('click',function(){
    let input = document.getElementById('input1');
    let increase = input.value;
    if(increase > 0){
       let total = parseInt(increase)-1;
       input.value = total;
    }
    
    
    totalprice = input.value * 1219;
    let price = document.getElementById('phonetotal');
    price.innerText = totalprice;
    totalp();
   
    
})


document.getElementById('phoneplus').addEventListener('click',function(){
    let input = document.getElementById('input1');
    let increase = input.value;
    total = parseInt(increase)+1;
    input.value = total;
    
    totalprice = input.value * 1219;
    let price = document.getElementById('phonetotal');
    price.innerText = totalprice;
    totalp();
   
})


function phonecalculate(){
    let input = document.getElementById('input1');
    totalprice = parseInt(input.value) ;
    return totalprice;
}

function casecalculate(){
    let input = document.getElementById('input');
    totalprice = parseInt(input.value) ;
    return totalprice;
}



function totalp(){
   let phoneprice = phonecalculate()*1219;
   let caseprice = casecalculate()*59;
   let total = phoneprice + caseprice;
   let tax = total /10;
   let totalprice = tax + total;
   document.getElementById('sub-total').innerText = total;
   document.getElementById('tax').innerText = tax;
   document.getElementById('total').innerText = totalprice;
   
}





// let phonetotal = document.getElementById('phonetotal') 
// let total1 = phonetotal.innerText;
// console.log(total1);