function csvToD3Json(csv){
    var lines = csv.split("\n");
    var nodes = [], links = [];
  
    for(var i = 1; i < lines.length; i++){
        var currentline = lines[i].split(",");
        nodes.push({
            id: currentline[0],
            group: Math.floor(Math.random() * 10) + 1
        });
        nodes.push({
            id: currentline[1],
            group: Math.floor(Math.random() * 10) + 1
        });

        links.push({
            source: currentline[0],
            target: currentline[1],
            value: 1
        });
    }
    
    return { nodes, links };
}

function fileUpload() {
    document.getElementById('file-upload').addEventListener('change', function(){
        var file_reader = new FileReader();
    
        file_reader.onload = function(){
            const resultData = csvToD3Json(file_reader.result);
            refreshGraph(resultData)
        }
    
        if (this.files[0]) {
            file_reader.readAsText(this.files[0]);
        }
    })
}

fileUpload()

/*
function csvJSON(csv){

    var result = [];
    var lines = csv.split("\n");
    var headers = lines[0].split(","); // TODO: sanitaze, validate and normalize
  
    for(var i = 1; i < lines.length; i++){
        var obj = {};
        var currentline = lines[i].split(",");
  
        for(var j = 0; j < headers.length; j++){
            obj[headers[j]] = currentline[j];
        }
  
        result.push(obj);
    }
  
    // const resultData = JSON.stringify(result);
    // return resultData;
    return JSON.stringify(result); //JSON
}

// const input = document.querySelector("input");
// input.addEventListener("change", updateImageDisplay);

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file
const fileTypes = [
  "text/csv"
];

function validFileType(file) {
  return fileTypes.includes(file.type);
}

function returnFileSize(number) {
  if (number < 1024) {
    return number + "bytes";
  } else if (number > 1024 && number < 1048576) {
    return (number / 1024).toFixed(1) + "KB";
  } else if (number > 1048576) {
    return (number / 1048576).toFixed(1) + "MB";
  }
}
*/