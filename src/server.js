// importanr dependencias (o express é uma variável q recebeu uma função, logo ela se torna uma função quando chamada (linha5))
const express = require('express');
const path = require('path');
const pages = require('./pages.js')

// iniciando o express (a biblioteca)
const server = express()
server
// utilizando os arquivos estáticos
.use(express.static('files'))

// configurar template engine
.set('views', path.join(__dirname, "views"))
.set ('view engine' , 'hbs')

// criar rotas da aplicação
.get('/', pages.index)
.get('/orphanages', pages.orphanages)
.get('/orphanage', pages.orphanage)
.get('/create-orphanage', pages.createOrphanage)

// ligar o servidor
server.listen(5500)