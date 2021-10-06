package VDAB.TogethAir.repository;

import VDAB.TogethAir.model.Booking;
import VDAB.TogethAir.model.user.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface BookingRepository extends JpaRepository<Booking, Long> {

    List<Booking> findBookingByPerson(Person person);
}
