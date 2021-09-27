package VDAB.TogethAir.model;

import VDAB.TogethAir.enums.FlightClass;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;


@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Flight {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    @JoinColumn(name="fk_departure_airport_id")
    private Airport departureAirport;


    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    @JoinColumn(name="fk_airline_id")
    private Airline airline;

    @OneToOne(fetch = FetchType.EAGER , cascade = CascadeType.MERGE)
    @JoinColumn(name="fk_destination_airport_id")
    private Airport destinationAirport;

    @Column(nullable = false, length = 100)
    private LocalDateTime departureTime;

    @Column(nullable = true, length = 100)
    private LocalDateTime destinationTime;

    @Column(nullable = true, length = 100)
    private Long flightDuration;

    @Column(nullable = true, length = 100)
    private Double price;

    @Column(nullable = false, length = 100)
    private Boolean roundtrip;

    @Enumerated(EnumType.STRING)
    private FlightClass flightClass;

    private Long children;

    private Long adults;

}
