package VDAB.TogethAir.repository;

import VDAB.TogethAir.model.Booking;
import VDAB.TogethAir.model.user.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BookingRepository extends JpaRepository<Booking, Long> {

    @Query(value ="Select b from Booking b where b.person.id = :id")
    List<Booking> findBookingByPerson(@Param("id") Long id);
}
