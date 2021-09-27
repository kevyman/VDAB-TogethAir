package VDAB.TogethAir.repository;

import VDAB.TogethAir.model.Airport;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AirportRepository extends JpaRepository <Airport, Long> {

    Airport findAirportByName(String name);
}
