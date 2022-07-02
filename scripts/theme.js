const sections = document.querySelectorAll('.slateGray');
const paths = document.querySelectorAll('path.curves');
const button = document.querySelector('.theme-toggler');
const spanTextTheme = document.querySelector('.theme-text');
const navBar = document.querySelector('.navbar')

initTheme();

button.addEventListener('click', e => {

    if(localStorage.getItem('isDarkMode') == 'false'){
        localStorage.setItem('isDarkMode', 'true');
        toggleDarkMode();
    } else {
        localStorage.setItem('isDarkMode', 'false');
        toggleLightMode();
    }

    button.blur();
});


function initTheme(){
    if(localStorage.getItem('isDarkMode') == 'true'){
       toggleDarkMode();
      
   }
   
   if(localStorage.getItem('isDarkMode') == 'false'){
       toggleLightMode();
   }
}

function toggleDarkMode(){
    if(localStorage.getItem('isDarkMode') == 'false'){ return; }

    // waves
    paths.forEach(element =>{
        element.setAttribute('fill', "#2E4053")
    })

    // section slateGray background
    sections.forEach(element =>{
        if(element.classList.contains('slateGray')){
            element.classList.remove('slateGray')
            element.classList.toggle('madison')
        }
    })

    // navBar background
    if(navBar.classList.contains('bg-light')){
        navBar.classList.remove('bg-light');
        navBar.classList.toggle('navBarDark');
    }

    if(navBar.classList.contains('navbar-light')){
        navBar.classList.remove('navbar-light');
        navBar.classList.toggle('navbar-dark');
    }

    document.body.style.backgroundColor = "#212F3D";
    document.querySelector('.active').style.backgroundColor = "darkSlateGrey";
    
    document.querySelectorAll('.text-success').forEach(element =>{
        if(!element.classList.contains('static-check')){
            element.classList.remove('text-success');
            element.classList.toggle('text-white');
        }
    })

    document.querySelectorAll('.text-gray').forEach(element =>{
        if(!element.classList.contains('static-check')){
            element.classList.remove('text-gray');
            element.classList.toggle('text-white');
        }
    })

    document.querySelectorAll('.text-dark').forEach(element =>{
        if(!element.classList.contains('static-white') && !element.classList.contains('static-check')){
            element.classList.remove('text-dark');
            element.classList.toggle('text-light');
        }
    })

    document.querySelectorAll('.text-gray').forEach(element =>{
        if(element.classList.contains('static-check') && !element.classList.contains('static-gray')){
            element.classList.remove('text-gray');
            element.classList.toggle('text-light');
        }
    })


    spanTextTheme.innerHTML = "Dark";
}

function toggleLightMode(){
    if(localStorage.getItem('isDarkMode') == 'true'){ return; }

    // waves
    paths.forEach(element =>{
        element.setAttribute('fill', "#2f4f4f")
    })

    // section slategray background
    sections.forEach(element =>{
        if(element.classList.contains('madison')){
            element.classList.remove('madison')
            element.classList.toggle('slateGray')
        }
    })

    // navBar background
    if(navBar.classList.contains('navBarDark')){
        navBar.classList.remove('navBarDark');
        navBar.classList.toggle('bg-light');
        
    }

    if(navBar.classList.contains('navbar-dark')){
        navBar.classList.remove('navbar-dark');
        navBar.classList.toggle('navbar-light');
    }

    document.body.style.backgroundColor = "#FFFFFF";
    document.querySelector('.active').style.backgroundColor = "#41953c";
    
    document.querySelectorAll('.text-white').forEach(element =>{
        if(!element.classList.contains('static-check')){
            element.classList.remove('text-white');
            element.classList.toggle('text-success');
        }
    })

    document.querySelectorAll('.text-white').forEach(element =>{
        if(!element.classList.contains('static-check')){
            element.classList.remove('text-white');
            element.classList.toggle('text-gray');
        }
    })

    document.querySelectorAll('.text-light').forEach(element =>{
        if(!element.classList.contains('static-white') && !element.classList.contains('static-check')){
            element.classList.remove('text-light');
            element.classList.toggle('text-dark');
        }
    })

    document.querySelectorAll('.text-light').forEach(element =>{
        if(element.classList.contains('static-check')){
            element.classList.remove('text-light');
            element.classList.toggle('text-gray');
        }
    })

    spanTextTheme.innerHTML = "Light";

}
