import { Component } from '@angular/core';
import { ConceptComponent } from "./concept/concept.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    standalone: true,
    imports: [ConceptComponent]
})
export class AppComponent {
  title = 'PriceComparatorApp';
}
