  var subtn=document.getElementById("btn");
  var inp=document.getElementById("inp");
  var answeer=document.getElementById("answer");

  subtn.addEventListener('click',()=>{
    let inputt=inp.value;
    inputt=inputt.toString();
    let arr=inputt.split('');
    let sortarr=arr.sort().join('');
    answeer.innerHTML=sortarr;
  });