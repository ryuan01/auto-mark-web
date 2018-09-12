// use vnu-jar to check validity of webpages
// require unzip being installed in os

'use strict';

const exec = require ('child-process-promise').exec;
const vnu = require('vnu-jar');

async function main (){
  console.log ("starting to check all HTML files" );
  // checkAllWebpages();
  try{
    let names = await getAllfoldernames();
    console.log(names);
  } catch (error ){
    console.log(error);
  }
}

// checks all the webpages under specific folders
async function checkAllWebpages(){
  let folder_names = await getAllfoldernames();

  // dummy holder
  // let folder_names = ["http://mylinux.langara.bc.ca/~gsingh104/index.html", "../../test/index.html"];

  for (let i =0; i < folder_names.length; i++){
    console.log("======================\nchecking site " + folder_names[i]);
    exec ( `java -jar ${vnu} --skip-non-html ${folder_names}`)
      .then(reuslt => {
        let stdout = result.stdout;
        let stderr = result.stderr;
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
      })
      .catch(err =>{
        console.log(err);
      })
  }
}

// unzip the folder and get all folder names
function getAllfoldernames(){
  return new Promise((resolve, reject) =>{
      let path = "\"C:\\Users\\Jordan\\cpsc1030\\Assignment 1 Download Sep 11, 2018 824 PM\"";

      //get a list of file names and the name I want them to be under
      //extract the files using unzip
      //delete all the zip folders
      exec ( `unzip ${path}/*.zip`)
        .then(reuslt =>{
            resolve("hello");
        })
        .catch(err =>{
          reject(err);
        })
  });
}

main();
