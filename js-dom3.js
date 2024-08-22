

// let box= document.getElementsByClassName("box");
// console.log(box);
// box[0].style.backgroundColor="red";
// box[1].style.backgroundColor="blue";
// box[2].style.backgroundColor="green";
//document.getElementById("pink").style.backgroundColor="pink";

document.querySelector(".box").style.backgroundColor="green"; //first box select hoga 
document.querySelectorAll(".box").forEach(e => {
    e.style.backgroundColor="blue";   //sb box blue hojyege
});

// document.querySelector("#pink").style.backgroundColor="pink";
