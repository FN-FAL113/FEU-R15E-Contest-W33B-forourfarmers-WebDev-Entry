const navLink = document.querySelectorAll('.nav-link');
const currentPageRaw = location.pathname.split('/').slice(-1).toString();
const currentPage = currentPageRaw == 'index.html' ? 'home' : currentPageRaw.substring(0,  currentPageRaw.length - 5);

navLink.forEach(element => {
    if(!element.classList.contains('active') && element.textContent.toLowerCase() == currentPage){
        element.classList.toggle('active');
        element.classList.remove('text-sucess');
        element.classList.toggle('text-light');
    } else if(element.parentElement.parentElement.classList.contains('navbar-nav')) {
        element.classList.remove('active');
       
        if(element.classList.contains('text-light')){
          
            element.classList.remove('text-light');
            element.classList.toggle('text-success');
        }
    }
});