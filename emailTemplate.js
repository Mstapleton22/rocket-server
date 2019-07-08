const PDFDocument =require('pdfkit')

module.exports.waitinglist = (data)=> {
  const doc = new PDFDocument();


  doc.text(`Name: ${data.name}`, {
    width: 410,
    align: 'left'
  }
  );
  doc.moveDown()
  doc.text(`Name: ${data.name}`, {
    width: 410,
    align: 'left'
  }
  );
  doc.moveDown();
  doc.text(`Name: ${data.email}`, {
    width: 410,
    align: 'left'
  }
  );
  
  doc.end();
  return doc 
}

