const PDFDocument =require('pdfkit')

module.exports.waitinglist = (data)=> {
  const doc = new PDFDocument();

  styles = {
    main: {
      width: 410,
      align: 'left',
      // fontSize: 4,
      lineGap: 6
    },
    left_column: {
      width: 410,
      align: 'left'
    },
    right_colum:{
      width: 410,
      align: 'right'
    },
   title:{
    //  width: 410,
     align:'center'
   }
}

let col1LeftPos = 50;
let colTop = 250;
let colWidth = 100;
let col2LeftPos = colWidth + col1LeftPos + 40;
  doc.font('Times-Bold').text(`Waitlist Application`,styles.title)
  doc.moveDown()
  doc.font('Times-Roman').font('Times-Roman').text(`Date of Inquiry: ${data.inquiry_date}`, styles.main);

  doc.font('Times-Roman').text(`Tour Date: ${data.tour_date}`, styles.main)

  doc.font('Times-Roman').text(`Requested Start Date: ${data.requested_date}`,styles.main)

  doc.font('Times-Roman').text(`Classroom Selected: ${data.chosen_classroom}`, styles.main)

  doc.font('Times-Roman').text(`The following were circled: ${
    data.circled.map(item => {
      return ` ${item}`
    })
  }`, styles.main) 


  doc.font('Times-Roman').text(`Child's Name: ${data.child_name}`, styles.main);
;
  doc.font('Times-Roman').text(`Birthday ${data.child_bday}`,styles.main)

  doc.moveDown()
  doc.font('Times-Bold').text(`Parent/Guardian Information:`)
  doc.moveDown()
  
  doc.font('Times-Roman').text(`Name: ${data.parent_name[0]}`, styles.main);

  doc.font('Times-Roman').text(`Relationship: ${data.relationship[0]}`, styles.main)

  doc.font('Times-Roman').text(`Address ${data.address[0]}`, styles.main)

  doc.font('Times-Roman').text(`Email: ${data.email[0]}`, styles.main)

  doc.font('Times-Roman').text(`Phone #: ${data.phone[0]}`, styles.main)
  doc.moveDown()

  doc.font('Times-Roman').text(`Name: ${data.parent_name[1]}`, styles.main);

  doc.font('Times-Roman').text(`Relationship: ${data.relationship[1]}`, styles.main)

  doc.font('Times-Roman').text(`Address ${data.address[1]}`, styles.main)

  doc.font('Times-Roman').text(`Email: ${data.email[1]}`, styles.main)

  doc.font('Times-Roman').text(`Phone #: ${data.phone[1]}`, styles.main) 

  doc.moveDown()
  doc.font('Times-Roman').text(`Parent/Guardian Signature:__________________________________________`)
  doc.moveDown()
  doc.font('Times-Roman').text(`Parent/Guardian Signature: _________________________________________`)

  doc.moveDown()
  doc.font('Times-Roman').text('Date:____/____/____')
  doc.moveDown()
  doc.font('Times-Roman').text('_____________________________________________________________________________')
  doc.moveDown()
  doc.font('Times-Bold').text('FOR OFFICE USE ONLY')
  doc.moveDown()
  doc.font('Times-Roman').text('Deposit:_________________', styles.main)
  doc.font('Times-Roman').text('Application Date:____/____/____',styles.main)
  doc.font('Times-Roman').text('Date of contact: _____/____/____',styles.main)

// doc.text(`Thank you for your interest in Augustana Early Learning Center. Choosing a quality care program is one of the more important decisions you will make.
// To register your child on our waitlist. Please return this completed form to Augustana Early Learning Center with waitlist fee of $50.00. This waitlist fee is non-refundable.
// When your registration form AND fee are received, you will be placed on the waiting list. You will be contacted quarterly regarding availability. When space becomes available for your child, you will be contacted regarding the enrollment process. 
// `)
// doc.moveDown()
// doc.text('General Waitlist Information')
// doc.moveDown()
// doc.text('Our waitlist is organized according to...')


  doc.end();
  return doc 
}

