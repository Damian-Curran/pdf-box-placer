selectElement.addEventListener('change', (event) => {
    var reader = new FileReader();
    reader.readAsDataURL(document.getElementById("pdfFile").files[0]);

    reader.onload = function (e) {
        pdfjsLib.getDocument(reader.result).promise.then(pdf => {
            showRelatedPDFElements();
            document.querySelector('#page-count').textContent = pdf.numPages;

            var x = document.getElementById("mydiv");
            x.style.display = "block";

            renderPage(pdf);
            makeResizableDiv('.resizable');

            //Make the DIV element draggagle:
            dragElement(document.getElementById("mydiv"));
        })
    }
});

const doSomethingWithData = document.getElementById('coords');
doSomethingWithData.addEventListener('click', (event) => {
    var offSetsCanvas = getPageOffSetForElement('canvas');
    var offSetsBox = getPageOffSetForElement('mydiv');

    //X and Y of box
    console.log("Top left of box coords");
    console.log("X " + (offSetsBox[0] - offSetsCanvas[0]));
    console.log("Y " + (offSetsBox[1] - offSetsCanvas[1]));
    console.log("Current Page " + document.querySelector('#page-num').textContent);
    console.log("Width " + width);
    console.log("Height " + height);
})

// Button Events
document.querySelector('#prev-page').addEventListener('click', showPrevPage);
document.querySelector('#next-page').addEventListener('click', showNextPage);