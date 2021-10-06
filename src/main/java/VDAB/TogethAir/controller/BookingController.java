package VDAB.TogethAir.controller;

import VDAB.TogethAir.model.Booking;
import VDAB.TogethAir.services.BookingService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@AllArgsConstructor
public class BookingController {

    private BookingService bookingService;

    @GetMapping("/allBookings")
    public ResponseEntity<List<Booking>> findBookings() throws Exception {
        List<Booking> booking = bookingService.findBookings();
        return new ResponseEntity<>(booking , HttpStatus.OK);
    }

    @GetMapping("/findBooking/{id}")
    public ResponseEntity<Booking> findBookingById(Long id) throws Exception {
        Booking Booking = bookingService.findBookingById(id);
        return new ResponseEntity<>(Booking , HttpStatus.OK);
    }

    @PostMapping("/addBooking")
    public ResponseEntity<Booking> addBooking(@RequestBody Booking Booking){
        Booking newBooking = bookingService.addBooking(Booking);
        return new ResponseEntity<>(newBooking , HttpStatus.OK);
    }

    @PutMapping("/updateBooking")
    public ResponseEntity<Booking> updateBooking(@RequestBody Booking Booking){
        Booking updateBooking = bookingService.updateBooking(Booking);
        return new ResponseEntity<>(updateBooking , HttpStatus.OK);
    }

    @DeleteMapping("/deleteBooking/{id}")
    public ResponseEntity<?>  deleteBooking(@PathVariable("id") Long id) {
        bookingService.deleteBooking(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
