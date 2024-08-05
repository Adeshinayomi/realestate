    const times=document.getElementById('times');
    const bar=document.getElementById('bar');
    const ul=document.getElementById('ul');
    const navBtn=document.getElementById('nav-btn');

    const signInBtn=document.querySelector('.sign-in');
    const signup=document.querySelector('.sign-up');
    const signTimes=document.getElementById('sign-times');


    const propDescript= document.querySelector('.prop-description');
    const descript= document.querySelectorAll('.decript');
    const propBtn= document.querySelectorAll('.prop-btn');


    const inputs =document.querySelectorAll('.input');

    inputs.forEach(function(input){

     const btn=input.querySelectorAll('.in-btn');
     const inputvalue=input.querySelector('.value');
     const inTexts=input.querySelectorAll('.input-text');


     
      btn.forEach(function(btn){
        btn.addEventListener('click',function(){

          inputs.forEach(function(item){
            if(item !== input){
              item.classList.remove('show-me')
            }else{
              input.classList.toggle('show-me');
            }
          })
        })
      })
      

     
     inTexts.forEach(function(inText){
      inText.addEventListener('click',function(){
        inputvalue.value=inText.innerHTML
      })
    })
     })
    


      bar.addEventListener('click',function(){
      ul.classList.toggle('show-ul');
      navBtn.classList.toggle('show-navBtn');
      times.style.display='block'
      bar.style.display='none'
      });

      times.addEventListener('click',function(){
        ul.classList.toggle('show-ul');
        navBtn.classList.toggle('show-navBtn');
        times.style.display='none'
        bar.style.display='block'
      });

      signInBtn.addEventListener('click',function(){
        signup.classList.toggle('show-signup');
      });

      signTimes.addEventListener('click',function(){
      signup.classList.toggle('show-signup');
      });

    const swiper = new Swiper('.swiper', {
      // Optional parameters
      loop: true,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable:true,
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    });




    propDescript.addEventListener('click',function(e){
      const id=e.target.dataset.id
        if(id){
          propBtn.forEach(function(propBtn){
            propBtn.classList.remove('active');
            e.target.classList.add('active');
          })

          descript.forEach(function(descript){
            descript.classList.remove('active')
          })

          const element = document.getElementById(id);
          element.classList.add('active');
        }
    });


