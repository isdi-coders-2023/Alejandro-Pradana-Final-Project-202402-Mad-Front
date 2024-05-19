import { Component } from '@angular/core';
import { LessonsComponent } from '../lessons/lessons.component';
import { FilterComponent } from "../filter/filter.component";
import { HeaderComponent } from '../header/header.component';

@Component({
    selector: 'quest-home',
    standalone: true,
    template: `
    <quest-header></quest-header>
    <quest-filter></quest-filter>
    <quest-lessons></quest-lessons>
  `,
    styles: ``,
    imports: [LessonsComponent, FilterComponent, HeaderComponent]
})
export default class HomeComponent {

}
