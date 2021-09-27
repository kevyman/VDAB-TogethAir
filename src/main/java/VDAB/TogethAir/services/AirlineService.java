package VDAB.TogethAir.services;

import VDAB.TogethAir.model.Airline;
import VDAB.TogethAir.repository.AirlineRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor

public class AirlineService {

    private AirlineRepository airlineRepository;

    public List<Airline> findAllAirlines() {return airlineRepository.findAll();}

}
