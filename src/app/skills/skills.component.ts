import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  // ngAfterViewInit() {
  //   const spans = document.querySelectorAll('.progress-bar span');
  //   spans.forEach((span: HTMLElement) => {
  //     span.style.width = span.dataset.width;
  //   });

  //   window.addEventListener('scroll', () => {
  //     const nav = document.querySelector('nav');
  //     if (window.scrollY > 100) {
  //       nav.classList.add('nav-scroll');
  //     } else {
  //       nav.classList.remove('nav-scroll');
  //     }
  //   });
  // }
}
