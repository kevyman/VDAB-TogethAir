package VDAB.TogethAir.services;

import VDAB.TogethAir.model.Booking;
import VDAB.TogethAir.repository.BookingRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@AllArgsConstructor
public class BookingService {

    private BookingRepository bookingRepository;

    public Booking addBooking(Booking booking){
        return bookingRepository.save(booking);
    }

    public Booking updateBooking(Booking booking){
        return bookingRepository.save(booking);
    }

    public Booking findBookingById(Long id) throws Exception {
        return bookingRepository.findById(id)
                .orElseThrow(()-> new Exception("User by id " + id + " was not found."));
    }

    @Transactional
    public void deleteBooking(Long id){
        bookingRepository.deleteById(id);
    }

    public List<Booking> findBookings() {
        return bookingRepository.findAll();
    }
}
