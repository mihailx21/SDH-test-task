// hiden menu showing on button click
let menuButton = document.getElementsByClassName('aside-hidden-menu')[0]
menuButton.onclick = ()=>{
    let menuItem = document.getElementsByTagName('aside')[0]
    menuItem.style.left = 0;
    menuItem.style.zIndex = 1;
    menuItem.onclick = ()=>{
        menuItem.style.left = '-300px';
    }
};

// modal window
let filters = document.getElementsByClassName('filter-left-style')[0]
filters.onclick = ()=> {
    let modalWindow = document.getElementById('modal-window')
    modalWindow.style.display = 'flex';
    let confirm = document.getElementById('confirm-button');
    confirm.onclick = (ev)=>{
        ev.stopPropagation();
        modalWindow.style.display = 'none';
    }
}