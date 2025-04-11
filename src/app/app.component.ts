import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { BookingModalComponent } from './booking-modal/booking-modal.component';
import { BookingCardComponent } from './booking-card/booking-card.component';
import { BookingService } from './booking.service';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    BookingListComponent,
    BookingCardComponent,
    BookingModalComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  title = 'bookinglist';
  constructor(private bookingService: BookingService){}
  ngOnInit(): void{
    this.bookingService.refreshBookings();
  }
  onRefreshClicked(): void {
    this.bookingService.refreshBookings();
  }  
}
