import { Component, OnInit } from '@angular/core';
import { CountUpOptions } from 'countup.js';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  // Rolling Numbers
  pickANumber = 500;
  cities = 5;
  vehicles = 400;
  swaps = 690;
  co2 = 3567;
  evLightDistance = 40;
  evLightSwapTime = 5;

  evProSpeed = 110;
  evProSwapTime = 5;

  opts: CountUpOptions = {
    enableScrollSpy: true,
  };

  doThisOnComplete() {
    console.log('complete!');
  }

  /*applyEndVal() {
    this.endVal = Number(this.pickANumber);
  }*/

  useOptions() {
    this.opts = {
      decimalPlaces: 2,
      separator: ':',
      duration: 5,
    };
  }

  resetOptions() {
    this.opts = {
      enableScrollSpy: true,
    };
  }

  // End of Rolling Numbers


  entrypoint:any;

  ngOnInit(): void {

    let steps = document.querySelectorAll('.step');


    const phoneAndSteps = new IntersectionObserver(entries => {
      // Loop over the entries
      entries.forEach(entry => {
        // If the element is visible
        if (entry.isIntersecting) {
          // Add the animation class
          //entry.target.classList.add('fadeinAnimationClass3');
          this.entrypoint = window.scrollY;
          console.log("Entry: ",this.entrypoint)

          window.addEventListener('scroll', (e)=>{

            console.log("It's Here: ", window.scrollY)

            if(window.scrollY > this.entrypoint + 300){

              steps[0].children[0].children[1].classList.add('PathAnimation');
              steps[0].children[0].children[1].classList.add('visible');

              steps[1].classList.add('visible');
              steps[1].classList.add('fadeInAnimation');

              

            }
            else{
              steps[0].children[0].children[1].classList.remove('visible');
              steps[0].children[0].children[1].classList.remove('PathAnimation');
              steps[1].classList.remove('visible');
            }

            if(window.scrollY > this.entrypoint + 400){

              steps[1].children[0].children[1].classList.add('PathAnimation');
              steps[1].children[0].children[1].classList.add('visible');

              steps[2].classList.add('visible');
              steps[2].classList.add('fadeInAnimation');
            }
            else{
              steps[1].children[0].children[1].classList.remove('visible');
              steps[1].children[0].children[1].classList.remove('PathAnimation');
              steps[2].classList.remove('visible');
              steps[1].classList.add('fadeInAnimation');
              
            }


            if(window.scrollY > this.entrypoint + 500){

              steps[2].children[0].children[1].classList.add('PathAnimation');
              steps[2].children[0].children[1].classList.add('visible');

              steps[3].classList.add('visible');
              steps[3].classList.add('fadeInAnimation');
            }
            else{
              steps[2].children[0].children[1].classList.remove('visible');
              steps[2].children[0].children[1].classList.remove('PathAnimation');
              steps[3].classList.remove('visible');
            }

            if(window.scrollY > this.entrypoint + 600){

              steps[3].children[0].children[1].classList.add('PathAnimation');
              steps[3].children[0].children[1].classList.add('visible');


              steps[4].classList.add('visible');
              steps[4].classList.add('fadeInAnimation');
            }
            else{
              steps[3].children[0].children[1].classList.remove('visible');
              steps[3].children[0].children[1].classList.remove('PathAnimation');
              steps[4].classList.remove('visible');
            }
      
          })


        }
      });
    });
    

    phoneAndSteps.observe(document.querySelector('.phoneAndSteps')!);


    let productNavs = document.querySelectorAll('.productNav');
    let products = document.querySelectorAll(".product");
    
    
    productNavs.forEach((ele:any)=>{
      ele.addEventListener('click', (e:any)=>{
        console.log(e.target.getAttribute("productNumber"));

        //Remove SliderActive from all
        productNavs.forEach((ele:any)=>{
          ele.classList.remove('sliderActive');
        })

        //add Slideractive
        e.target.classList.add('sliderActive');

        //Remove Visible from all
        products.forEach((ele:any)=>{
          ele.classList.remove('productVisible');
        })

        //Add Visible
        products[e.target.getAttribute("productNumber") - 1].classList.add('productVisible');


      })
    })

    
  }

}
