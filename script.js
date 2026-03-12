let language = "en";

/* translations */

const translations = {

en:{
placeholder:"Enter your name",
enter:"Enter",
instructions:"Instructions",
instructionText:"Welcome to Mind Logic! This web game has 3 modes: Easy Mode, Normal Mode, and Hard Mode. In this game, you will answer questions related to Discrete Structures lessons such as Sets, Relations, Functions, Logic, and Probability.",
start:"Start Game",
selectMode:"Select Mode",
easy:"Easy Mode",
normal:"Normal Mode",
hard:"Hard Mode",
scenario:"Scenario",
next:"Next",
finished:"Easy Mode Finished"
},

tl:{
placeholder:"Ilagay ang iyong pangalan",
enter:"Pumasok",
instructions:"Mga Panuto",
instructionText:"Maligayang pagdating sa Mind Logic!",
start:"Simulan ang Laro",
selectMode:"Pumili ng Mode",
easy:"Madaling Antas",
normal:"Katamtaman",
hard:"Mahirap",
scenario:"Sitwasyon",
next:"Susunod",
finished:"Tapos na ang Easy Mode"
}

};


/* language switch */

function setLang(lang){

language = lang;

document.getElementById("playerName").placeholder = translations[lang].placeholder;
document.getElementById("enterBtn").innerText = translations[lang].enter;

document.getElementById("instructionTitle").innerText = translations[lang].instructions;
document.getElementById("instructionText").innerText = translations[lang].instructionText;

document.getElementById("startBtn").innerText = translations[lang].start;

document.getElementById("modeTitle").innerText = translations[lang].selectMode;
document.getElementById("easyBtn").innerText = translations[lang].easy;
document.getElementById("normalBtn").innerText = translations[lang].normal;
document.getElementById("hardBtn").innerText = translations[lang].hard;

}


/* enter button */

function enterGame(){

let name = document.getElementById("playerName").value;

if(name===""){

if(language==="en"){
alert("Please enter your name");
}else{
alert("Pakilagay ang iyong pangalan");
}

return;

}

document.getElementById("menu").style.display="none";
document.querySelector(".title").style.display="none";
document.getElementById("instructions").classList.remove("hidden");

}


/* show mode selection */

function showModes(){

document.getElementById("instructions").style.display="none";
document.getElementById("modes").classList.remove("hidden");

}


/* EASY MODE QUESTIONS */

let easyQuestions = [

{
question_en:"What is A ∪ B (Union)?",
question_tl:"Ano ang A ∪ B (Union)?",
choices:[
"{20,10,13,30,42,11,19}",
"{10,20,42}",
"{13,30}",
"{11,19}"
]
},

{
question_en:"What is A ∩ B (Intersection)?",
question_tl:"Ano ang A ∩ B (Intersection)?",
choices:[
"{10,20,42}",
"{13,30}",
"{11,19}",
"{20,30}"
]
},

{
question_en:"What is A − B ?",
question_tl:"Ano ang A − B ?",
choices:[
"{13,30}",
"{10,20}",
"{42}",
"{11,19}"
]
},

{
question_en:"What is B − A ?",
question_tl:"Ano ang B − A ?",
choices:[
"{11,19}",
"{13,30}",
"{10,20}",
"{42}"
]
}

];


let currentQuestion = 0;


/* EASY BUTTON */

document.getElementById("easyBtn").onclick = function(){

document.getElementById("modes").style.display="none";
document.getElementById("easyMode").classList.remove("hidden");

loadQuestion();

};


/* LOAD QUESTION */

function loadQuestion(){

let q = easyQuestions[currentQuestion];

let scenarioText =
translations[language].scenario + " 1\n" +
"Set A = {20,10,13,30,42}\n" +
"Set B = {10,20,42,11,19}";

document.getElementById("scenarioText").innerText = scenarioText;

if(language==="en"){
document.getElementById("questionText").innerText = q.question_en;
}else{
document.getElementById("questionText").innerText = q.question_tl;
}

for(let i=0;i<4;i++){
document.getElementById("choice"+i).innerText = q.choices[i];
}

}


/* NEXT QUESTION */

function nextQuestion(){

currentQuestion++;

if(currentQuestion >= easyQuestions.length){

alert(translations[language].finished);

document.getElementById("easyMode").style.display="none";
document.getElementById("modes").style.display="block";

document.getElementById("easyBtn").style.display="none";

return;

}

loadQuestion();

}


/* floating math symbols */

const symbols = ["+", "-", "×", "÷", "π", "√", "∞", "∑"];

function createSymbol(){

let symbol = document.createElement("div");
symbol.classList.add("symbol");

symbol.innerText = symbols[Math.floor(Math.random()*symbols.length)];

symbol.style.left = Math.random()*100 + "vw";

symbol.style.animationDuration = (5 + Math.random()*10) + "s";

document.querySelector(".symbols").appendChild(symbol);

setTimeout(()=>{
symbol.remove();
},15000);

}

setInterval(createSymbol,800);
