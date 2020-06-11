// The workerSrc property shall be specified.
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://mozilla.github.io/pdf.js/build/pdf.worker.js';
const selectElement = document.getElementById('pdfFile');

let pdf = null,
pageNum = 1,
pageIsRendering = false,
pageNumIsPending = null;

const scale = 1,
canvas = document.querySelector('#canvas'),
ctx = canvas.getContext('2d');

// Render the page
const renderPage = pdfDoc => {
    pdf = pdfDoc;
    pageIsRendering = true;

    if(pdfDoc.numPages < 2){
        hideRelatedPDFElements();
    }

    // Get page
    pdfDoc.getPage(pageNum).then(page => {
    // Set scale
    const viewport = page.getViewport({ scale });
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    const renderCtx = {
        canvasContext: ctx,
        viewport
    };

    page.render(renderCtx).promise.then(() => {
        pageIsRendering = false;

        if (pageNumIsPending !== null) {
        renderPage(pageNumIsPending);
        pageNumIsPending = null;
        }
    });

    // Output current page
    document.querySelector('#page-num').textContent = pageNum;
    });
};

// Check for pages rendering
const queueRenderPage = num => {
    if (pageIsRendering) {
        pageNumIsPending = num;
    } else {
        renderPage(pdf);
    }
};

// Show Prev Page
const showPrevPage = () => {
    if (pageNum <= 1) {
      return;
    }
    pageNum--;
    queueRenderPage(pageNum);
};
  
// Show Next Page
const showNextPage = () => {
    if (pageNum >= pdf.numPages) {
        return;
    }
    pageNum++;
    queueRenderPage(pageNum);
};