var width;
var height;

function makeResizableDiv(div) {
  const element = document.querySelector(div);
  const resizer = document.getElementById('myResizer');
  const minimum_size = 20;
  let original_width = 0;
  let original_height = 0;
  let original_x = 0;
  let original_y = 0;
  let original_mouse_x = 0;
  let original_mouse_y = 0;

    //initialize variables incase user doesnt mouse down
    width = parseFloat(getComputedStyle(element, null).getPropertyValue('width').replace('px', ''));
    height = parseFloat(getComputedStyle(element, null).getPropertyValue('height').replace('px', ''));

    resizer.addEventListener('mousedown', function(e) {
        original_width = parseFloat(getComputedStyle(element, null).getPropertyValue('width').replace('px', ''));
        original_height = parseFloat(getComputedStyle(element, null).getPropertyValue('height').replace('px', ''));
        console.log("clientX: " + e.clientX);
        console.log("original_width: " + original_width);
        e.preventDefault()
        original_x = element.getBoundingClientRect().left;
        original_y = element.getBoundingClientRect().top;
        original_mouse_x = e.pageX;
        original_mouse_y = e.pageY;
        window.addEventListener('mousemove', resize);
        window.addEventListener('mouseup', stopResize);
    })
    
    function resize(e) {
      if (resizer.classList.contains('bottom-right')) {
        width = original_width + (e.pageX - original_mouse_x);
        height = original_height + (e.pageY - original_mouse_y)
        if (width > minimum_size) {
          element.style.width = width + 'px'
        }
        if (height > minimum_size) {
          element.style.height = height + 'px'
        }
      }
    }

    function stopResize() {
      window.removeEventListener('mousemove', resize)
    }
}