const PDFDocument =require('pdfkit')

module.exports.waitinglist = (data)=> {
  const doc = new PDFDocument();

  styles = {
    width: 410,
    align: 'left'
  }

  doc.text(`Date of Inquiry: ${data.inquiry_date}`, styles);
  doc.moveDown()
  doc.text(`Tour Date: ${data.tour_date}`, styles)
  doc.moveDown()
  doc.text(`Requested Start Date: ${data.requested_date}`)
  doc.moveDown()
  doc.text(`Classroom Selected: ${data.chosen_classroom}`)
  doc.moveDown()
  doc.text(`The following were circled: ${
    data.circled.map(item => {
      return ` ${item}`
    })
  }`) 

  doc.moveDown()
  doc.text(`Name: ${data.name}`, styles);
  doc.moveDown();
  doc.text(`Name: ${data.email}`, styles);
  
  doc.end();
  return doc 
}

