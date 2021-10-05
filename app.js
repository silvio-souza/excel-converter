const fs = require('fs')
const express = require('express')
const upload = require('express-fileupload')
const lerArquivoOriginal = require('./src/controllers/lerArquivoOriginal')
// const path = require('path')

const app = express()
let fileName = ""

// filePath = path.join(__dirname, '../../arquivoSicom')
app.use(upload())


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/src/views/index.html')
})

//Post the upload file
app.post('/upload',function(req,res){
  console.log(req.files);
  if(req.files){
    const file = req.files.upfile,
      name = file.name, 
      type = file.mimetype
    
    fileName = name.split('.')[0]
    const arquivoSicomPath = __dirname + '/src/arquivoSicom/' + name
    

    file.mv(arquivoSicomPath,function(err){
      if(err){
        console.log('Deu erro aqui!!')
        console.log(err)
      }else{
        lerArquivoOriginal()
        console.log('CHEGUEI BEM AQUI 2')
        res.sendFile(__dirname + '/src/views/downloadPage.html')
      }
    })


  }else{
    res.send("No File selected !")
    res.end()

  }
});


app.get('/download', (req,res) =>{
  //This will be used to download the converted file
  res.download(__dirname +`/src/arquivoConvertidoExcel/${fileName}.xlsx`,(err) =>{
    if(err){
      res.send(err);
    }else{
      //Delete the files from uploads directory after the use
      console.log('Files deleted');
      const delete_path_xlsx = process.cwd() + `/src/arquivoConvertidoExcel/${fileName}.xlsx`;
      const delete_path_txt = process.cwd() + `/src/arquivoSicom/${fileName}.TXT`;
      try {
        fs.unlinkSync(delete_path_xlsx)
        fs.unlinkSync(delete_path_txt)
        //file removed
      } catch(err) {
      console.error(err)
      }
    }
  })
})


//linking of thankyou page
app.get('/thankyou',(req,res) => {
    res.sendFile(__dirname+'/thankyou.html')
})





app.listen(3000, () => {
  console.log("Server porta 3000...")
})
