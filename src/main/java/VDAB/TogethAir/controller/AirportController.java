package VDAB.TogethAir.controller;

import VDAB.TogethAir.model.Airport;
import VDAB.TogethAir.model.Flight;
import VDAB.TogethAir.services.AirportService;
import VDAB.TogethAir.services.FlightService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor

public class AirportController {


    private final AirportService airportService;

    @GetMapping("/allAirports")
    public ResponseEntity<List<Airport>> getAllAirports() {
        List<Airport> airports = airportService.findAllAirports();
        return new ResponseEntity<>(airports, HttpStatus.OK);
    }

    @GetMapping("/findAirportByName/{airport}")
    public ResponseEntity<Airport> findAirportByName(@PathVariable String airport) {
        Airport findAirport = airportService.findByName(airport);
        return new ResponseEntity<Airport>(findAirport, HttpStatus.OK);
    }


}


