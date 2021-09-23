package VDAB.TogethAir.repository;

import VDAB.TogethAir.model.Airports;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AirportRepository extends JpaRepository <Airports, Long> {

}
