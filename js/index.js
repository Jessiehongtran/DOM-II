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

const logo = document.getElementsByClassName("logo-heading");
logo[0].addEventListener("click",function(){
    if(logo[0].textContent==="Fun Bus"){
        logo[0].textContent = "Cute Bus!";
    }
    else {
        logo[0].textContent = "Fun Bus"
    }
});
