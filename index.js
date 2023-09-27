var subtn=document.getElementById("btn");
var inp=document.getElementById("inp");
var answeer=document.getElementById("answer");

document.getElementById("btn").addEventListener("click",()=>{
    let inputt=inp.value;
    inputt=inputt.toString();
    let arr=inputt.split('');
    arr=arr.reverse();
    inputt=arr.join('');
    answeer.innerHTML=inputt;
    console.log(answeer.value);
});