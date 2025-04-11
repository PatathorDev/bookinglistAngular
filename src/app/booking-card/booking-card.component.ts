import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Booking } from '../booking.service';

@Component({
  selector: 'app-booking-card',
  imports: [CommonModule],
  templateUrl: './booking-card.component.html',
  styleUrl: './booking-card.component.scss'
})
export class BookingCardComponent {
  @Input() booking!: Booking;
  @Output() openModal = new EventEmitter<Booking>();
  onClick(): void {
    this.openModal.emit(this.booking);
  }
}
