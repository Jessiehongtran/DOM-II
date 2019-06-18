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

