import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from "fs";

inquirer
  .prompt([
    {
    message:"Enter the text or link to generate QR code:", //question
    name:"URL",
  }
  ])
  .then((answers) => {
    const url=answers.URL;//to save the url
    var qr_svg = qr.image(url); //to create qr code using .image(url)
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));
 
    writeFile("URL.txt",url,(err)=>{
       if (err) throw err;//to throw the following statement if there a error
    console.log("QR code generated successfully!");
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment //just wrote it simply
    } else {
      // Something else went wrong
    }

  });
