let tipos = require('./tiposArquivos.json')

// let arr = Object.keys(tipos).map(i => JSON.parse(tipos[String(i)]))

const validaTipoArquivo = tipoArquivo => {
  tipoArquivo = tipoArquivo.toLowerCase()



  return tipoArquivo
}

// console.log(validaTipoArquivo('LQD'))
console.log(tipos.arquivos)