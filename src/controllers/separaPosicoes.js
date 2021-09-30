// Leia o tipo de arquivo e linha atual. Retorna a linha atual separada por posicoes(array)
module.exports = separaPosicoes = (registro, linhaAtual) => {
  // const registroAtual = linhaAtual.substring(0,2)
  const tamanhoCampos = []
  const camposSeparados = []

    registro.seq.forEach(campo => {
      tamanhoCampos.push(campo.tamanho)
    })


  tamanhoCampos.forEach(elemento => {
    camposSeparados.push(linhaAtual.substring(0, elemento).trim())
    linhaAtual = linhaAtual.substring(elemento, linhaAtual.length)
  })

  return camposSeparados
}
