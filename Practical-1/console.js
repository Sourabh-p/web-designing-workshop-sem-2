function check(){
    let n = document.getElementById("num").value;
    let result;
    if(n % 2 == 0)
    {
        result="Even";
    }
    else
    {
        result="Odd";
    }
    document.getElementById("result").innerHTML=result;
}