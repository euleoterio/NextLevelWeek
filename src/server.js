// Dados
const proffys = [
  { 
    name: "Vinicius Euleoterio", 
    avatar: "https://avatars3.githubusercontent.com/u/46050068?s=400&u=1497e818c3ac663f176141326920d96a574f6ad1&v=4", 
    whatsapp: "51 982895068", 
    bio: "Entusiasta do mundo da tecnologia e da música.<br><br>Apaixonado por TI, ama programação e desafios. Conhecimento e Java, JavaScript, NodeJs, React.",
    subject: "Desenvolvedor", 
    cost: "40",
    weekday: [0],
    // [segundos]
    time_from:[720],
    time_to:[1220]
  },
  { 
    name: "Diego Fernandes", 
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
    bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    whatsapp: "51 982895068", 
    subject: "Química", 
    cost: "60",
    weekday: [1],
    // [segundos]
    time_from:[920],
    time_to:[1420]
  }
]

const subjects = [
  "Artes",
  "Biologia",
  "Ciências",
  "Educação física",
  "Física",
  "Geografia",
  "História",
  "Matemática",
  "Português",
  "Química"
]

const weekdays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado"
]

// Funcionalidades
function pageLanding(req, res) {
  return res.render("index.html") 
}
function pageStudy(req, res) {
  // req.query são os dados que vem do front 
  const filters = req.query;
  return res.render("study.html", { proffys, filters, subjects, weekdays})
}
function pageGiveClasses(req, res) {
  const data = req.query;

function getSubject(subjectNumber) {
  // + "garante" que é número
  const position = +subjectNumber-1
  return subjects[position]
  
}

  //Object.keys transforma objetco para array
  const isNotEmpty = Object.keys(data).length > 0
  if(isNotEmpty){

    data.subject = getSubject(data.subject)

    // adicionar dados
    proffys.push(data)

    return res.redirect("/study")
  }

  return res.render("give-classes.html", { subjects, weekdays })
}

// Servidor
const express = require('express')
const server = express()


//configuração nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
  express: server,
  noCache: true
})

//Inicio e configuração do servidor
server
// configurar arquivos estáticos (css, scripst, imagens)
.use(express.static("public"))
// arrow function
// (requisição, resposta)
//  rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
// start servidor
.listen(8000)

