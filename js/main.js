






/*============================ aside =============================*/

const nav = document.querySelector('.nav'),
   navList = nav.querySelectorAll("li"),
   totalNavList = navList.length,
   allSection = document.querySelectorAll(".section"),
   totalSection = allSection.length;
   for(let i = 0; i < totalNavList; i++){
      const a = navList[i].querySelector("a");
      a.addEventListener("click",function(){
         for(let j = 0; j < totalNavList; j++){
            navList[j].querySelector("a").classList.remove("active");
         }
         this.classList.add("active");
         if(window.innerWidth < 1200){
            asideSectionTogglerBtn();
         }
      })
   }

const navTogglertBtn = document.querySelector(".nav-toggler"),
   aside = document.querySelector(".aside");
   navTogglertBtn.addEventListener("click",()=>{
      asideSectionTogglerBtn();
   })
   function asideSectionTogglerBtn(){
      aside.classList.toggle("open");
      navTogglertBtn.classList.toggle("open");
      for(let i = 0; i < totalSection; i++) {
         allSection[i].classList.toggle("open");
      }
   }







   
   
const sections = document.querySelectorAll(".section[id]");

function scrollActive (){
   const scrollY = window.scrollY;

   sections.forEach(current => {
      const sectionHeight = current.offsetHeight
      const sectionTop = current.offsetTop - 50;
      sectionId = current.getAttribute("id");

      if(scrollY > sectionTop && scrollY < sectionTop + sectionHeight) {
         document.querySelector(".nav a[href*=" + sectionId + "]").classList.add("active");
      }else {
         document.querySelector(".nav a[href*=" + sectionId + "]").classList.remove("active");
      }
   }); 
}

window.addEventListener("scroll", scrollActive)









// hide nav_var on scroll 































// formulario


const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');
const send = document.getElementById('btn-send');


send.addEventListener('click', function(event) {
  let errors = [];
  if (nameInput.value.trim() === '') {
    errors.push('El campo nombre es requerido');
    nameInput.classList.add('error');
    document.getElementById('nameError').textContent = 'Por favor ingrese un nombre';
  } else {
    nameInput.classList.remove('error');
    document.getElementById('nameError').textContent = '';
  }

  if (emailInput.value.trim() === '') {
    errors.push('El campo email es requerido');
    emailInput.classList.add('error');
    document.getElementById('emailError').textContent = 'Por favor ingrese un email';
  } else if (!isValidEmail(emailInput.value)) {
    errors.push('El campo email es inválido');
    emailInput.classList.add('error');
    document.getElementById('emailError').textContent = 'Por favor ingrese un email';
  } else {
    emailInput.classList.remove('error');
    document.getElementById('emailError').textContent = '';
  }

  if (subjectInput.value.trim() === '') {
    errors.push('El campo asunto es requerido');
    subjectInput.classList.add('error');
    document.getElementById('subjectError').textContent = 'Por favor ingrese un asunto';
  } else {
    subjectInput.classList.remove('error');
    document.getElementById('subjectError').textContent = '';
  }

  if (messageInput.value.trim() === '') {
    errors.push('El campo mensaje es requerido');
    messageInput.classList.add('error');
    document.getElementById('messageError').textContent = 'Por favor ingrese un mensaje';
  } else {
    messageInput.classList.remove('error');
    document.getElementById('messageError').textContent = '';
  }

  if (errors.length > 0) {
    event.preventDefault();
  }
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}














