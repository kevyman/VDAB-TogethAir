package VDAB.TogethAir.repository;

import VDAB.TogethAir.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepository extends JpaRepository<Booking, Long> {
}
