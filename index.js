// let json = require('./tiposArquivos.json')

//  console.log(json.lqd.registro[1].seq[1].descricao)


let fs = require('fs')


fs.readFile('LQD0721.txt', 'utf-8', (err, data) => {
  if (err) throw err
  let dividido = data.split('\r\n')
  // console.log(dividido)
  console.log(dividido[0])
})
