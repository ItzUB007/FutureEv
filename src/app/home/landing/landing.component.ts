import { Component, OnInit } from '@angular/core';
declare var $: any;


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit {

  ngOnInit(): void {
    
    
    document.querySelectorAll('.nav-link').forEach((ele:any)=>{
      
      

      ele.addEventListener('click', (e:any)=>{
        $(".navbar-nav").find(".active").removeClass("active");
        e.target.classList.add('active');
      })

    })
    

  }

  

}
