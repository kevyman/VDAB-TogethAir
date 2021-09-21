package VDAB.TogethAir.controller;

import VDAB.TogethAir.model.Flight;
import VDAB.TogethAir.services.FlightService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
public class FlightController {

    private FlightService flightService;

    @GetMapping("/allFlights")
    public ResponseEntity<List<Flight>> getAllFlights() {
        List<Flight>flights=flightService.findAllFlights();
        return new ResponseEntity<>(flights, HttpStatus.OK);
    }

    @GetMapping("/findFlight/{id}")
    public ResponseEntity<Flight> findFlightById(Long id) throws Exception{
        Flight flight = flightService.findFlightById(id);
        return new ResponseEntity<>(flight,HttpStatus.OK);
    }

    @PostMapping("/addFlight")
    public ResponseEntity<Flight> addFlight(@RequestBody Flight flight){
        Flight newFlight = flightService.addFlight(flight);
        return new ResponseEntity<>(newFlight, HttpStatus.OK);
    }

    @PutMapping("/updateFlight")
    public ResponseEntity<Flight> updateFlight(@RequestBody Flight flight){
        Flight updateFlight = flightService.updateFlight(flight);
        return new ResponseEntity<>(updateFlight, HttpStatus.OK );
    }

    @DeleteMapping("/deleteFlight/{id}")
    public ResponseEntity<?> deleteFlight(@PathVariable("id") Long id){
        flightService.deleteFlight(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
