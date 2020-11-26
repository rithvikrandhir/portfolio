gsap.registerPlugin(ScrollTrigger);

let question1 = document.querySelector('.question-1');
let question2 = document.querySelector('.question-2');
let question3 = document.querySelector('.question-3');
let question1image = document.querySelector('.question-1 .image');
let question2image = document.querySelector('.question-2 .image');
let question3image = document.querySelector('.question-3 .image');
let q1content = document.querySelector('.about-me-container');
let q2content = document.querySelector('.work-container');
let q3content = document.querySelector('.other-container');
let q1interaction = document.querySelector('.question-1 .interaction');
let q2interaction = document.querySelector('.question-2 .interaction');
let q3interaction = document.querySelector('.question-3 .interaction');
let q1interaction_mobile = document.querySelector('.question-1 .interaction-mobile');
let q2interaction_mobile = document.querySelector('.question-2 .interaction-mobile');
let q3interaction_mobile = document.querySelector('.question-3 .interaction-mobile');
let flagQ1 = true;
let flagQ2 = true;
let flagQ3 = true;
q1content.style.display = 'none';
q2content.style.display = 'none';
q3content.style.display = 'none';
question1.addEventListener('mouseover', ()=>{
        gsap.to('.question-1 .image', 0.3, {backgroundRepeat:'repeat-x'});
        gsap.to('.question-1 .interaction', 0.3, {opacity: 1});
});
question1.addEventListener('mouseout', ()=>{
        if(flagQ1 === true){
            gsap.to('.question-1 .image', 0.5, {backgroundRepeat:'no-repeat'});
            gsap.to('.question-1 .interaction', 0.3, {opacity: 0});
        }
});
question2.addEventListener('mouseover', ()=>{
        // gsap.to('.question-2 .image', 0.3, {opacity:1, ease:Power2.easeOut});
        gsap.to('.question-2 .image', 0.3, {backgroundRepeat:'repeat-x'});
        gsap.to('.question-2 .interaction', 0.3, {opacity: 1});
});
question2.addEventListener('mouseout', ()=>{
    if(flagQ2 === true){
        // gsap.to('.question-2 .image', 0.5, {opacity:0.3, ease:Power2.easeIn});
        gsap.to('.question-2 .image', 0.5, {backgroundRepeat:'no-repeat'});
        gsap.to('.question-2 .interaction', 0.3, {opacity: 0});
    }
        
});
question3.addEventListener('mouseover', ()=>{

        // gsap.to('.question-3 .image', 0.3, {opacity:1, ease:Power2.easeOut});
        gsap.to('.question-3 .image', 0.3, {backgroundRepeat:'repeat-x'});
        gsap.to('.question-3 .interaction', 0.3, {opacity: 1});
});
question3.addEventListener('mouseout', ()=>{
    if(flagQ3 === true){
        // gsap.to('.question-3 .image', 0.5, {opacity:0.3, ease:Power2.easeIn});
        gsap.to('.question-3 .image', 0.5, {backgroundRepeat:'no-repeat'});
        gsap.to('.question-3 .interaction', 0.3, {opacity: 0});
    }
        
});



question1.addEventListener('click', ()=>{
    
    if(flagQ2 === false || flagQ3 === false){
        if(flagQ2 === false){
            if(window.innerWidth <= 800){
                gsap.to('.question-1', 0.3, {height: '90vh'});
                gsap.to('.question-2', 0.3, {height: 'auto'});
            } else {
                gsap.to('.question-1', 0.3, {width: '90vw'});
                gsap.to('.question-2', 0.3, {width: 'auto'});
            }
            gsap.to('.work', 0.1, {opacity:0, ease:Power2.easeIn});
            // gsap.to('.question-2 .image', 0.5, {opacity:0.3, ease:Power2.easeIn});
            flagQ2 = !flagQ2;
            q2content.style.display = 'none';
            question2image.style.display = 'block';
        } else {
            
            if(window.innerWidth <= 800){
                gsap.to('.question-1', 0.3, {height: '90vh'});
                
                gsap.to('.question-3', 0.3, {height: 'auto'});
            } else {
                gsap.to('.question-1', 0.3, {width: '90vw'});
                gsap.to('.question-3', 0.3, {width: 'auto'});
            }
            
            gsap.to('.question-2', 0.3, {width: 'auto'});
            gsap.to('.question-3', 0.3, {width: 'auto'});
            // gsap.to('.question-3 .image', 0.5, {opacity:0.3, ease:Power2.easeIn});
            flagQ3 = !flagQ3;
            gsap.to('.other-stuff p', 0.5, {opacity: 0});
            q3content.style.display = 'none';
            // question3image.style.display = 'block';
        }
        q1content.style.display = 'grid';
        gsap.to('.about-me p', 0.5, {opacity: 1});
        // question1.style.backgroundImage = `url('../Assets/q1.png')`;
    } else {
        if(flagQ1){
            q1content.style.display = 'grid';
            gsap.to('.question-1 .image', 0.3, {opacity: 0.2});
            if(window.innerWidth < 800){
                gsap.to('.question-1', 0.3, {height: '90vh'});
            } else {
                gsap.to('.question-1', 0.3, {width: '90vw'});
            }
            gsap.to('.about-me p', 0.3, {display: 'inherit'});
            gsap.to('.about-me p', 0.5, {opacity: 1});
         
        } else {

            gsap.to('.question-1 .image', 0.3, {opacity: 1});
            if(window.innerWidth < 800){
                gsap.to('.question-1', 0.3, {height: 'auto'});
            } else {
                gsap.to('.question-1', 0.3, {width: 'auto'});
            }
            gsap.to('.about-me p', 0.1, {opacity: 0});
            q1content.style.display = 'none';
        }
    }
    if(flagQ1 && window.innerWidth <= 800){
        // question1image.style.display = 'none';
    } else {
        // question1image.style.display = 'block';
    }
    if(flagQ1 ){
        q1interaction.innerHTML = "Click to collapse";
        q1interaction_mobile.innerHTML = "Tap to collapse";
    } else {
        q1interaction.innerHTML = "Click to expand";
        q1interaction_mobile.innerHTML = "Tap to expand";
    }
    flagQ1 = !flagQ1;
});
question2.addEventListener('click', ()=>{
    
    if(flagQ1 === false || flagQ3 === false){
        if(flagQ1 === false){
            
            let tl = gsap.timeline();
            if(window.innerWidth <= 800){
                tl.to('.question-2', 0.3, {height: '90vh'},0.1)
                  .to('.question-1', 0.3, {height: 'auto'}, 0);
            } else {
                tl.to('.question-2', 0.3, {width: '90vw'}, 0.1)
                  .to('.question-1', 0.3, {width: 'auto'}, 0);
            }
           
            // tl.to('.question-2', 0.5, {width: '90vw'}, 0.1)
            //   .to('.question-1', 0.1, {width: 'auto'}, 0)
              tl.to('.work', 0.1, {opacity:1, ease:Power2.easeIn}, 0)
            //   .to('.question-1 .image', 0.1, {opacity:0.3, ease:Power2.easeIn}, 0)
              .to('.about-me p', 0.1, {opacity:0, ease:Power2.easeIn}, 0);
            //   .to('.question-2 .image', 0.5, {opacity:0.3, ease:Power2.easeIn});
              
            tl.play();
            // gsap.to()
            flagQ1 = !flagQ1;
            // question1image.style.display = 'block';
            q1content.style.display = 'none';
           
        } else {
            let tl = gsap.timeline();
            if(window.innerWidth <= 800){
                tl.to('.question-2', 0.3, {height: '90vh'},0.1)
                  .to('.question-3', 0.3, {height: 'auto'}, 0);
            } else {
                tl.to('.question-2', 0.3, {width: '90vw'}, 0.1)
                  .to('.question-3', 0.3, {width: 'auto'}, 0);
            }
            // tl.to('.question-2', 0.5, {width: '90vw'}, 0.1)
            //   .to('.work', 0.1, {opacity:1, ease:Power2.easeIn}, 0)
              tl.to('.other-stuff p', 0.5, {opacity: 0}, 0)
              .to('.question-3', 0.1, {width: 'auto'}, 0);
              
            tl.play();
           
            flagQ3 = !flagQ3;
            // question3image.style.display = 'block';
            q3content.style.display = 'none';
            
        }
        gsap.to('.work', 0.1, {opacity:1, ease:Power2.easeIn}, 0);
        q2content.style.display = 'grid';

    } else {
        if(flagQ2){
           
            q2content.style.display = 'grid';
            gsap.to('.question-2 .image', 0.3, {opacity: 0.1});
            if(window.innerWidth < 800){
                gsap.to('.question-2', 0.3, {height: '90vh'});
            } else {
                gsap.to('.question-2', 0.3, {width: '90vw'});
            }
            
            gsap.to('.work', 0.1, {opacity:1, ease:Power2.easeIn}, 0);
        } else {
            gsap.to('.question-2 .image', 0.3, {opacity: 1});
            if(window.innerWidth < 800){
                gsap.to('.question-2', 0.3, {height: 'auto'});
            } else {
                gsap.to('.question-2', 0.3, {width: 'auto'});
            }
            gsap.to('.work', 0.1, {opacity:0, ease:Power2.easeIn}, 0);
            q2content.style.display = 'none';
        }
        
    }
    if(flagQ2 && window.innerWidth <= 800){
        // question2image.style.display = 'none';
    } else {
        // question2image.style.display = 'block';
    }
    if(flagQ2){
        q2interaction.innerHTML = "Click to collapse";
        q2interaction_mobile.innerHTML = "Tap to collapse";
    } else {
        q2interaction.innerHTML = "Click to expand";
        q2interaction_mobile.innerHTML = "Tap to expand";
    }
    flagQ2 = !flagQ2;
});
question3.addEventListener('click', ()=>{
    
    if(flagQ1 === false || flagQ2 === false){
        if(flagQ1 === false){
           
            let tl = gsap.timeline();
            if(window.innerWidth <= 800){
                tl.to('.question-3', 0.3, {height: '90vh'},0)
                  .to('.question-1', 0.3, {height: 'auto'}, 0);
            } else {
                tl.to('.question-3', 0.3, {width: '90vw'}, 0)
                  .to('.question-1', 0.3, {width: 'auto'}, 0);
            }
            // tl.to('.question-3', 0.5, {width: '90vw'}, 0)
            //   .to('.question-2', 0.1, {width: 'auto'}, 0)
              tl.to('.question-1', 0.1, {width: 'auto'}, 0)
            //   .to('.question-1 .image', 0.1, {opacity:0.3, ease:Power2.easeIn}, 0)
              .to('.about-me p', 0.1, {opacity:0, ease:Power2.easeIn}, 0);

            tl.play();
            flagQ1 = !flagQ1;
            q1content.style.display = 'none';
            question1image.style.display = 'block';
        } else {
            let tl = gsap.timeline();
            if(window.innerWidth <= 800){
                tl.to('.question-3', 0.3, {height: '90vh'},0.1)
                  .to('.question-2', 0.3, {height: 'auto'}, 0);
            } else {
                tl.to('.question-3', 0.3, {width: '90vw'}, 0.1)
                  .to('.question-2', 0.3, {width: 'auto'}, 0);
            }
            
              tl.to('.work', 0.1, {opacity:0, ease:Power2.easeIn}, 0);

            tl.play();
            // gsap.to('.question-2 .image', 0.5, {opacity:0.3, ease:Power2.easeIn});
            flagQ2 = !flagQ2;
            q2content.style.display = 'none';
        }
        q3content.style.display = 'grid';
        // question2image.style.display = 'block';
        gsap.to('.other-stuff p', 0.5, {opacity: 1});
        
    } else {
        if(flagQ3){
            q3content.style.display = 'grid';
            gsap.to('.question-3 .image', 0.3, {opacity: 0.1});
            if(window.innerWidth < 800){
                gsap.to('.question-3', 0.3, {height: '90vh'});
            } else {
                gsap.to('.question-3', 0.3, {width: '90vw'});
            }
            gsap.to('.other-stuff p', 0.5, {opacity: 1});
        } else {
            gsap.to('.question-3 .image', 0.3, {opacity: 1});
            if(window.innerWidth < 800){
                gsap.to('.question-3', 0.3, {height: 'auto'});
            } else {
                gsap.to('.question-3', 0.3, {width: 'auto'});
            }
            gsap.to('.other-stuff p', 0.5, {opacity: 0});
            q3content.style.display = 'none';
        }
    }
    if(flagQ3 && window.innerWidth <= 800){
        // question3image.style.display = 'none';
    } else {
        // question3image.style.display = 'block';
    }
    if(flagQ3){
        q3interaction.innerHTML = "Click to collapse";
        q3interaction_mobile.innerHTML = "Tap to collapse";
    } else {
        q3interaction.innerHTML = "Click to expand";
        q3interaction_mobile.innerHTML = "Tap to expand";
    }
    flagQ3 = !flagQ3;
});
