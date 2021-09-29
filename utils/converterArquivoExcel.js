const xl = require('excel4node');
const separaPosicoes = require('./separaPosicoes')
 
module.exports = converterArquivoExcel = (tipoArquivo, dadosArquivo, nomeArquivoOriginal) => {
  const wb = new xl.Workbook();
  const ws = []


  // Create a reusable style
  var header = wb.createStyle({
    font: {
      color: '#ffffff',
      size: 12,
      bold: true,
    },
    alignment: {
      horizontal: 'center',
    },
    fill: {
      type: 'pattern',
      patternType: 'solid',
      bgColor: '#4f81bd',
      fgColor: '#4f81bd',
    }
  });

  // Add Worksheets to the workbook
  tipoArquivo.registro.forEach((registro, index) => {
    ws.push(wb.addWorksheet(registro.descricaoResumida))
    let linhaPlanilha = 2

    registro.seq.forEach(campo => {
      ws[index].cell(1, campo.id)
      .string(campo.descricao)
      .style(header);  
    })

    dadosArquivo.forEach(linha => {
      let linhaSeparadaPosicoes = separaPosicoes(registro, linha)
      if (linhaSeparadaPosicoes[0] == registro.tipo) {
        linhaSeparadaPosicoes.forEach((posicao, indexPosicao) => {
          ws[index].cell(linhaPlanilha, indexPosicao+1).string(posicao)
        })
        linhaPlanilha++
      }
    })


    // ws.cell(1, 1).string('My simple string');
    // ws.cell(1, 2).number(5);
    // ws.cell(1, 3).formula('B1 * 10');
    // ws.cell(1, 4).date(new Date());
    // ws.cell(1, 5).link('http://iamnater.com');
    // ws.cell(1, 6).bool(true);


    // // Set value of cell A1 to 100 as a number type styled with paramaters of style
    // ws[index].cell(1, registro.seq)
    // .number(100)
    // .style(style);
  
    // // Set value of cell B1 to 200 as a number type styled with paramaters of style
    // ws[index].cell(1, 2)
    //   .number(200)
    //   .style(style);
    
    // // Set value of cell C1 to a formula styled with paramaters of style
    // ws[index].cell(1, 3)
    //   .formula('A1 + B1')
    //   .style(style);
    
    // // Set value of cell A2 to 'string' styled with paramaters of style
    // ws[index].cell(2, 1)
    //   .string('string')
    //   .style(style);
    
    // // Set value of cell A3 to true as a boolean type styled with paramaters of style but with an adjustment to the font size.
    // ws[index].cell(3, 1)
    //   .bool(true)
    //   .style(style)
    //   .style({font: {size: 14}});

  }) 
 
  wb.write(`./${nomeArquivoOriginal}.xlsx`);
}
