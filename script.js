// Perguntas do quiz
const questions = [
    { question: "1. Qual é o elemento HTML usado para criar um link?", options: ["&lt;link&gt;", "&lt;a&gt;", "&lt;href&gt;", "&lt;url&gt;"], answer: "&lt;a&gt;" },
    { question: "2. Qual propriedade CSS é usada para mudar a cor do texto?", options: ["background-color", "color", "font-color", "text-color"], answer: "color" },
    { question: "3. Qual é o método JavaScript para selecionar um elemento pelo ID?", options: ["getElementsByClassName", "querySelector", "getElementById", "getElement"], answer: "getElementById" },
    { question: "4. Qual elemento HTML é usado para inserir uma imagem?", options: ["&lt;img&gt;", "&lt;src&gt;", "&lt;picture&gt;", "&lt;figure&gt;"], answer: "&lt;img&gt;" },
    { question: "5. Qual linguagem é usada para estilizar páginas da web?", options: ["HTML", "JavaScript", "CSS", "Python"], answer: "CSS" },
    { question: "6. Qual operador é usado para comparar valor e tipo em JavaScript?", options: ["==", "===", "=", "!="], answer: "===" },
    { question: "7. Qual é o atributo HTML para definir o texto alternativo em uma imagem?", options: ["src", "alt", "title", "description"], answer: "alt" },
    { question: "8. Qual função JavaScript exibe uma mensagem na tela?", options: ["display()", "alert()", "print()", "message()"], answer: "alert()" },
    { question: "9. Como chamamos o espaço entre o conteúdo e a borda no CSS?", options: ["margin", "border", "padding", "spacing"], answer: "padding" },
    { question: "10. Em JavaScript, qual método adiciona um item ao final de um array?", options: ["push()", "add()", "append()", "concat()"], answer: "push()" }
];

let currentQuestion = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;

// Função para exibir uma pergunta de cada vez
function displayQuestion(index) {
    const quizContainer = document.getElementById("quiz");
    const question = questions[index];
    quizContainer.innerHTML = `
        <div class="question">
            <p>${question.question}</p>
            <div class="options">
                ${question.options.map(option => `
                    <label>
                        <input type="radio" name="question${index}" value="${option}">
                        ${option}
                    </label>
                `).join('')}
            </div>
        </div>
    `;
}

// Função para passar para a próxima pergunta
function nextQuestion() {
    const selectedOption = document.querySelector(`input[name="question${currentQuestion}"]:checked`);
    if (selectedOption) {
        if (selectedOption.value === questions[currentQuestion].answer) {
            correctAnswers++;
        } else {
            incorrectAnswers++;
        }
        currentQuestion++;
        
        if (currentQuestion < questions.length) {
            displayQuestion(currentQuestion);
        } else {
            showResult();
        }
    } else {
        alert("Por favor, selecione uma resposta.");
    }
}

// Função para exibir o resultado final
function showResult() {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("result").innerHTML = `
        <p>Quiz concluído!</p>
        <p>Acertos: ${correctAnswers}</p>
        <p>Erros: ${incorrectAnswers}</p>
    `;
}

// Inicializar o quiz com a primeira pergunta
displayQuestion(currentQuestion);
