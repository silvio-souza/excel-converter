const path = require('path')
const fs = require('fs')
const validaTipoArquivo = require('./validaTipoArquivo')
const converterArquivoExcel = require('./converterArquivoExcel')
filePath = path.join(__dirname, 'arquivoSicom')

fs.readdir(filePath, (err, files) => {
  const file = path.join(filePath, files[0])

  // Arquivo vem originalmente com encode 'ansi'
  // Usado encoding "binary" devido a problemas de conversao pra 'utf-8'
  // dos caracteres especiais
  fs.readFile(file, 'binary' ,(err, data) => {
    if (err) throw err
    let dadosArquivo = data.split('\r\n')
    // console.log(dadosArquivo[0])
    
    converterArquivoExcel(validaTipoArquivo(files[0]), dadosArquivo)

    fs.writeFile ('NewFile.txt',dadosArquivo[0], function(err) {
      if (err) throw err;
      console.log('complete')
    })
  })

})


