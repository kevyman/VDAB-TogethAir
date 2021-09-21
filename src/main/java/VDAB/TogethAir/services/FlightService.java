package VDAB.TogethAir.services;

import VDAB.TogethAir.model.Flight;
import VDAB.TogethAir.repository.FlightRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@AllArgsConstructor

public class FlightService {

    private FlightRepository flightRepository;

    public  Flight addFlight(Flight flight) {return flightRepository.save(flight);}

    public List<Flight> findAllFlights(){return flightRepository.findAll();}

    public Flight updateFlight(Flight flight) {return flightRepository.save(flight);}

    public Flight findFlightById(Long id) throws Exception{
        return flightRepository.findById(id)
                .orElseThrow(()-> new Exception("Flight by id " + id + " was not found."));
    }

    @Transactional
    public void deleteFlight(Long id) { flightRepository.deleteById(id);}

}
