// dropdown Animation starts
let dropAnimation = ()=>{
    let dropdown = document.querySelector('.dropdown')
    let dropItem = document.querySelectorAll('.dropItem')
    dropdown.classList.toggle('dropdownA')
    dropItem.forEach(element => {
        element.classList.toggle('dropItemA')
        element.addEventListener('click',()=>{
            dropAnimation()
        })
    })
}
let dropTriggerChat = document.querySelector('.dropTriggerChat')
let dropTrigger = document.querySelectorAll('.dropTrigger')
dropTrigger.forEach(element => {
    element.addEventListener('click',()=>{
        dropAnimation()
    })
    
})
dropTriggerChat.addEventListener('click',()=>{
    dropAnimation(2)
})

// dropdown Animation ends

// chatbox

let chatOpener = document.querySelectorAll('.chatOpener')
let chatCloser = document.querySelector('#chatCloser')
let chatBox    = document.querySelectorAll('.chatBox')
// let chatImg    = document.querySelector('.artimage')
let clicked = true
function chatFull() {
    chatBox.forEach(element => { 
        // let chatFooter    = document.querySelector('.chatBox footer')
        if (clicked) {
            element.classList.add('min-h-full','min-w-full','z-50','top-0','left-0','bg-white')
            // chatFooter.classList.remove('relative')
            // chatFooter.classList.add('absolute')
            // chatFooter.classList.add('bottom-0')
            // chatImg.classList.add('ml-40')
            element.style.left = "0px";
            element.style.top = "0px";
        }else{
            element.classList.remove('min-h-full','min-w-full','z-50','top-0','left-0','bg-white')
            // chatImg.classList.remove('ml-40')
            // chatFooter.classList.remove('absolute')
            // chatFooter.classList.remove('bottom-0')
            // chatFooter.classList.add('relative')
            if (pos4 > window.innerHeight/2) {
                chatBox[0].style.top = "";
                chatBox[0].style.bottom = (chatBox[0].offsetBottom - pos4) + 'px';
            }else{
                chatBox[0].style.bottom = '';
                chatBox[0].style.top = pos4 + 'px';
            }
            chatBoxWidth = chatBox[0].offsetWidth
            if (window.innerWidth - pos3 < chatBoxWidth) {
                chatBox[0].style.right = '0px';
                chatBox[0].style.left  = "";
            }else{
                chatBox[0].style.left = pos3 + 'px';
            }
        }
    });
    clicked = !clicked
}
showOpener(2)
function showOpener(timer) {
    timer = timer*1000
    setTimeout(() => {
        chatOpener[0].classList.toggle('hidden')
    }, timer);
}
setTimeout(() => {
    chatBox[0].classList.toggle('hidden')
}, 5000);
chatOpener[0].addEventListener('click',()=>{
    chatBox[0].classList.remove('min-h-full','min-w-full','z-50','top-0','left-0','bg-white')
    chatBox[0].classList.remove('hidden')
    if (pos4 > window.innerHeight/2) {
        chatBox[0].style.top = "";
        chatBox[0].style.bottom = (chatBox[0].offsetBottom - pos4) + 'px';
    }else{
        chatBox[0].style.bottom = '';
        chatBox[0].style.top = pos4 + 'px';
    }
    chatBoxWidth = chatBox[0].offsetWidth
    if (window.innerWidth - pos3 < chatBoxWidth) {
        chatBox[0].style.right = '0px';
        chatBox[0].style.left  = "";
    }else{
        chatBox[0].style.left = pos3 + 'px';
    }
})
chatCloser.addEventListener('click',()=>{
    chatBox[0].classList.add('hidden')
    
    // chatCloser.parentElement.parentElement.parentElement.classList.toogle('hidden')
})

// chat box draggability code

dragElement(document.getElementsByClassName("chatOpener")[0]);

var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
function dragElement(elmnt) {
    elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    // chatBox.forEach(element=>{
    //     element.classList.remove('bottom-0')
    // })
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    if (pos4 > window.innerHeight/2) {
        chatBox[0].style.top = "";
        chatBox[0].style.bottom = (chatBox[0].offsetBottom - pos4) + 'px';
    }else{
        chatBox[0].style.bottom = '';
        chatBox[0].style.top = pos4 + 'px';
    }
    chatBoxWidth = chatBox[0].offsetWidth
    if (window.innerWidth - pos3 < chatBoxWidth) {
        chatBox[0].style.right = '0px';
        chatBox[0].style.left  = "";
    }else{
        chatBox[0].style.left = pos3 + 'px';
    }
  }
  function closeDragElement() {
    // stop moving when mouse button is released:
    chatBox[0].classList.toggle('hidden')
    // alert('working')
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


//keep the scroll bar down 

let scrolled = false;
const chatmain = document.querySelector('.chatBox main');
var chatscrollH = chatmain.scrollHeight;
setInterval(()=>{
    if (chatscrollH < chatmain.scrollHeight) {
        scrolled = false;
        updateScroll()
        chatscrollH = chatmain.scrollHeight
    }
}, 1000)
function updateScroll(){
    if (!scrolled) {
        chatmain.scrollTop = chatmain.scrollHeight;
    }
}
setInterval(()=>{
    updateScroll()
} , 1000);

chatmain.addEventListener('scroll',()=>{
    scrolled = true;
})