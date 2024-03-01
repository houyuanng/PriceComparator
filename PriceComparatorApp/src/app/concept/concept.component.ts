import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ConceptService } from '../service/concept.service';

@Component({
  selector: 'app-concept',
  standalone: true,
  imports: [ 
    HttpClientModule
  ],
  templateUrl: './concept.component.html',
  styleUrl: './concept.component.css'
})
export class ConceptComponent {

  constructor(private conceptService: ConceptService) { }

  ngOnInit() {
    console.log(this.conceptService.getHeroes());
  }
}
