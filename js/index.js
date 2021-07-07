// Your code goes here


const navLinks = document.getElementsByTagName("a");

const navcolor = (i)=>{
    navLinks[i].addEventListener('mouseover',(event)=>{
    event.target.style.color = 'orange';})
};
navcolor(0);
navcolor(1);
navcolor(2);
navcolor(3);

const navUncolor = (i)=>{
    navLinks[i].addEventListener('mouseout',(event)=>{
    event.target.style.color = 'black';})
};
navUncolor(0);
navUncolor(1);
navUncolor(2);
navUncolor(3);

const logo = document.querySelector(".logo-heading");
// logo[0].addEventListener("click",function(){
//     if(logo[0].textContent==="Fun Bus"){
//         logo[0].textContent = "Cute Bus!";
//     }
//     else {
//         logo[0].textContent = "Fun Bus"
//     }
// });

logo.addEventListener("click",function(){
    if(logo.textContent==="Fun Bus"){
    logo.textContent = "Cute Bus!";
    }
    else {
    logo.textContent = "Fun Bus"
    }
    });


const NameInput = document.querySelectorAll('input');
const NameColor = (i)=>{
    NameInput[i].addEventListener('keydown',()=>{
    console.log('Key was pressed!');})
    };
NameColor(0);
NameColor(1);