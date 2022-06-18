window.onload = () => {
    document.getElementById('c').addEventListener('click',()=>{
        document.getElementById('res').innerHTML = 0;
    })

    
}
const concat = (x) => {
    var msg;
    if (x.innerHTML == "X")
    {
        msg = '*';
    }else
    {
        msg = x.innerHTML;
    }
    document.getElementById('res').innerHTML = document.getElementById('res').innerHTML+msg;
}

const calc = () => {
    document.getElementById('res').innerHTML = eval(document.getElementById('res').innerHTML)
}