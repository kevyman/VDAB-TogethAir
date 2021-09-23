package VDAB.TogethAir.services;

import static org.junit.jupiter.api.Assertions.assertSame;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.any;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import VDAB.TogethAir.model.Flight;
import VDAB.TogethAir.repository.FlightRepository;

import java.time.LocalDateTime;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;

@ContextConfiguration(classes = {FlightService.class})
@ExtendWith(SpringExtension.class)
class FlightServiceTest {
    @MockBean
    private FlightRepository flightRepository;

    @Autowired
    private FlightService flightService;

    @Test
    void testAddFlight() {
        Flight flight = new Flight();
        flight.setDepartureAirport("Departure Airport");
        flight.setPrice(10.0);
        flight.setDestinationAirport("Destination Airport");
        flight.setDepartureTime(LocalDateTime.of(1, 1, 1, 1, 1));
        flight.setFlightDuration(1L);
        flight.setDestinationTime(LocalDateTime.of(1, 1, 1, 1, 1));
        when(this.flightRepository.save((Flight) any())).thenReturn(flight);

        Flight flight1 = new Flight();
        flight1.setDepartureAirport("Departure Airport");
        flight1.setPrice(10.0);
        flight1.setDestinationAirport("Destination Airport");
        flight1.setDepartureTime(LocalDateTime.of(1, 1, 1, 1, 1));
        flight1.setFlightDuration(1L);
        flight1.setDestinationTime(LocalDateTime.of(1, 1, 1, 1, 1));
        assertSame(flight, this.flightService.addFlight(flight1));
        verify(this.flightRepository).save((Flight) any());
        assertTrue(this.flightService.findAllFlights().isEmpty());
    }

    @Test
    void testDeleteFlight() {
        doNothing().when(this.flightRepository).deleteById((Long) any());
        this.flightService.deleteFlight(123L);
        verify(this.flightRepository).deleteById((Long) any());
        assertTrue(this.flightService.findAllFlights().isEmpty());
    }
}

