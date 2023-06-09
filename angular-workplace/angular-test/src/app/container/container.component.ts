import { Component ,OnInit} from '@angular/core';
import { CalixInputComponent } from 'calix-input-ng';

@Component({
  standalone:true,
  imports :[CalixInputComponent],
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


}
