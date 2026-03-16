const text = ["Web Designer","Frontend Developer","Full Stack Learner"];

let i=0;

setInterval(()=>{
document.querySelector(".typing").textContent=text[i];
i=(i+1)%text.length;
},2000);