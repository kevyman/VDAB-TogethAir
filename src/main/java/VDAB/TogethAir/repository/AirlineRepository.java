package VDAB.TogethAir.repository;

import VDAB.TogethAir.model.Airline;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AirlineRepository extends JpaRepository <Airline, Long> {

}
