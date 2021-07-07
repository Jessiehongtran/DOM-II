const blocks = document.querySelectorAll(".block");
console.log(blocks);
blocks[0].addEventListener("click",(event)=>{
event.target.style.display = "flex";
event.target.style.order = "-1"
});

blocks[1].addEventListener("click",(event)=>{
    event.target.style.display = "flex";
    event.target.style.order = "-2"
    });

blocks[2].addEventListener("click",(event)=>{
    event.target.style.display = "flex";
    event.target.style.order = "-3"
    });

blocks[3].addEventListener("click",(event)=>{
    event.target.style.display = "flex";
    event.target.style.order = "-4"
    });

blocks[4].addEventListener("click",(event)=>{
    event.target.style.display = "flex";
    event.target.style.order = "-5"
    });

blocks[5].addEventListener("click",(event)=>{
    event.target.style.display = "flex";
    event.target.style.order = "-6"
    });