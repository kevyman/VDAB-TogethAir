package VDAB.TogethAir.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import java.time.LocalDateTime;
import java.util.Date;

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
    @Column(nullable = false , length = 100)
    private LocalDateTime destinationTime;
    @Column(nullable = false , length = 100)
    private Long flightDuration;
    @Column(nullable = false , length = 100)
    private Double price;

}
