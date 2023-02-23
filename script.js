function Solve(val){
    var v = document.getElementById('ans');
    v.value += val;
}

function Result(){
    var v1 = document.getElementById('ans').value;
    var v2 = eval(v1);
    document.getElementById('ans').value = v2;
}

function Clear(){
    var input = document.getElementById('ans')
    input.value= '';
}

function Back(){
    var back = document.getElementById('ans');
    back.vlaue= back.value.slice(0,-1);
}