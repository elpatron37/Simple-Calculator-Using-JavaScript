let b;
var myinput=document.getElementById("inp")
btn=["bpopen","bpclose","nine","eight","seven","six","five","four","three","two","one","divide","plus","minus","multi","zero","dot"]

for(b=0;b<btn.length;b++){
    let lis=document.getElementById(btn[b]);
       lis.addEventListener("click",function(){
        myinput.value+=lis.textContent;
       });
}
document.getElementById("back").addEventListener("click", function () {
    let current = myinput.value || "";  
    myinput.value = current.slice(0, -1);
});
document.getElementById("clear").addEventListener("click",function(){
    myinput.value=""
});
// Handle = (equal) button
document.getElementById("equal").addEventListener("click", function () {
    let expr = myinput.value || "";
    try {
        let result = eval(expr);
        myinput.value = result;
    } catch (e) {
        myinput.value = "Error";
    }
});
