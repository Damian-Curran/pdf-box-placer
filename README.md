# pdf-box-placer
Uses PDF.js to load a pdf and uses css to draw a box which provides (x,y) co-ordinates and the page number


# TO-DO's and implementation ideas

## multiple x,y coords for boxes on PDF
- onClick add coords to list (append)

## clickable list and shows where box 
- call queueRenderPage and pass page num from object variable: {pageNum}
- change css by script (.resizeable) {width,height,left,top} {width,height,x,y}
- change size of clickable drag and resizer by (.resizable .resizers .resizer) {width=0,height=0}

## delete box if wanted
- delete object from list

## reorder
- be able to reorder list rather than delete and create new
