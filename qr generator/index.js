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
    const url=answers.URL;
    var qr_svg = qr.image(url); //to create qr code
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));
 
    writeFile("URL.txt",url,(err)=>{
       if (err) throw err;
    console.log("QR code generated successfully!");
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });