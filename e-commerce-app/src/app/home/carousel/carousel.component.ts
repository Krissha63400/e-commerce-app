import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  @ViewChild('carousel', { static: true }) carousel!: ElementRef;

  // Function to handle the previous button click
  carouselPrev() {
    const carouselItems = this.carousel.nativeElement.getElementsByClassName('carousel-item');
    const activeItem = this.carousel.nativeElement.getElementsByClassName('active')[0];
    let prevItem;

    if (activeItem.previousElementSibling) {
      prevItem = activeItem.previousElementSibling;
    } else {
      prevItem = carouselItems[carouselItems.length - 1];
    }

    activeItem.classList.remove('active');
    prevItem.classList.add('active');
  }

  // Function to handle the next button click
  carouselNext() {
    const carouselItems = this.carousel.nativeElement.getElementsByClassName('carousel-item');
    const activeItem = this.carousel.nativeElement.getElementsByClassName('active')[0];
    let nextItem;

    if (activeItem.nextElementSibling) {
      nextItem = activeItem.nextElementSibling;
    } else {
      nextItem = carouselItems[0];
    }

    activeItem.classList.remove('active');
    nextItem.classList.add('active');
  }
}
