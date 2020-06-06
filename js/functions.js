function validateValue(issn, year) {

    var result;

    // validacao 1
    if (issn > 0) {
        result = true;
    } else {
        result = false;
    }

    // validacao 2
    if (year > 9999 || year < 0) {
        result = false
    }


    // retorno
    if (result == false) {
        console.log("nao passou na validacao");
    }

};


function addOnList(List, issn, name, year) {
    var td1 = document.createElement("td");
    td1.classList.add("infoISSN");
    var td2 = document.createElement("td");
    td2.classList.add("infoNAME");
    var td3 = document.createElement("td");
    td3.classList.add("infoYEAR");

    td1.textContent = issn;
    td2.textContent = name;
    td3.textContent = year;

    var tr1 = document.createElement("tr");
    tr1.classList.add("subTable");
    tr1.appendChild(td1);
    tr1.appendChild(td2);
    tr1.appendChild(td3);

    List.appendChild(tr1);
}



// https://stackoverflow.com/questions/34156282/how-do-i-save-json-to-local-text-file
function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}


