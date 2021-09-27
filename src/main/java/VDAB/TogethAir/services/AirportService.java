package VDAB.TogethAir.services;

import VDAB.TogethAir.model.Airport;
import VDAB.TogethAir.repository.AirportRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
@AllArgsConstructor

public class AirportService {

    private AirportRepository airportRepository;

    public List<Airport> findAllAirports() {return airportRepository.findAll();}

    public Airport findByName(String airport) {
        return airportRepository.findAirportByName(airport);
    }
}
