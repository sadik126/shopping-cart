document.getElementById('caseplus').addEventListener('click',function(){
    let input = document.getElementById('input');
    let increase = input.value;
    total = parseInt(increase)+1;
    input.value = total;
})