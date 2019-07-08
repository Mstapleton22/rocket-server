const PDFDocument =require('pdfkit')

module.exports.waitinglist = (data)=> {
  const doc = new PDFDocument();

  styles = {
    main: {
      width: 410,
      align: 'left',
      color: 'blue'
    },
    left_column: {
      width: 410,
      align: 'left'
    },
    right_colum:{
      width: 410,
      align: 'right'
    }
   
}

let col1LeftPos = 50;
let colTop = 250;
let colWidth = 100;
let col2LeftPos = colWidth + col1LeftPos + 40;

  doc.text(`Date of Inquiry: ${data.inquiry_date}`, styles.main);
  doc.moveDown()
  doc.text(`Tour Date: ${data.tour_date}`, styles.main)
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
  doc.text(`Child's Name: ${data.child_name}`, styles.main);
  doc.moveDown();
  doc.text(`Birthday ${data.child_bday}`)
  doc.moveDown()
  doc.moveDown()
  doc.text(`Parent/Guardian Information`)
  doc.moveDown()
  
  doc.text(`Name: ${data.parent_name[0]}`, styles.main);
  doc.moveDown()
  doc.text(`Relationship: ${data.relationship[0]}`, styles.main)
  doc.moveDown()
  doc.text(`Address ${data.address[0]}`, styles.main)
  doc.moveDown()
  doc.text(`Email: ${data.email[0]}`, styles.main)
  doc.moveDown()
  doc.text(`Phone #: ${data.phone[0]}`, styles.main)
  doc.moveDown()
  doc.moveDown()
  doc.text(`Name: ${data.parent_name[1]}`, styles.main);
  doc.moveDown()
  doc.text(`Relationship: ${data.relationship[1]}`, styles.main)
  doc.moveDown()
  doc.text(`Address ${data.address[1]}`, styles.main)
  doc.moveDown()
  doc.text(`Email: ${data.email[1]}`, styles.main)
  doc.moveDown()
  doc.text(`Phone #: ${data.phone[1]}`, styles.main) 

  doc.text(`Parent/Guardian Signature:`)
  doc.moveDown()

  doc.moveTo(230, 595)
   .lineTo(450, 595)      
   .stroke()

doc.moveDown()

   doc.text(`Parent/Guardian Signature:`)

   doc.moveTo(230, 610)
    .lineTo(450, 610)      
    .stroke()
    
  doc.end();

  return doc 
}

