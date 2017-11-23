import { Component } from '@angular/core';
import {MovieService} from './services/movie.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [MovieService] //add movie service ==> go to moviescomponent.ts
  
})
export class AppComponent  { }

