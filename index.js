const path = require('path')
const fs = require('fs')
filePath = path.join(__dirname, 'arquivoSicom')

fs.readdir(filePath, (err, files) => {
  const file = path.join(filePath, files[0])

  // console.log(typeof(files[0]))
  const tipoArquivo = files[0].slice(0,3)

  // Arquivo vem originalmente com encode 'ansi'
  // Usado encoding "binary" devido a problemas de conversao pra 'utf-8'
  // dos caracteres especiais
  fs.readFile(file, 'binary' ,(err, data) => {
    if (err) throw err
    let dividido = data.split('\r\n')
    // console.log(dividido[0])

    fs.writeFile ('NewFile.txt',dividido[0], function(err) {
      if (err) throw err;
      console.log('complete')
    })
  })

})


