var every = document.querySelectorAll(".click");
var review = document.querySelector(".review");


var prepositions = ["About", "After", "Along", "With", "As", "At", "Bellow", "Beyond", "Despite", "Except", "In","To", "Into", "Next", "On", "Out", "Of", "Over", "Regarding", "Through",
"Toward", "Until", "Above", "Against", "Among", "Beneath", "Like", "By", "Under", "Left", "Right", "Behind"];

var soloPalabras = ["Word", "Town", "Class", "Tower", "Lazy", "Eat", "Towel", "Dog", "Fly", "Control", "World", "Read", "Music", "Place", "System", "Love", "Page", "Heaven", "book", "Are",
"Husband", "Heart", "Student", "Cloud"];

var todos  = [] = prepositions.concat(soloPalabras);

var click = [];
var contador = [];
var element = [];

for(let i=0; i<10; i++){

   let ModeloRandom = Math.round(Math.random()*55);  
   
   console.log(ModeloRandom);
   var click = todos[ModeloRandom];

   every[i].innerHTML = click;
   console.log(every[i]);

   every[i].addEventListener("click", ()=>{
   	if(every[i]){
      every[i].classList.add("orange1");
   	}
   });


      every[i].addEventListener("dblclick", ()=>{
    if(every[i]){
      every[i].classList.remove("orange1");
    }
   });

   contador.push(ModeloRandom);
   element.push(every[i]);

}

console.log(" Otro Buckle")

for(let i=0; i<todos.length; i++){
	console.log(i+"#"+todos[i]);
}

function activar(){
	for(let i=0; i<10; i++){
        if(contador[i]<32){
        	element[i].classList.add("rights");
        	element[i].classList.remove("orange1");
        }else{
        	element[i].classList.add("error");
        	element[i].classList.remove("orange1");
        }
		console.log("En la funcion "+element[i]+" # "+contador[i]);
	}
}


var every1 = document.querySelectorAll(".click1");
var review1 = document.querySelector(".review1");


var nouns = ["He", "Pitter", "Soap", "Country", "Music", "Heaven", "Heart", "Cloud", "English", "Boy", "Man", "Group", "Towel", "She", "It", "Hat", "T-Shirt", "Sister", "Mother",
"Husband", "Woman", "I", "You", "Church", "House", "Animal", "Food", "Family", "Cat", "Hatred", "Happiness", "Illness", "Cousin", "Uncle", "Grandpa", "Wall", "Science", "Loan",
"Receipt", "Payment", "Purchase", "Item", "Bill", "Address", "E-mail", "System", "Issue", "Song", "Customer", "Partner", "Refund", "Replacement", "Arrangement", "Statement", "Order"
];

var soloPalabras1 = ["Red", "With", "About", "Among", "Are", "Is", "Regarding", "To", "Among", "Through", "Was", "Were", "Blue", "Far", "Near", "Big", "Small", "Clear", "Expensive",
"Clear", "Happy", "Common", "Yellow", "Rich", "Ugly", "Sick", "Would", "Should", "Him", "Her", "Exciting", "Interesting", "Shocking", "By"];

var todos1 = [] = nouns.concat(soloPalabras1);

console.log("PRONOMBRES"); //Son 54 Pronombres sin contar el 0 y 33 palabras sin contar el 0, 88 elementos asi es como por los cuales devo de multiplicar en el num variable.

var click1 = [];
var contador1 = [];
var element1 = [];


for(let i=0; i<10; i++){

   let ModeloRandom = Math.round(Math.random()*88);  
   
   console.log(ModeloRandom);
   var click1 = todos1[ModeloRandom];

   every1[i].innerHTML = click1;

   every1[i].addEventListener("click", ()=>{
   	if(every1[i]){
      every1[i].classList.add("orange1");
   	}
   });

    every1[i].addEventListener("dblclick", ()=>{
    if(every1[i]){
      every1[i].classList.remove("orange1");
    }
   });


   contador1.push(ModeloRandom);
   element1.push(every1[i]);

}

function activar1(){
	for(let i=0; i<10; i++){
        if(contador1[i]<55){
        	element1[i].classList.add("rights");
        	element1[i].classList.remove("orange1");
        }else{
        	element1[i].classList.add("error");
        	element1[i].classList.remove("orange1");
        }
		console.log("En la funcion "+element1[i]+" # "+contador1[i]);
	}
}

var every2 = document.querySelectorAll(".click2");
var review2 = document.querySelector(".review2");

var adjetivos = ["Red", "Confortable", "Easy", "Big", "Small", "Beaufitul", "Ugly", "Expensive", "Cheap", "Rich", "Blue", "Narrow", "Wide", "Far", "Near", "Close", "Open", "Fast",
"Tall", "White", "Poor", "Bad", "Upset", "Angry", "Thirsty", "Tired", "Hungry", "Good", "Lovely", "Hard", "Tough", "Crazy", "Dark", "Clear", "Dirty", "Wet", "Sick", "Delicious",
"Sweet", "Bitter", "Amazing", "Charming", "Interesting", "Important", "Quiet", "Strong", "Weak", "Nervous", "Jealous", "Famous", "Healthy", "Weird", "Unknown", "Known", "Delayed",
"Upbeat", "Ignorant", "Sociable", "Sincere", "Mechanical", "Physical", "Anxious", "Excited", "Disappointed", "Uncomfortable", "Pleasurable", "Colorful", "Blind", "Deaf", "Disabled"];

var soloPalabras2 = ["He", "Pitter", "Soap", "Country", "Music", "Heaven", "Heart", "Cloud", "English", "Boy", "Man", "Group", "Towel", "She", "It", "Hat", "T-Shirt", "Sister", "Mother",
"Husband", "Woman", "I", "You", "Church", "House", "Animal", "Food", "Family", "Love", "Hatred", "Happiness", "Illness", "Cousin", "Uncle", "Grandpa", "Wall", "Science", "Loan",
"Receipt", "Payment", "Purchase", "Item", "Bill", "Address", "E-mail", "System", "Issue", "Song", "Customer", "Partner", "Refund", "Replacement", "Arrangement", "Statement", "Order",
"About", "After", "Along", "With", "As", "At", "Bellow", "Beyond", "Despite", "Except", "In","To", "Into"];

var todos2 = [] = adjetivos.concat(soloPalabras2); //69 adjetivos sin contar el 0, 67 solo palabras sin contar el 0, total 137 sin contar el 0


var click2 = [];
var contador2 = [];
var element2 = [];

for(let i=0; i<10; i++){

   let ModeloRandom = Math.round(Math.random()*137);  
   
   console.log(ModeloRandom);
   var click2 = todos2[ModeloRandom];

   every2[i].innerHTML = click2;

   every2[i].addEventListener("click", ()=>{

      every2[i].classList.add("orange1");
   	
   });

    every2[i].addEventListener("dblclick", ()=>{
    if(every2[i]){
      every2[i].classList.remove("orange1");
    }
   });



   contador2.push(ModeloRandom);
   element2.push(every2[i]);

}

function activar2(){
	for(let i=0; i<10; i++){
        if(contador2[i]<70){
        	element2[i].classList.add("rights");
        	element2[i].classList.remove("orange1");
        }else{
        	element2[i].classList.add("error");
        	element2[i].classList.remove("orange1");
        }
	}
}


var every3 = document.querySelectorAll(".click3");
var review3 = document.querySelector(".review3");

var verbos = ["Run", "Walk", "Hear", "Listen", "Work", "Buy", "Replace", "Charge", "Pay", "Check", "Study", "Think", "Apply", "Bark", "Swim", "Begin", "Start", "Understand", "Go", "Be",
"Recognize", "Fly", "Assist", "Do", "Forget", "Get", "Find", "Wait", "Hold", "Expect", "Call", "Leave", "Hang", "End", "Participate", "Cook", "Cry", "Sing", "Speak", "Learn", "Travel", 
"Drive", "Jump", "Read", "Write", "Type", "Save", "Open", "Close", "Want", "Like", "Forgive", "Greet", "Clean", "Sit", "Cut", "Disconnect", "Set", "Update", "Nofity", "Let", "Know", "Thank",
"Fall", "Break", "Damage", "Rip", "Use", "Contact", "Recommend", "Proceed", "Merge", "Continue", "Follow", "Stay", "Take", "Grab", "Eat", "Drink", "Improve", "Achieve", "Punish", "Report",
"Fix", "Confirm", "Give", "Lend", "Borrow", "Sleep", "Wake", "Plan", "Hack", "Rob", "Steal", "Return", "Send", "Ship", "Arrange", "Consider", "Arrive", "Deliver", "Come", "Make",
"Transfer", "Tell", "Say", "Mention", "Clarify", "Pull", "Pick", "Choose", "Have", "Rain", "Need", "Search", "Look", "Watch", "Burn", "Touch", "Beat", "Hit", "Connect", "Train", "Fight",
"Win", "Comment", "Argue", "Override", "Accredit", "Count", "Add", "Calculate", "Scam", "Monitor", "Suggest", "Cancel", "Suspend", "Activate", "Preach", "Die", "Lie", "Smile", "Laugh",
"Play", "Pretend", "Hesitate", "Harvest", "Postpone", "Meet", "Ruin", "Mean", "Show", "Prove", "Provide", "Pass", "Sell", "Dance", "Mind", "Worry", "Remove", "Classify", "Pray",
"Destroy", "Transport", "Carry", "Bring", "Finish"];

var soloPalabras3 =["He", "Pitter", "Soap", "Country", "Music", "Heaven", "Heart", "Cloud", "English", "Boy", "Man", "Group", "Towel", "She", "It", "Hat", "T-Shirt", "Sister", "Mother",
"Husband", "Woman", "I", "You", "Church", "House", "Animal", "Food", "Family", "Hatred", "Happiness", "Illness", "Cousin", "Uncle", "Grandpa", "Wall", "Science", "Loan",
"Receipt", "Payment", "Purchase", "Item", "Meal", "E-mail", "System", "Issue", "Song", "Customer", "Partner", "Refund", "Replacement", "Arrangement", "Statement", "Order",
"Red", "Confortable", "Easy", "Big", "Small", "Beaufitul", "Ugly", "Expensive", "Cheap", "Rich", "Blue", "Narrow", "Wide", "Far", "Near", "Close", "Fast",
"Tall", "White", "Poor", "Bad", "Upset", "Angry", "Thirsty", "Tired", "Hungry", "Good", "Lovely", "Hard", "Tough", "Crazy", "Dark", "Clear", "Dirty", "Wet", "Sick", "Delicious",
"Sweet", "Bitter", "Amazing", "Charming", "Interesting", "Important", "Quiet", "Strong", "Weak", "Nervous", "Jealous", "Famous", "Healthy", "Weird", "Unknown", "Known", "Delayed",
"Upbeat", "Ignorant", "Sociable", "Sincere", "Mechanical", "Physical", "Anxious", "Excited", "Disappointed", "Uncomfortable", "Pleasurable", "Colorful", "Blind", "Deaf", "Disabled"];

var todos3 = [] = verbos.concat(soloPalabras3); //165 verbos sin contar el 0, y 123 soloPalabras3 sin contar el 0, y todos3 289 sin contar el 0


var click3 = [];
var contador3 = [];
var element3 = [];

for(let i=0; i<10; i++){

   let ModeloRandom = Math.round(Math.random()*288);  
   
   var click3 = todos3[ModeloRandom];

   every3[i].innerHTML = click3;

   every3[i].addEventListener("click", ()=>{
   	if(every3[i]){
      every3[i].classList.add("orange1");
   	}
   });

    every3[i].addEventListener("dblclick", ()=>{
    if(every3[i]){
      every3[i].classList.remove("orange1");
    }
   });


   contador3.push(ModeloRandom);
   element3.push(every3[i]);

}

function activar3(){
	for(let i=0; i<10; i++){
        if(contador3[i]<167){
        	element3[i].classList.add("rights");
        	element3[i].classList.remove("orange1");
        }else{
        	element3[i].classList.add("error");
        	element3[i].classList.remove("orange1");
        }
	}
}

function load(){
	location.reload();
}

//Ahorita sigue los adjetivos los tengo que poner todos, y si pues les cuesta para eso esta el PDF.