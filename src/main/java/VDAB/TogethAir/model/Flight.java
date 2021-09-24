package VDAB.TogethAir.model;

import VDAB.TogethAir.enums.FlightClass;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateDeserializer;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;


@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Flight extends AbstractSuper {

    @Column(nullable = false , length = 100)
    private String departureAirport;

    @Column(nullable = false , length = 100)
    private String destinationAirport;

    @Column(nullable = false , length = 100)
    private LocalDateTime departureTime;

    @Column(nullable = true , length = 100)
    private LocalDateTime destinationTime;

    @Column(nullable = true , length = 100)
    private Long flightDuration;

    @Column(nullable = true , length = 100)
    private Double price;

//    @Column(nullable = false , length = 100)
    private Boolean roundtrip;

    @Enumerated(EnumType.STRING)
    private FlightClass flightClass;

    private Long children;

    private Long adults;

}
