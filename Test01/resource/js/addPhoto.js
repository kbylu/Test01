const path = require('path');
const fs = require('fs');
//joining path of directory 
const directoryPath = path.join(__dirname, '../image');
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    
    files.forEach(function (file) {
        // const gallery = document.getElementById("gallery");

        const rows = document.getElementsByClassName("column");
        console.log(file);
        
        let i = 0;
        // rows[i%3].appendChild(makeImage(filename));
        i++;
        // Do whatever you want to do with the file
        // console.log(file); 
        
    });
});



console.log("yoyoyoyoy");
// function renderImages() {
  
//     let i =0;
        
//     }
// }

function makeImage(src) {
    let fig = document.createElement("figure");
    fig.className = "mb-4";

    // let aElem = 
    aElem.href = src;

    // let img = ;

    aElem.appendChild(img);
    fig.appendChild(aElem);

    return fig;
}
// for each file in this directory,


{/* <figure class="mb-4">
        <a href="resource/image/cat.gif" data-fancybox="image" data-caption="">
            <img src="resource/image/cat.gif" alt="" />
        </a>
    </figure> */}