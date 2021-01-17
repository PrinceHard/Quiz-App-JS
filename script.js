const quizData = [
    {
        question: 'Quem criou o linux ?',
        a: 'Steve Jobs',
        b: 'Linus Torvalds',
        c: 'Bill Gates',
        d: 'Minux Ricard',
        correct: 'b'
    }, {
        question: 'Qual dessas é uma lingugem de programção ?',
        a: 'Julia',
        b: 'Script x',
        c: 'Reval',
        d: 'Maria',
        correct: 'a'
    }, {
        question: 'Quando a empresa Microsoft foi fundada ?',
        a: '1974',
        b: '1975',
        c: '1976',
        d: '1985',
        correct: 'b'
    }, {
        question: 'Analise as seguintes frases e assinale a alternativa correta: I. Conjunto de programas. II. Usuários ou profissionais em TI. III. Parte física do computador.',
        a: 'I- Hardware, II- Software, III- Firmware.',
        b: 'I- Hardware, II- Software, III- Firmware.',
        c: 'I- Software, II- Peopleware, III- Hardware.',
        d: 'I- Software, II- Tupperware, III- Firmware.',
        correct: 'c'
    }, {
        question: 'Se um profissional está criando um site em HTML e ele quiser colocar uma barra horizontal em sua página, qual tag ele deve usar?',
        a: '<line></line>',
        b: '<hr></hr>',
        c: '<br></br>',
        d: '<hr/>',
        correct: 'd'
    }, {
        question: 'HTML é uma linguagem de:',
        a: 'Programação',
        b: 'Edição de texto',
        c: 'Desenvlvimento web',
        d: 'Marcação',
        correct: 'd'
    }, {
        question: 'Qual das seguintes variáveis só aceita números inteiros?',
        a: 'Long.',
        b: 'Interger.',
        c: 'Double.',
        d: 'String.',
        correct: 'a'
    }
]

const questionTitle = document.getElementById('question')

const aText = document.getElementById('a-text')
const bText = document.getElementById('b-text')
const cText = document.getElementById('c-text')
const dText = document.getElementById('d-text')

const submitBtn = document.getElementById('submit')

let currentQuiz = 0

loadQuiz();

function loadQuiz(){

    const currentQuizData = quizData[currentQuiz]
    questionTitle.innerHTML = currentQuizData.question

    aText.innerHTML = currentQuizData.a
    bText.innerHTML = currentQuizData.b
    cText.innerHTML = currentQuizData.c
    dText.innerHTML = currentQuizData.d


}

submitBtn.addEventListener('click', () => {
    currentQuiz++
    loadQuiz();
})