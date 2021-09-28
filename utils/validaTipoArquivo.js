let tipos = require('./tiposArquivos.json')


// Faz a leitura do nome do arquivo e retorna o objeto do Json correspondente
module.exports = validaTipoArquivo = tipoArquivo => {
  tipoArquivo = tipoArquivo.slice(0,3).toLowerCase()
  let tipoEncontrado

  tipos.arquivos.forEach(tipo => {
    if(tipoArquivo in tipo) tipoEncontrado = tipo[tipoArquivo]
  });

  if(!tipoEncontrado) return "Tipo não encontrado"

  return tipoEncontrado;  
}
