const quizData = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text MarkUp Language", "High Tech Modern Language", "Hyperlink Text Machine Language"],
        correctAnswer: "Hyper Text MarkUp Language"
    },
    {
        question: "What is CSS used for?",
        options: ["Styling web pages", "Handling logic", "Managing databases"],
        correctAnswer: "Styling web pages"
    },
    {
        question: "JavaScript is a ___ language.",
        options: ["Programming", "Markup", "Styling"],
        correctAnswer: "Programming"
    },
    {
        question: "Which HTML tag is used to create a hyperlink?",
        options: ["<a>", "<link>", "<href>"],
        correctAnswer: "<a>"
    },
    {
        question: "Which of these is a JavaScript data type?",
        options: ["String", "Class", "Tag"],
        correctAnswer: "String"
    }
]

const questionE1 = document.getElementById("question");
const optionsE1 = document.getElementById("options");
const scoreE1 = document.getElementById("score-display");

let currentQuestionIndex = 0;
let score = 0; // score value change when score increase karega 

function loadQuestion() {
    const currentQuiz = quizData[currentQuestionIndex]; // array se current index ka object nikala (jaise quizData[0])
    questionE1.textContent = currentQuiz.question;

    optionsE1.innerHTML = "";

    currentQuiz.options.forEach(function (option) {
        const btn = document.createElement("button"); // naya button bnaya jo abhi sirf memory me hai
        btn.textContent = option;  // button ke andar text daala
        btn.classList.add("option-btn");
        // button pe click event lagao
        btn.addEventListener("click", function () {
            checkAnswer(option, currentQuiz.correctAnswer, btn);
        });
        optionsE1.appendChild(btn); // button ko <div id="options"> ke andar daal diya
    });
}

// Click Par Answer Check Karna
function checkAnswer(selected, correct,btn) {
    if (selected === correct) {
        btn.classList.add("correct");
        score++;
        scoreE1.textContent = "Score: " + score;
    }
    else {
        btn.classList.add("wrong");
    }

    setTimeout(function () {
        currentQuestionIndex++;

        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
        }
        else {
            questionE1.textContent = "Quiz Khatam! Final Score: " + score + " / " + quizData.length;
            optionsE1.innerHTML = "";
        }
    }, 800);
}

// Sab functions ban gaye, par koi call nahi hua abhi tak — file load hote hi pehla question dikhna chahiye.
loadQuestion();

