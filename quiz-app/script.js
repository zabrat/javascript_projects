const quizData = [
    {
        question: "How many letters in Russian alphabet?",
        a: "33",
        b: "31",
        c: "30",
        d: "32",
        correct: "a"
    }, {
        question: "Who invented the Russian alphabet?",
        a: "Minin and Pojarskiy",
        b: "Putin and Medvedev",
        c: "Kirill and Mifodiy",
        d: "Godunov and Shuyskiy",
        correct: "c"
    }, {
        question: "Who was the first Russian ruler?",
        a: "Petr the first",
        b: "Rurik",
        c: "Ivan Grozniy",
        d: "Svyatoslav",
        correct: "b"
    }
];

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const answerEl = document.getElementsByName("answer");
const quiz = document.getElementById("quiz");


function getSelected(){

    let answer = undefined;
    answerEl.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
};
let currentQuiz = 0;
let score = 0;
loadQuiz();

function deselsectAnswers(){

    answerEl.forEach((answerEl) => {
        answerEl.checked = false;
    });

}
function loadQuiz(){
    deselsectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    if (answer){
        if(answer == quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        }else{
            if (score == quizData.length){
                quiz.innerHTML = `<h2 id="win">Congratulations!`;
            }else{
                quiz.innerHTML = `<h2 id="lose">Try again! Your score is ${score} out of ${quizData.length}!<h2> <button onclick="location.reload()">Reload</button>`;
            }
        }
        
        
    }
});
