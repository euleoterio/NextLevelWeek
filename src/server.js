// Servidor
const express = require('express')
const server = express()

const { 
  pageLanding,
  pageStudy, 
  pageGiveClasses, 
  saveClasses
 } = require('./pages')

//configuração nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
  express: server,
  noCache: true
})

//Inicio e configuração do servidor
server
// receber os dados do req.body
.use(express.urlencoded({ extended: true}))
// configurar arquivos estáticos (css, scripst, imagens)
.use(express.static("public"))
// arrow function
// (requisição, resposta)
//  rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
// start servidor
.listen(8800)

