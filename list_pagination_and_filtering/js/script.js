
//global variable
const page = document.querySelector('.page');
const studentItem = document.querySelectorAll('.student-item');
const header = document.querySelector('.page-header');


// Show items per page
function showPage(list, page = 1, pageLength = 10){
   list.forEach((item, index) => {
      (index >= ((page - 1) * pageLength) && index <= (page * pageLength - 1)) ? item.style.display = 'block' : item.style.display = 'none';
  });
}


// add page numbers and event listener
function appendPageLinks(list){
   const numPage = parseInt(list.length/10, 10)+1;

   const div = document.createElement('div');
   div.className = 'pagination';
   page.appendChild(div);
   const pagination = document.querySelector('.pagination');

   let paginationInnerHTML = '<ul><li><a class="active" href="#">1</a></li>';
   for(let i=2; i<=numPage; i++){
      paginationInnerHTML += `<li><a href="#">${i}</a></li>`;
   }
   paginationInnerHTML += '</ul>';
   pagination.innerHTML = paginationInnerHTML;

   document.querySelectorAll('.pagination a').forEach(elem => {
      elem.addEventListener('click', (e) => {
         document.querySelectorAll('.pagination a').forEach(el => {
            el.classList.remove('active');
         });
         e.target.className = 'active';
         showPage(list, e.target.textContent);
      });
   });

}

//create input for search
function createInput() {
   const inputDiv = document.createElement('div');
   inputDiv.className = 'student-search';
   inputDiv.innerHTML = '<input placeholder="Search for students...">';
   header.appendChild(inputDiv);
}


function search(e) {
   if(e.target.tagName === 'INPUT'){
      const filtered = [];
      const value = e.target.value.toLowerCase();
      studentItem.forEach(el => {
         if(el.children[0].children[1].textContent.toLowerCase().includes(value)){
            filtered.push(el);
         }
      });
      if(filtered.length >= 1){
         clear();
         remove();
         showPage(filtered);
         appendPageLinks(filtered);
      } else {
         
         clear();
         remove();
         const message = document.createElement('p');
         message.className = 'message';
         message.textContent = 'Sorry, no students were found.';
         page.appendChild(message);
      }
   }
}

// hide all items
function clear(){
   studentItem.forEach(el => {
      el.style.display = 'none';
   });
}

//remove pagination and message for no 'no results'
function remove(){
       if (page.lastElementChild.className === 'pagination' || page.lastElementChild.className === 'message') {
        page.removeChild(page.lastElementChild);
    }
}

function init(){
showPage(studentItem, 1, 10);
appendPageLinks(studentItem);
createInput();
}

//start app
init();

//addeventlistener for search input
document.addEventListener('keyup', search);