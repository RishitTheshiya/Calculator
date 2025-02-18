const quizData=[
    {
        question: "Which tag is used to define a paragraph?",
        options: ["<p>", "<div>", "<span>", "<a>"],
        correct:0,
    },
    {
        question:"Which property controls the color of text?",
        options: ["color", "background-color", "font-size", "text-align"],
        correct:0,
    },
    {
        question:"What does the <img> tag's src attribute specify?",
        options:["The image's height","The image's width","The image's alternative text","The image's source (URL)"],
        correct:3,
    },
    {
        question: "Which tag is used to define a heading?",
        options: ["<p>", "<h1>", "<a>", "<br>"],
        correct:1,
    },
    {
        question: "Which property controls the font size of text?",
        options: ["color", "background-color", "font-size", "text-align"],
        correct:2,
    }
];
const quiz=document.querySelector('.quiz');
const answerele=document.querySelectorAll(".answer");
const[questionele,option_1,option_2,option_3,option_4]=
document.querySelectorAll(".question,#option1,#option2,#option3,#option4");
const submitbtn=document.querySelector("#submit");
let currentQuestion=0;
let score=0;
const loadquiz=()=>{
    const{question,options}=quizData[currentQuestion];
    console.log(question);
    questionele.innerText=question;
    options.forEach(
        (curop,index)=>(window[`option_${index+1}`].innerText=curop));
};
loadquiz();
const getSelectedOption=() =>{
let answerElement = Array.from(answerele);
    return answerElement.findIndex((curElem) => curElem.checked);
}

const deselectAnswers=()=>{
    return answerele.forEach((curElem)=>curElem.checked=false);
};
submitbtn.addEventListener("click", () => {
    const selectedOptionIndex = getSelectedOption();
    console.log(selectedOptionIndex);

    if (selectedOptionIndex === quizData[currentQuestion].correct) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        deselectAnswers();
        loadquiz();
    } else {
        quiz.innerHTML = `
            <div class="result">
                <h2>Your Score: ${score}/${quizData.length} Correct Answers</h2>
                <p>Congratulations on completing the quiz!</p>
                <button class="reload-button" onclick="location.reload()">Play Again</button>
            </div>
        `;
    }
});