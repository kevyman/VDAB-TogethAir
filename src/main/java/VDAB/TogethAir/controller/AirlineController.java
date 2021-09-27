package VDAB.TogethAir.controller;

import VDAB.TogethAir.model.Airline;
import VDAB.TogethAir.model.Airport;
import VDAB.TogethAir.services.AirlineService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
public class AirlineController {

    private final AirlineService airlineService;

    @GetMapping("/allAirlines")
    public ResponseEntity<List<Airline>> getAllAirlines() {
        List<Airline> airline = airlineService.findAllAirlines();
        return new ResponseEntity<>(airline, HttpStatus.OK);
    }
}
