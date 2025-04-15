const container = document.querySelector('.service .container');
const scrollEndBtn = document.getElementById('scrollEndBtn');

// Listen to scroll events on the container
container.addEventListener('scroll', (e) => {
    const isAtBottom = container.scrollTop + container.clientHeight >= container.scrollHeight - 20;

    if (isAtBottom) {
        container.style.boxShadow = `5px 0px 30px hsl(38, 61%, 73%) inset`;
        scrollEndBtn.style.display = 'block'; 
        scrollEndBtn.style.opacity = 1; 

    }
});


window.addEventListener('scroll', () => {
    scrollEndBtn.classList.remove("scrollEndBtnStyle");
    scrollEndBtn.style.display = 'none';
    container.style.boxShadow = 'none';
});


const dragElement = (element) => {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    element.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
      e.preventDefault();
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e.preventDefault();
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      element.style.top = (element.offsetTop - pos2) + "px";
      element.style.left = (element.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
  };

  dragElement(document.querySelector(".order-menu"));
