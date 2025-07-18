document.addEventListener('DOMContentLoaded', () => {

    const quizData = [
        {
            question: "What is the capital of India?",
            options: ["Mumbai", "Delhi", "Bangalore", "Kolkata"],
            answer: "Delhi",
            marks: 5
        },
        {
            question: "Which language runs in a web browser?",
            options: ["Java", "C", "Python", "JavaScript"],
            answer: "JavaScript",
            marks: 10
        },
        {
            question: "Who wrote 'Harry Potter'?",
            options: ["J.K. Rowling", "Tolkien", "Agatha Christie", "Dan Brown"],
            answer: "J.K. Rowling",
            marks: 5
        },
        {
            question: "What is 2 + 2?",
            options: ["3", "4", "5", "6"],
            answer: "4",
            marks: 15
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Earth", "Venus", "Mars", "Jupiter"],
            answer: "Mars",
            marks: 5
        }
    ];

    const container = document.getElementById('container')
    const quizContainer = document.getElementById('quiz-container')
    const questionContainer = document.getElementById('question-container')
    const questionText = document.getElementById('question-text')
    const choicesList = document.getElementById('choices-list')
    const nextBtn = document.getElementById('next-btn')
    const resultContainer = document.getElementById('result-container')
    const scoreDisplay = document.getElementById('score')
    const restartBtn = document.getElementById('restart-btn')
    const startBtn = document.getElementById('start-btn')

    let currentQuestionIndex = 0
    let marks = 0
    let totalMarks = 0
    
    quizData.forEach(q => {
        totalMarks += q.marks
        console.log(totalMarks)
    })

    function startQuiz(){
        startBtn.addEventListener('click', ()=>{
            startBtn.classList.add('hidden')
            resultContainer.classList.add('hidden')
            container.classList.add('container')
            questionContainer.classList.remove('hidden')
            showQuestion()
        })
    }

    startQuiz()

    nextBtn.addEventListener('click', nextQuestion)

    function nextQuestion(){
        currentQuestionIndex++;
        if(currentQuestionIndex < quizData.length){
            showQuestion()
        } else {
            showResult()
        }
    }

    restartBtn.addEventListener('click', ()=>{
            currentQuestionIndex = 0
            marks = 0
            questionContainer.classList.remove('hidden')
            resultContainer.classList.add('hidden')
            showQuestion()
    })


    function showQuestion(){
        nextBtn.classList.add('hidden')
        questionText.textContent = quizData[currentQuestionIndex].question
        choicesList.innerHTML = "" // clears previous choices

        quizData[currentQuestionIndex].options.forEach((choice) => {
            const li = document.createElement('li')
            li.classList.add('choices')

            li.textContent = choice
            li.addEventListener('click', ()=>{
                li.classList.add('selected-choice')
                selectAnswer(choice)
            })

            choicesList.appendChild(li)
        })
    }

    function selectAnswer(choice){
        const correctAnswer = quizData[currentQuestionIndex].answer
        if(correctAnswer === choice){
            marks += quizData[currentQuestionIndex].marks
        }
        nextBtn.classList.remove('hidden')
    }

    function showResult(){
        questionContainer.classList.add('hidden')
        resultContainer.classList.remove('hidden')

        if(marks > quizData.length / 2){
            scoreDisplay.textContent = `🎉${marks} out of ${totalMarks}` 
            scoreDisplay.style.color = "rgb(110, 255, 110)"
        } else {
            scoreDisplay.textContent = `👍🏻${marks} out of ${totalMarks}` 
            scoreDisplay.style.color = "rgba(255, 110, 110, 1)"
        }
    }
})