//

const global = {
      currentPage : window.location.pathname
};

//init App
function init() {
    switch(global.currentPage) {
      case '/':
        console.log('Home');
        break;
      
      case '/shows.html':
        console.log('Shows');
        break;  
    }
} 

document.addEventListener('DOMContentLoaded', init);



