import { Component } from '@angular/core';
import { LessonsComponent } from '../lessons/lessons.component';
import { FilterComponent } from "../filter/filter.component";
import { HeaderComponent } from '../header/header.component';
import { SliderComponent } from "../slider/slider.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'quest-home',
    standalone: true,
    template: `
    <quest-header></quest-header>
    <quest-filter></quest-filter>
    <quest-slider>
    <quest-lessons></quest-lessons>
    </quest-slider>
    <quest-footer></quest-footer>
  `,
    styles: ``,
    imports: [LessonsComponent, FilterComponent, HeaderComponent, SliderComponent, FooterComponent]
})
export default class HomeComponent {

}
