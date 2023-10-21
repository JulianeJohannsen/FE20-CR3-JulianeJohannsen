import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  bookTable(){
    Swal.fire({
      title: 'Call us',
      text: '0123-456789'
    })
  }
}
