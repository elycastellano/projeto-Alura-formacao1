var buttonForm = document.querySelector("#buttonForm");
var mainForm = document.querySelector("#mainForm");
var mainList = document.querySelector("#mainList");
var buttonSave = document.querySelector("#saveBook");

buttonForm.addEventListener("click", function (event) {
    event.preventDefault();

    validateValue(mainForm.ISSN.value,
        mainForm.year.value);

    addOnList(mainList,
        mainForm.ISSN.value,
        mainForm.name.value,
        mainForm.year.value);
});



buttonSave.addEventListener("click", function () {
   // console.log("save is pressed")


    var trSubTable = document.querySelectorAll(".subTable");

    var bookArray = [];


    for (i = 0; i < trSubTable.length; i++) {

        var trFOR = trSubTable[i];

        var ISSNFOR = trFOR.querySelector(".infoISSN");
        var issnValue = ISSNFOR.textContent;

        var NAMEFOR = trFOR.querySelector(".infoNAME");
        var nameValue = NAMEFOR.textContent;

        var YEARFOR = trFOR.querySelector(".infoYEAR");
        var yearValue = YEARFOR.textContent;

        bookObject = {
            issn: issnValue,
            name: nameValue,
            year: yearValue,
        }

        bookArray.push(bookObject);

    }


    var jsonFinal = JSON.stringify(bookArray);


    download(jsonFinal, 'books.json', 'text/plain');

})



var botaoAdicionar = document.querySelector("#searchBook");

botaoAdicionar.addEventListener("click", function () {


    var xhr = new XMLHttpRequest();

    xhr.open("GET", "http://127.0.0.1:8080/books.json");

    xhr.addEventListener("load", function () {


        var resposta = xhr.responseText;
        var booksFromJson = JSON.parse(resposta);


        for (let i = 0; i < booksFromJson.length; i++) {
            var bookFromJson = booksFromJson[i];

            // console.log(bookFromJson)

            // console.log(bookFromJson.issn)


            addOnList(mainList,
                bookFromJson.issn,
                bookFromJson.name,
                bookFromJson.year);



        }

    })

    xhr.send();
});
