
//********VARIALBES*******/
// Put questions in a array
var questions = {
	question1: "Who is considered the best basketball player in the game today?",
	question2: "Who averaged 21 points as a rookie and led the Denver Nuggets in the playoffs?",
	question3: "Who led the team that won the most championships in the 90s?"
}


var questionAnswer = {
	answer1: ["Michael Jordan", "LeBron James", "Kevin Durant", "Steph Curry"],
	answer2: ["LeBron James", "Allen Iverson", "Carmelo Anthony", "JR Smith"],
	answer3: ["Magic Johnson", "Isaiah Thomas", "Patrick Ewing", "Michael Jordan"]
}

var correctAnswer1 = '<iframe src="https://giphy.com/embed/e5RONJDZLaIRR5itrT" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/nba-celebration-e5RONJDZLaIRR5itrT"></a></p>';


var correctAnswer2 = '<iframe src="https://giphy.com/embed/ZIjrfN8VaF0pW" width="480" height="278" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/basketball-nba-ZIjrfN8VaF0pW"></a></p>';


var correctAnswer3 = '<iframe src="https://giphy.com/embed/l3q2JCu9lep6dAmyY" width="480" height="351" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/nba-shrug-mj-l3q2JCu9lep6dAmyY"></a></p>';






var number = 7;
var intervalid;
var count = 0;

var wins = 0;
var losses = 0;
var youAreOnQuestionOne;
var youAreOnQuestionTwo;
var youAreOnQuestionThree;




// Variable for the game
var showQuestion;

// Use jQuery to run "startGame" when we click the "start" button.
$("#start").click(startGame);


function startGame() {
	// Use nextQuestion to hold the questions
	showQuestion = questionOne();
}





// Run Decrement() to set up timer
function decrement() {

	number--;

	$("#timer").html("<h2>Time Remaining: " + number + "</h2>");

	if (number === 0) {
		clearInterval(intervalid);
		$("#question-holder").html("<h2>Out of Time!</h2>");
		outOfTime();
	}

	// Detects correct answer for first question
	$("#correct1").on("click", function (event) {
		event.preventDefault();
		console.log("LBJ");
		clearInterval(intervalid);
		gotItRight();

	});

	// Detects correct answer for second question
	$("#correct2").on("click", function (event) {
		event.preventDefault();
		console.log("Melo");
		clearInterval(intervalid);
		gotItRight();
	
	});
	
	// Detects correct answer for third question
	$("#correct3").on("click", function (event) {
		event.preventDefault();
		console.log("MJ");
		clearInterval(intervalid);
		gotItRight();
	});

	$(".wrong").mouseup(function (event) {	
		event.preventDefault();
		clearInterval(intervalid);
		gotItWrong();
	});
	
}



// Game Timer
function runTimer() {
	clearInterval(intervalid);
	intervalid = setInterval(decrement, 1000);
}



// function that tells the program what to do when user runs out of time.
 function outOfTime() {

// 	count2++;

 	if (youAreOnQuestionOne === true) {
		losses++;
 		$("#correct-answer").html("<p>The correct answer was: LeBron James</p>");
 		$("#gif-holder").html(correctAnswer1);
 		$(".answer-holder").empty();
 		setTimeout(questionTwo, 6000);
 	}
 	else if (youAreOnQuestionTwo === true) {
		losses++;
 		$("#correct-answer").html("<p>The correct answer was: Carmelo Anthony</p>");
 		$("#gif-holder").html(correctAnswer2);
 		$(".answer-holder").empty();
 		setTimeout(questionThree, 6000);
 	}
 	else if (youAreOnQuestionThree === true) {
		losses++;
 		$("#correct-answer").html("<p>The correct answer was: Michael jordan</p>");
 		$("#gif-holder").html(correctAnswer3);
 		$(".answer-holder").empty();
 		setTimeout(endGame, 6000);
	}
	
 }


// Click function, runs 'gotItRight' method when a user clicks a correct answer
function gotItRight() {

	console.log("on the right track");


	if (youAreOnQuestionOne === true) {
		wins++;
		$("#correct-answer").html("<p>King James, you got it right!</p>");
		$("#gif-holder").html(correctAnswer1);
		$(".answer-holder").empty();
		setTimeout(questionTwo, 6000);

	}
	else if (youAreOnQuestionTwo === true) {
		wins++;
		$("#correct-answer").html("<p>You got it right! The answer was Carmelo Anthony</p>");
		$("#gif-holder").html(correctAnswer2);
		$(".answer-holder").empty();
		setTimeout(questionThree, 6000);
	}
	else if (youAreOnQuestionThree === true) {
		wins++;
		$("#correct-answer").html("<p>That's correct! Michael Jordan led the Chicago Bulls in the 90s</p>");
		$("#gif-holder").html(correctAnswer3);
		$(".answer-holder").empty();
		setTimeout(endGame, 6000);
	}
	else {

	}
}


function gotItWrong() {

	
	console.log(losses);

	if (youAreOnQuestionOne === true) {
		losses=1;
		$("#correct-answer").html("<p>Wrong! The correct answer was: LeBron James</p>");
		$("#gif-holder").html(correctAnswer1);
		$(".answer-holder").empty();
		setTimeout(questionTwo, 6000);
	}
	else if (youAreOnQuestionTwo === true) {
		losses++;
		$("#correct-answer").html("<p>Wrong! The correct answer was: Carmelo Anthony</p>");
		$("#gif-holder").html(correctAnswer2);
		$(".answer-holder").empty();
		setTimeout(questionThree, 6000);
	}
	else if (youAreOnQuestionThree === true) {
		losses++;
		$("#correct-answer").html("<p>Wrong! The correct answer was: Michael jordan</p>");
		$("#gif-holder").html(correctAnswer3);
		$(".answer-holder").empty();
		setTimeout(endGame, 6000);
   }
}





function questionOne() {

	youAreOnQuestionOne = true;
	youAreOnQuestionTwo = false;
	youAreOnQuestionThree = false;

	number = 10;

	$(".answer-holder").empty();
	$("#correct-answer").empty();
	$("#gif-holder").empty();

	// Timer for the question
	runTimer();

		// Show the questions in the "question-holder" div.
		$("#question-holder").html("<h2>" + questions.question1 + "</h2>");

		for (var i = 0; i < questionAnswer.answer1.length; i++) {
			// Gives the correct answer and id called 'correct' 
			if (i === 1) {
				$(".answer-holder").append("<button id='correct1'>" + questionAnswer.answer1[i] + "</button>");
			}
			else {
				// Added the button to the HTML
				$(".answer-holder").append("<button class='wrong'>" + questionAnswer.answer1[i] + "</button>");

			}
		}
	}

function questionTwo() {

	youAreOnQuestionOne = false;
	youAreOnQuestionTwo = true;
	youAreOnQuestionThree = false;

	number = 10;

	$(".answer-holder").empty();
	$("#correct-answer").empty();
	$("#gif-holder").empty();

	// Timer for the question
	runTimer();

		// Show the questions in the "question-holder" div.
		$("#question-holder").html("<h2>" + questions.question2 + "</h2>");

		for (var i = 0; i < questionAnswer.answer1.length; i++) {
			// Gives the correct answer and id called 'correct' 
			if (i === 2) {
				$(".answer-holder").append("<button id='correct2'>" + questionAnswer.answer2[i] + "</button>");
			}
			else {
				// Added the button to the HTML
				$(".answer-holder").append("<button class='wrong'>" + questionAnswer.answer2[i] + "</button>");
			}
		}
	}

	


function questionThree() {

	youAreOnQuestionOne = false;
	youAreOnQuestionTwo = false;
	youAreOnQuestionThree = true;
	number = 10;

	$(".answer-holder").empty();
	$("#correct-answer").empty();
	$("#gif-holder").empty();

	// Timer for the question
	runTimer();

		// Show the questions in the "question-holder" div.
		$("#question-holder").html("<h2>" + questions.question3 + "</h2>");

		for (var i = 0; i < questionAnswer.answer1.length; i++) {
			// Gives the correct answer and id called 'correct' 
			if (i === 3) {
				$(".answer-holder").append("<button id='correct3'>" + questionAnswer.answer3[i] + "</button>");
			}
			else {
				// Added the button to the HTML
				$(".answer-holder").append("<button class='wrong'>" + questionAnswer.answer3[i] + "</button>");
			}
		}
	}

// Function to end the game
function endGame() {
	clearInterval(intervalid);
	$(".answer-holder").empty();
	$("#correct-answer").empty();
	$("#gif-holder").empty();
	$("#timer").empty();
	$("#question-holder").empty();
	$("#question-holder").append("<h2>Game Over! ");
	$("#question-holder").append("<h2>Answered Right: " + wins);
	$("#question-holder").append("<h2>Answered Wrong: " + losses);
}