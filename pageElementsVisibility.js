function getPageOffSetForElement(e){
    // Output current page
    el = document.getElementById(e);
    elDistanceToTop = window.pageYOffset + el.getBoundingClientRect().top;
    elDistanceToLeft = window.pageXOffset + el.getBoundingClientRect().left;

    return[elDistanceToLeft ,elDistanceToTop];
}

function showRelatedPDFElements(){
    document.querySelector('#prev-page').style.display = "block";
    document.querySelector('#next-page').style.display = "block";
    document.querySelector('.page-info').style.display = "block";
    document.querySelector('#coords').style.display = "block";
}

function hideRelatedPDFElements(){
    document.querySelector('#prev-page').style.display = "none";
    document.querySelector('#next-page').style.display = "none";
    document.querySelector('#coords').style.display = "block";
}