// framin question
const quizData = [
    {
        question: "Which language runs on browser ?",
        a: "Java",
        b: "Python",
        c: "Javascript",
        d: "c++",
        correct: "c"
    },
    {
        question: "HTML stands for?",
        a: "Html",
        b: "Python",
        c: "Javascript",
        d: "c++",
        correct: "a"
    },
    {
        question: "JS launch in the year?",
        a: "1994",
        b: "1995",
        c: "1996",
        d: "1997",
        correct: "b"
    },
    {
        question: "JS launch in the year?",
        a: "1994",
        b: "1995",
        c: "1996",
        d: "1997",
        correct: "b"
    }
]
    // assinging the variables
    const quiz = document.getElementById('quiz');
    const answerElements = document.querySelectorAll('.answer');
    const questionElement = document.getElementById('question');
    const aText = document.getElementById('a_text');
    const bText = document.getElementById('b_text');
    const cText = document.getElementById('c_text');
    const dText = document.getElementById('d_text');
    const submitBtn = document.getElementById('submit')
   // initiliase
    let currentQuiz = 0
    let score = 0
     
    loadQuiz()

    function loadQuiz() {
        deselectAnswer()

        const currentQuizData = quizData[currentQuiz]
        questionElement.innerText = currentQuizData.question
        aText.innerText = currentQuizData.a
        bText.innerText = currentQuizData.b
        cText.innerText = currentQuizData.c
        dText.innerText = currentQuizData.d
    }


    function deselectAnswer(){
        answerElements.forEach(answerElement=> answerElement.checked = false)
    }

    function getSelected() {
        let answer 

        answerElements.forEach(answerEl=>{
            if(answerEl.checked){
                answer = answerEl.id
            }
        })
        return answer
    }
    submitBtn.addEventListener('click', () => {
        const answer = getSelected()

        if(answer){
            if(answer=== quizData[currentQuiz].correct){
                score++
            }
            currentQuiz++

            if(currentQuiz < quizData.length) {
                loadQuiz()
            }else{
                quiz.innerHTML = `<h2>You Answered ${score}/${quizData.length} question correct </h2>
                <button onclick="location.reload()">Reload</button>
                `
            }
        }
    })






