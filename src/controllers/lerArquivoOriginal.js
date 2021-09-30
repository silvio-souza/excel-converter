const path = require('path')
const fs = require('fs')
const validaTipoArquivo = require('./validaTipoArquivo')
const converterArquivoExcel = require('./converterArquivoExcel')
filePath = path.join(__dirname, '../../arquivoSicom')
// filePath = path.join(__dirname)

module.exports = lerArquivoOriginal => {fs.readdir(filePath, (err, files) => {
    const file = path.join(filePath, files[0])

    console.log(file)

    // Arquivo vem originalmente com encode 'ansi'
    // Usado encoding "binary" devido a problemas de conversao pra 'utf-8'
    // dos caracteres especiais
    fs.readFile(file, 'binary' ,(err, data) => {
      if (err) throw err
      let dadosArquivo = data.split('\r\n')

      const nomeArquivoOriginal = files[0].slice(0, files[0].length-4)
      const nomeArquivoTratado = validaTipoArquivo(nomeArquivoOriginal)

      converterArquivoExcel(nomeArquivoTratado, dadosArquivo, nomeArquivoOriginal)

      // fs.writeFile ('NewFile.txt',filePath, function(err) {
      //   if (err) throw err;
      //   console.log('complete')
      // })
    })

  })
}