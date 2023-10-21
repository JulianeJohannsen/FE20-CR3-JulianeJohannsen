import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  bookTable(){
    Swal.fire({
      title: 'Call us',
      text: '0123-456789'
    })
  }
}
