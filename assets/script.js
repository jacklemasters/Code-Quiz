// Questions variable
var questions = [{
    question: "What does HTML stand for?",
    answer1: "Hyper Tag Markup Language",
    answer2: "Hyper Text Markup Language",
    answer3: "Hyperlinks Text Mark Language",
    answer4: "Hyperlinking Text Marking Language",
    correct: "Hyper Text Markup Language"
    },{
    question: "What does CSS Stand for?",
    answer1: "Computing Style Sheet",
    answer2: "Creative Style System",
    answer3: "Cascading Style Sheet",
    answer4: "Creative Styling Sheet",
    correct: "Cascading Style Sheet"
    },{
    question: "Where should a CSS file be referenced in a HTML file?",
    answer1: "Before any HTML Code",
    answer2: "After all HTML Code",
    answer3: "Inside of the head section",
    answer4: "Inside of the body section",
    correct: "Inside of the head section"
    },{
    question: "What is the correct format for aligning written content to the center of the page in CSS?",
    answer1: "Text-align:center;",
    answer2: "Font-align:center;",
    answer3: "Text:align-center;",
    answer4: "Font:align-center;",
    correct: "Text-align:center;"
    },{
    question: "Arrays in Javascript can be used to store ____.",
    answer1: "numbers and strings",
    answer2: "other arrays",
    answer3: "booleans",
    answer4: "all of the above",
    correct: "all of the above"
    }];

  // Timer
    var time = document.getElementById("timer");
    var yourScore = document.querySelector(".display-3");
    var submitButton = document.getElementById("buttonInitials");
    var inputLine = document.getElementById("inlineFormInput");

    var secondsLeft = 50;
    function setTime() {
        var timerInterval = setInterval(function() {
        secondsLeft--;
        console.log(secondsLeft);
            time.textContent = "Time: " + secondsLeft;
        
            if(secondsLeft === 0) {
            clearInterval(timerInterval);
            cardQuestions.setAttribute("style", "display: none");
            displayJumbo.setAttribute("style", "display: block");
            yourScore.textContent = "Your score is: " + secondsLeft;
            startButton.setAttribute("style", "display: none");
            submitButton.setAttribute("style", "display: inline");
            inputLine.setAttribute("style", "display: inline-block");
        
            } else if (runningQuestion === 5) {
                clearInterval(timerInterval);
                console.log(secondsLeft);
                cardQuestions.setAttribute("style", "display: none");
                displayJumbo.setAttribute("style", "display: block");
                yourScore.textContent = "Your score is: " + secondsLeft;
                startButton.setAttribute("style", "display: none");
                submitButton.setAttribute("style", "display: inline");
                inputLine.setAttribute("style", "display: inline-block");

            }
            
        }, 1000);
    }
    

  // Start Button
    var startButton = document.getElementById("startQuiz");
    var cardQuestions = document.getElementById("questionsCard");
    var displayJumbo = document.querySelector(".jumbotron");

    startButton.addEventListener("click", startGame);

    function startGame() {
        setTime();
        firstQuestion();
        console.log("game on");
        cardQuestions.setAttribute("style", "display: block");
        displayJumbo.setAttribute("style", "display: none");

}


  //Questions
    var answer1 = document.getElementById("button1");
    var answer2 = document.getElementById("button2");
    var answer3 = document.getElementById("button3");
    var answer4 = document.getElementById("button4");
    var question = document.getElementById("questions");
    var correctAnswer = document.getElementById("correctIncorrect");
    var incorrectAnswer = document.getElementById("correctIncorrect");

    var runningQuestion = 0;

    function firstQuestion() {
    var quest = questions[runningQuestion];
    question.textContent = quest.question;
    answer1.textContent = quest.answer1;
    answer2.textContent = quest.answer2;
    answer3.textContent = quest.answer3;
    answer4.textContent = quest.answer4;
    }
    var quizBtn = document.querySelectorAll(".quizBtn");

  // Event listener for buttons 
    for (var i = 0; i < quizBtn.length; i++) {
    quizBtn[i].addEventListener("click", function userAnswer(event) {
        event.stopPropagation();
        if (event.currentTarget.innerText === questions[runningQuestion].correct){
        correctAnswer.textContent = "Correct + 5 sec";
        correctAnswer.setAttribute("style", "color: yellow");
        secondsLeft = secondsLeft + 5;
        console.log("correct");
    } else {
        incorrectAnswer.textContent = "Incorrect - 5 sec";
        incorrectAnswer.setAttribute("style", "color: red");
        secondsLeft = secondsLeft - 5;
        console.log("Incorrect minus 5 seconds");
    }
    console.log(runningQuestion);
    runningQuestion++;


    if (runningQuestion < 5) {
        firstQuestion();
    }
    });
    }

  // High Scores 

    var highscores = JSON.parse(localStorage.getItem("highscores")) || [];

    submitButton.addEventListener("click", function(event){
    event.stopPropagation();
    console.log("click");
    
    var initials = inputLine.value;
    var finalScore = {initials, secondsLeft};
    console.log("Final Score: " + finalScore);
    console.log(initials + " your score is: " + secondsLeft); 




    // Send to localStorage

    highscores.push(finalScore);
    localStorage.setItem("highscores", JSON.stringify(highscores));

    });