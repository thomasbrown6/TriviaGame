
// *************VARIALBES************* //

// Questions in array
var questions = {
	question1: "Who is considered the best basketball player in the game today?",
	question2: "Who averaged 21 points as a rookie and led the Denver Nuggets in the playoffs?",
	question3: "Who led the team that won the most championships in the 90s?",
	question4: "Who has the record for most 3 pointers in a game?",
	question5: "Which NBA player holds the record for the most championships won?",
	question6: "Which team holds the best regular season record of all time?",
	question7: "Which player ultimately loss the game for the Cleveland Caviliers game 1 of the 2018 NBA finals?"
}

// Answers in array
var questionAnswer = {
	answer1: ["Michael Jordan", "LeBron James", "Kevin Durant", "Steph Curry"],
	answer2: ["LeBron James", "Allen Iverson", "Carmelo Anthony", "JR Smith"],
	answer3: ["Magic Johnson", "Isaiah Thomas", "Patrick Ewing", "Michael Jordan"],
	answer4: ["Reggie Miller", "Ray Allen", "Steph Curry", "Kobe Bryant"],
	answer5: ["Michael Jordan", "Shaquielle O'neal", "Magic Johnson", "Bill Russell"],
	answer6: ["Golden State Warriors", "Chicago Bulls", "Boston Celtics", "Los Angeles Lakers"],
	answer7: ["Kevin Love", "JR Smith", "Tristan Thompson", "Lebron James"]
}

// ****GIFS**** //
var correctAnswer1 = '<iframe src="https://giphy.com/embed/e5RONJDZLaIRR5itrT" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/nba-celebration-e5RONJDZLaIRR5itrT"></a></p>';
var correctAnswer2 = '<iframe src="https://giphy.com/embed/ZIjrfN8VaF0pW" width="480" height="278" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/basketball-nba-ZIjrfN8VaF0pW"></a></p>';
var correctAnswer3 = '<iframe src="https://giphy.com/embed/l3q2JCu9lep6dAmyY" width="480" height="351" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/nba-shrug-mj-l3q2JCu9lep6dAmyY"></a></p>';
var correctAnswer4 = '<iframe src="https://giphy.com/embed/3oEdv5e5Zd2gsczAhG" width="480" height="262" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/nba-basketball-steph-curry-the-finals-3oEdv5e5Zd2gsczAhG"></a></p>';
var correctAnswer5 = '<iframe src="https://giphy.com/embed/7Xp6HQqCQAv8tpeU9h" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/nba-allstar-bill-russell-7Xp6HQqCQAv8tpeU9h"></a></p>';
var correctAnswer6 = '<iframe src="https://giphy.com/embed/xUA7b71qSL8niEMWU8" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/nba-dance-dancing-xUA7b71qSL8niEMWU8"></a></p>';
var correctAnswer7 = '<iframe src="https://giphy.com/embed/fs62ZydKjn6lbJ0pAU" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/basketball-angry-upset-fs62ZydKjn6lbJ0pAU"></a></p>';

// ****Timer**** //
var number = 8;
var intervalid;

// ****Wins/Loss**** //
var wins;
var losses;

// ****Question Tracker**** //
var youAreOnQuestion1;
var youAreOnQuestion2;
var youAreOnQuestion3;
var youAreOnQuestion4;
var youAreOnQuestion5;
var youAreOnQuestion6;
var youAreOnQuestion7;


// Variable for the game
var getItGoing;

// Use jQuery to run "startGame" when we click the "start" button.
$("#start").click(startGame);
$("#reset").click(resetGame);


function startGame() {
	clearInterval(intervalid);
	wins = 0;
	losses = 0;
	$(".answer-holder").empty();

	// Use nextQuestion to hold the questions
	getItGoing = question1();
}


function resetGame() {
	clearInterval(intervalid);
	wins = 0;
	losses = 0;
	$(".answer-holder").empty();
	$("#correct-answer").empty();
	$("#gif-holder").empty();
	$("question-holder").empty();
	$("timer").empty();

	// Use nextQuestion to hold the questions
	getItGoing = question1();
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
	
}



// Game Timer
function runTimer() {
	clearInterval(intervalid);
	intervalid = setInterval(decrement, 1000);
}



// function that tells the program what to do when user runs out of time.
function outOfTime() {

	
	if (youAreOnQuestion1 === true) {
		$("#question-holder").empty();
		$("#timer").empty();
		$("#correct-answer").html("<p>The correct answer was: LeBron James</p>");
		$("#gif-holder").html(correctAnswer1);
		$(".answer-holder").empty();
		setTimeout(question2, 6000);
		losses++;
	}
	else if (youAreOnQuestion2 === true) {
		$("#question-holder").empty();
		$("#timer").empty();
		$("#correct-answer").html("<p>The correct answer was: Carmelo Anthony</p>");
		$("#gif-holder").html(correctAnswer2);
		$(".answer-holder").empty();
		setTimeout(question3, 6000);
		losses++;
	}
	else if (youAreOnQuestion3 === true) {
		$("#question-holder").empty();
		$("#timer").empty();
		$("#correct-answer").html("<p>The correct answer was: Michael jordan</p>");
		$("#gif-holder").html(correctAnswer3);
		$(".answer-holder").empty();
		setTimeout(question4, 6000);
		losses++;
	}
	else if (youAreOnQuestion4 === true) {
		$("#question-holder").empty();
		$("#timer").empty();
		$("#correct-answer").html("<p>The correct answer was: Steph Curry</p>");
		$("#gif-holder").html(correctAnswer4);
		$(".answer-holder").empty();
		setTimeout(question5, 8000);
		losses++;
	}
	else if (youAreOnQuestion5 === true) {
		$("#question-holder").empty();
		$("#timer").empty();
		$("#correct-answer").html("<p>The correct answer was: Bill Russell, he has 11</p>");
		$("#gif-holder").html(correctAnswer5);
		$(".answer-holder").empty();
		setTimeout(question6, 6000);
		losses++;
	}
	else if (youAreOnQuestion6 === true) {
		$("#question-holder").empty();
		$("#timer").empty();
		$("#correct-answer").html("<p>The correct answer was: Golden State Warriors</p>");
		$("#gif-holder").html(correctAnswer6);
		$(".answer-holder").empty();
		setTimeout(question7, 6000);
		losses++;
	}
	else if (youAreOnQuestion7 === true) {
		$("#question-holder").empty();
		$("#timer").empty();
		$("#correct-answer").html("<p>The correct answer was: JR Smith... smh</p>");
		$("#gif-holder").html(correctAnswer7);
		$(".answer-holder").empty();
		losses++;
		setTimeout(endGame, 6000);
		
	}

}


// Click function, runs 'gotItRight' method when a user clicks a correct answer
function gotItRight() {

	if (youAreOnQuestion1 === true) {
		$("#question-holder").empty();
		$("#timer").empty();
		$("#correct-answer").html("<p>King James, you got it right!</p>");
		$("#gif-holder").html(correctAnswer1);
		$(".answer-holder").empty();
		setTimeout(question2, 6000);

	}
	else if (youAreOnQuestion2 === true) {
		$("#question-holder").empty();
		$("#timer").empty();
		$("#correct-answer").html("<p>You got it right! The answer was Carmelo Anthony</p>");
		$("#gif-holder").html(correctAnswer2);
		$(".answer-holder").empty();
		setTimeout(question3, 6000);
		
	}
	else if (youAreOnQuestion3 === true) {
		$("#question-holder").empty();
		$("#timer").empty();
		$("#correct-answer").html("<p>That's correct! Michael Jordan led the Chicago Bulls in the 90s</p>");
		$("#gif-holder").html(correctAnswer3);
		$(".answer-holder").empty();
		setTimeout(question4, 6000);
	}
	else if (youAreOnQuestion4 === true) {
		$("#question-holder").empty();
		$("#timer").empty();
		$("#correct-answer").html("<p>That's correct! Chef Curry has the most 3's in a game!</p>");
		$("#gif-holder").html(correctAnswer4);
		$(".answer-holder").empty();
		setTimeout(question5, 8000);
	}
	else if (youAreOnQuestion5 === true) {
		$("#question-holder").empty();
		$("#timer").empty();
		$("#correct-answer").html("<p>That's correct! Bill Russell has the most Championships with 11</p>");
		$("#gif-holder").html(correctAnswer5);
		$(".answer-holder").empty();
		setTimeout(question6, 6000);
	}
	else if (youAreOnQuestion6 === true) {
		$("#question-holder").empty();
		$("#timer").empty();
		$("#correct-answer").html("<p>That's correct! The Golden State Warriors has the best regular season record!</p>");
		$("#gif-holder").html(correctAnswer6);
		$(".answer-holder").empty();
		setTimeout(question7, 6000);
	}
	else if (youAreOnQuestion7 === true) {
		$("#question-holder").empty();
		$("#timer").empty();
		$("#correct-answer").html("<p>Yep you right, sorry JR Smith cost the Cavs game 1 in the NBA finals</p>");
		$("#gif-holder").html(correctAnswer7);
		$(".answer-holder").empty();
		setTimeout(endGame, 6000);
	}

}

// Click function, runs 'gotItWrong' method when a user clicks a wrong answer
function gotItWrong() {

	if (youAreOnQuestion1 === true) {
		$("#question-holder").empty();
		$("#timer").empty();
		$("#correct-answer").html("<p>Wrong! The correct answer was: LeBron James</p>");
		$("#gif-holder").html(correctAnswer1);
		$(".answer-holder").empty();
		setTimeout(question2, 6000);
	}
	else if (youAreOnQuestion2 === true) {
		$("#question-holder").empty();
		$("#timer").empty();
		$("#correct-answer").html("<p>Wrong! The correct answer was: Carmelo Anthony</p>");
		$("#gif-holder").html(correctAnswer2);
		$(".answer-holder").empty();
		setTimeout(question3, 6000);
		
	}
	else if (youAreOnQuestion3 === true) {
		$("#question-holder").empty();
		$("#timer").empty();
		$("#correct-answer").html("<p>Wrong! The correct answer was: Michael jordan</p>");
		$("#gif-holder").html(correctAnswer3);
		$(".answer-holder").empty();
		setTimeout(question4, 6000);
	}
	else if (youAreOnQuestion4 === true) {
		$("#question-holder").empty();
		$("#timer").empty();
		$("#correct-answer").html("<p>Wrong! The correct answer was: Steph Curry</p>");
		$("#gif-holder").html(correctAnswer4);
		$(".answer-holder").empty();
		setTimeout(question5, 8000);
	}
	else if (youAreOnQuestion5 === true) {
		$("#question-holder").empty();
		$("#timer").empty();
		$("#correct-answer").html("<p>Wrong! The correct answer was: Bill Russell, he has 11</p>");
		$("#gif-holder").html(correctAnswer5);
		$(".answer-holder").empty();
		setTimeout(question6, 6000);
	}
	else if (youAreOnQuestion6 === true) {
		$("#question-holder").empty();
		$("#timer").empty();
		$("#correct-answer").html("<p>Wrong! The correct answer was: Golden State Warriors</p>");
		$("#gif-holder").html(correctAnswer6);
		$(".answer-holder").empty();
		setTimeout(question7, 6000);
	}
	else if (youAreOnQuestion7 === true) {
		$("#question-holder").empty();
		$("#timer").empty();
		$("#correct-answer").html("<p>Wrong! The correct answer was: JR Smith... smh</p>");
		$("#gif-holder").html(correctAnswer7);
		$(".answer-holder").empty();
		setTimeout(endGame, 6000);
	}
}




// Function for question 1
function question1() {

	youAreOnQuestion1 = true;
	youAreOnQuestion2 = false;
	youAreOnQuestion3 = false;
	youAreOnQuestion4 = false;
	youAreOnQuestion5 = false;
	youAreOnQuestion6 = false;
	youAreOnQuestion7 = false;

	number = 8;

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
	// Detects correct answer for first question
	$("#correct1").mouseup(function (event) {
		event.preventDefault();
		wins++;
		console.log(wins);
		clearInterval(intervalid);
		gotItRight();

	});

	// Detects if user clicks wrong answer
	$(".wrong").mouseup(function (event) {
		event.preventDefault();
		losses++;
		clearInterval(intervalid);
		gotItWrong();
	});
}

// Function for question 2
function question2() {

	youAreOnQuestion1 = false;
	youAreOnQuestion2 = true;
	youAreOnQuestion3 = false;
	youAreOnQuestion4 = false;
	youAreOnQuestion5 = false;
	youAreOnQuestion6 = false;
	youAreOnQuestion7 = false;

	number = 8;

	$(".answer-holder").empty();
	$("#correct-answer").empty();
	$("#gif-holder").empty();

	// Timer for the question
	runTimer();

	// Show the questions in the "question-holder" div.
	$("#question-holder").html("<h2>" + questions.question2 + "</h2>");

	for (var i = 0; i < questionAnswer.answer2.length; i++) {
		// Gives the correct answer and id called 'correct' 
		if (i === 2) {
			$(".answer-holder").append("<button id='correct2'>" + questionAnswer.answer2[i] + "</button>");
		}
		else {
			// Added the button to the HTML
			$(".answer-holder").append("<button class='wrong'>" + questionAnswer.answer2[i] + "</button>");
		}
	}
	// Detects correct answer for first question
	$("#correct2").mouseup(function (event) {
		event.preventDefault();
		wins++;
		console.log(wins);
		clearInterval(intervalid);
		gotItRight();

	});

	// Detects if user clicks wrong answer
	$(".wrong").mouseup(function (event) {
		event.preventDefault();
		losses++;
		clearInterval(intervalid);
		gotItWrong();
	});
}



// Function for question 3
function question3() {

	youAreOnQuestion1 = false;
	youAreOnQuestion2 = false;
	youAreOnQuestion3 = true;
	youAreOnQuestion4 = false;
	youAreOnQuestion5 = false;
	youAreOnQuestion6 = false;
	youAreOnQuestion7 = false;

	number = 8;

	$(".answer-holder").empty();
	$("#correct-answer").empty();
	$("#gif-holder").empty();

	// Timer for the question
	runTimer();

	// Show the questions in the "question-holder" div.
	$("#question-holder").html("<h2>" + questions.question3 + "</h2>");

	for (var i = 0; i < questionAnswer.answer3.length; i++) {
		// Gives the correct answer and id called 'correct' 
		if (i === 3) {
			$(".answer-holder").append("<button id='correct3'>" + questionAnswer.answer3[i] + "</button>");
		}
		else {
			// Added the button to the HTML
			$(".answer-holder").append("<button class='wrong'>" + questionAnswer.answer3[i] + "</button>");
		}
	}
	// Detects correct answer for first question
	$("#correct3").mouseup(function (event) {
		event.preventDefault();
		wins++;
		console.log(wins);
		clearInterval(intervalid);
		gotItRight();

	});

	// Detects if user clicks wrong answer
	$(".wrong").mouseup(function (event) {
		event.preventDefault();
		losses++;
		clearInterval(intervalid);
		gotItWrong();
	});
}

// Function for question 4
function question4() {

	youAreOnQuestion1 = false;
	youAreOnQuestion2 = false;
	youAreOnQuestion3 = false;
	youAreOnQuestion4 = true;
	youAreOnQuestion5 = false;
	youAreOnQuestion6 = false;
	youAreOnQuestion7 = false;

	number = 8;

	$(".answer-holder").empty();
	$("#correct-answer").empty();
	$("#gif-holder").empty();

	// Timer for the question
	runTimer();

	// Show the questions in the "question-holder" div.
	$("#question-holder").html("<h2>" + questions.question4 + "</h2>");

	for (var i = 0; i < questionAnswer.answer4.length; i++) {
		// Gives the correct answer and id called 'correct' 
		if (i === 2) {
			$(".answer-holder").append("<button id='correct4'>" + questionAnswer.answer4[i] + "</button>");
		}
		else {
			// Added the button to the HTML
			$(".answer-holder").append("<button class='wrong'>" + questionAnswer.answer4[i] + "</button>");

		}
	}
	// Detects correct answer for first question
	$("#correct4").mouseup(function (event) {
		event.preventDefault();
		wins++;
		console.log(wins);
		clearInterval(intervalid);
		gotItRight();

	});

	// Detects if user clicks wrong answer
	$(".wrong").mouseup(function (event) {
		event.preventDefault();
		losses++;
		clearInterval(intervalid);
		gotItWrong();
	});
}


// Function for question 5
function question5() {

	youAreOnQuestion1 = false;
	youAreOnQuestion2 = false;
	youAreOnQuestion3 = false;
	youAreOnQuestion4 = false;
	youAreOnQuestion5 = true;
	youAreOnQuestion6 = false;
	youAreOnQuestion7 = false;

	number = 8;

	$(".answer-holder").empty();
	$("#correct-answer").empty();
	$("#gif-holder").empty();

	// Timer for the question
	runTimer();

	// Show the questions in the "question-holder" div.
	$("#question-holder").html("<h2>" + questions.question5 + "</h2>");

	for (var i = 0; i < questionAnswer.answer5.length; i++) {
		// Gives the correct answer and id called 'correct' 
		if (i === 3) {
			$(".answer-holder").append("<button id='correct5'>" + questionAnswer.answer5[i] + "</button>");
		}
		else {
			// Added the button to the HTML
			$(".answer-holder").append("<button class='wrong'>" + questionAnswer.answer5[i] + "</button>");

		}
	}
	// Detects correct answer for first question
	$("#correct5").mouseup(function (event) {
		event.preventDefault();
		wins++;
		console.log(wins);
		clearInterval(intervalid);
		gotItRight();

	});

	// Detects if user clicks wrong answer
	$(".wrong").mouseup(function (event) {
		event.preventDefault();
		losses++;
		clearInterval(intervalid);
		gotItWrong();
	});
}


// Function for question 6
function question6() {

	youAreOnQuestion1 = false;
	youAreOnQuestion2 = false;
	youAreOnQuestion3 = false;
	youAreOnQuestion4 = false;
	youAreOnQuestion5 = false;
	youAreOnQuestion6 = true;
	youAreOnQuestion7 = false;

	number = 8;

	$(".answer-holder").empty();
	$("#correct-answer").empty();
	$("#gif-holder").empty();

	// Timer for the question
	runTimer();

	// Show the questions in the "question-holder" div.
	$("#question-holder").html("<h2>" + questions.question6 + "</h2>");

	for (var i = 0; i < questionAnswer.answer6.length; i++) {
		// Gives the correct answer and id called 'correct' 
		if (i === 0) {
			$(".answer-holder").append("<button id='correct6'>" + questionAnswer.answer6[i] + "</button>");
		}
		else {
			// Added the button to the HTML
			$(".answer-holder").append("<button class='wrong'>" + questionAnswer.answer6[i] + "</button>");

		}
	}
	// Detects correct answer for first question
	$("#correct6").mouseup(function (event) {
		event.preventDefault();
		wins++;
		console.log(wins);
		clearInterval(intervalid);
		gotItRight();

	});

	// Detects if user clicks wrong answer
	$(".wrong").mouseup(function (event) {
		event.preventDefault();
		losses++;
		clearInterval(intervalid);
		gotItWrong();
	});
}


// Function for question 7
function question7() {

	youAreOnQuestion1 = false;
	youAreOnQuestion2 = false;
	youAreOnQuestion3 = false;
	youAreOnQuestion4 = false;
	youAreOnQuestion5 = false;
	youAreOnQuestion6 = false;
	youAreOnQuestion7 = true;

	number = 8;

	$(".answer-holder").empty();
	$("#correct-answer").empty();
	$("#gif-holder").empty();

	// Timer for the question
	runTimer();

	// Show the questions in the "question-holder" div.
	$("#question-holder").html("<h2>" + questions.question7 + "</h2>");

	for (var i = 0; i < questionAnswer.answer7.length; i++) {
		// Gives the correct answer and id called 'correct' 
		if (i === 1) {
			$(".answer-holder").append("<button id='correct7'>" + questionAnswer.answer7[i] + "</button>");
		}
		else {
			// Added the button to the HTML
			$(".answer-holder").append("<button class='wrong'>" + questionAnswer.answer7[i] + "</button>");

		}
	}
	// Detects correct answer for first question
	$("#correct7").mouseup(function (event) {
		event.preventDefault();
		wins++;
		console.log(wins);
		clearInterval(intervalid);
		gotItRight();

	});

	// Detects if user clicks wrong answer
	$(".wrong").mouseup(function (event) {
		event.preventDefault();
		losses++;
		clearInterval(intervalid);
		gotItWrong();
	});
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