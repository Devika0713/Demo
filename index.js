const colors=["blue","red", "rgba(133,122,200)", "#f15025"];
const btn1=document.getElementById("btn");
const color1=document.querySelector(".color");
btn1.addEventListerner("click", function(){
    const randomNumber=getRandomNumber();
    document.body.style.backgroundColor=colors[randomNumber];
color1.textContent=colors[randomNumber];
});
console.log(getRandomNumber());
function getRandomNumber()
{
    return Math.floor(Math.random()*4);
}
