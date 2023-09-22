document.addEventListener('DOMContentLoaded', () => {  
    let folders = document.querySelectorAll('.tree__folder');
    folders.forEach(folder => {

        folder.addEventListener('click', () => {
            folder.classList.toggle('open');
        });
        
    });
});