// Define the quiz questions and answers
const questions = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language"],
        answer: 0
    },
    {
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets"],
        answer: 0
    },
    {
        question: "What does JS stand for?",
        options: ["JavaScript", "JavaSource", "JustScript"],
        answer: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;

// Function to load and display the current question
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").textContent = currentQuestion.question;
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(button);
    });
    document.getElementById("feedback").textContent = '';
    document.getElementById("next-btn").style.display = "none";
}

// Function to check the selected answer
function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const feedback = document.getElementById("feedback");
    if (selectedIndex === currentQuestion.answer) {
        feedback.textContent = "Correct!";
        feedback.style.color = "green";
        score++;
    } else {
        feedback.textContent = `Wrong! The correct answer is: ${currentQuestion.options[currentQuestion.answer]}`;
        feedback.style.color = "red";
    }
    document.getElementById("next-btn").style.display = "block";
}

// Function to proceed to the next question or end the quiz
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("quiz-container").innerHTML = `
            <h2>Quiz Completed!</h2>
            <p>Your score: ${score} out of ${questions.length}</p>
            <p>Thank you for participating.</p>
        `;
    }
}

// Initialize the quiz by loading the first question
loadQuestion();
