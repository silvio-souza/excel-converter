const xl = require('excel4node');
 
module.exports = converterArquivoExcel = (tipoArquivo, dadosArquivo) => {
  const wb = new xl.Workbook();
  const ws = []

  // Create a reusable style
  var header = wb.createStyle({
    font: {
      // color: '#000000',
      size: 12,
    },
    numberFormat: '$#,##0.00; ($#,##0.00); -',
  });

  // Add Worksheets to the workbook
  tipoArquivo.registro.forEach((registro, index) => {
    ws.push(wb.addWorksheet(registro.descricaoResumida))

    registro.seq.forEach(campo => {
      ws[index].cell(1, campo.id)
      .string(campo.descricao)
      .style(header);
    })

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
 
  
  
  wb.write('Excel.xlsx');
}
