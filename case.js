//INITIALIZE THE LOCALSTORAGE TO 0 IF LOCALSTORAGE KEY IS NOT PRESENT
if(!localStorage.key("lenivotes")&&!localStorage.key("bbmvotes")&&!localStorage.key("pacquiaovotes")&&!localStorage.key("iskovotes")){
   localStorage.setItem('lenivotes', 0);
   localStorage.setItem('bbmvotes', 0);
   localStorage.setItem('pacquiaovotes', 0);
   localStorage.setItem('iskovotes', 0);
}

//CREATE OBJECT WITH VOTES CORRESPONDING TO LOCALSTORAGE KEY
let candidate = [
   {
      name: "Leni",
      color: "Pink",
      votes: localStorage.getItem("lenivotes")
   },
   {
      name: "BBM",
      color: "Red",
      votes: localStorage.getItem("bbmvotes")
   },
   {
      name: "Pacquiao",
      color: "Yellow",
      votes: localStorage.getItem("pacquiaovotes")
   },
   {
      name: "Isko",
      color: "Blue",
      votes: localStorage.getItem("iskovotes")
   },
   {
      totalvotes() {
         return parseInt(localStorage.getItem("lenivotes")) + parseInt(localStorage.getItem("bbmvotes")) + parseInt(localStorage.getItem("pacquiaovotes")) + parseInt(localStorage.getItem("iskovotes"));
      }
   }
];

//ADD EVENT LISTENER TO BUTTONS 
let leniButton = document.getElementById("leni-vote");
leniButton.addEventListener('click', e => {
   localStorage.setItem('lenivotes', ++candidate[0].votes);
});

let bbmButton = document.getElementById("bbm-vote");
bbmButton.addEventListener('click', e => {
   localStorage.setItem('bbmvotes', ++candidate[1].votes);
});

let pacquiaoButton = document.getElementById("pacquiao-vote");
pacquiaoButton.addEventListener('click', e => {
   localStorage.setItem('pacquiaovotes', ++candidate[2].votes);
});

let iskoButton = document.getElementById("isko-vote");
iskoButton.addEventListener('click', e => {
   localStorage.setItem('iskovotes', ++candidate[3].votes);
});

//PERCENTAGE OF VOTES 
let votebuttons = Array.from(document.getElementsByClassName("votebtn"));
let totalvotes = document.getElementById("totalvotes");
for (let i = 0; i < votebuttons.length; i++) {
   votebuttons[i].addEventListener('click', e => {
      addLoadStat();
   })
}

function addLoadStat(){
   totalvotes.innerText = candidate[4].totalvotes();

   let percentLeniVote = (((candidate[0].votes / candidate[4].totalvotes()) * 100).toFixed(2) + "%");
   let lenivotes = document.getElementById("leni-graph");
   lenivotes.style.setProperty('width', `calc(${percentLeniVote})`);
   lenivotes.innerText = percentLeniVote;

   let percentBBMVote = (((candidate[1].votes / candidate[4].totalvotes()) * 100).toFixed(2) + "%");
   let bbmvotes = document.getElementById("bbm-graph");
   bbmvotes.style.setProperty('width', `calc(${percentBBMVote})`);
   bbmvotes.innerText = percentBBMVote;

   let percentPacquiaoVote = (((candidate[2].votes / candidate[4].totalvotes()) * 100).toFixed(2) + "%");
   let pacquiaovotes = document.getElementById("pacquiao-graph");
   pacquiaovotes.style.setProperty('width', `calc(${percentPacquiaoVote})`);
   pacquiaovotes.innerText = percentPacquiaoVote;

   let percentIskoVote = (((candidate[3].votes / candidate[4].totalvotes()) * 100).toFixed(2) + "%");
   let iskovotes = document.getElementById("isko-graph");
   iskovotes.style.setProperty('width', `calc(${percentIskoVote})`);
   iskovotes.innerText = percentIskoVote;
   }


//LOAD DATA FROM LOCALSTORAGE
addLoadStat();

