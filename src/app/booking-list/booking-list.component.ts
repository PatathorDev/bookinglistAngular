import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { BookingService, Booking } from '../booking.service';
import { BookingCardComponent } from '../booking-card/booking-card.component';
import { BookingModalComponent } from '../booking-modal/booking-modal.component';

@Component({
  selector: 'app-booking-list',
  imports: [
    CommonModule,
    BookingCardComponent,
    BookingModalComponent
  ],
  templateUrl: './booking-list.component.html',
  styleUrl: './booking-list.component.scss'
})
export class BookingListComponent implements OnInit {
  bookings$!: Observable<Booking[]>;
  selectedBooking: Booking | null = null;

  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    this.bookings$ = this.bookingService.getBookings();
  }
  onSelectBooking(booking: Booking): void {
    this.selectedBooking = booking;
  }
  closeModal() {
    this.selectedBooking = null;
  }
}
