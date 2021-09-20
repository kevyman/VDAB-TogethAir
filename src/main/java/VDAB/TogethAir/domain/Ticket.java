package VDAB.TogethAir.domain;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.ManyToOne;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
public class Ticket extends AbstractEntity {

    @NonNull
    @Enumerated(EnumType.STRING)
    private TravelClass travelClass;

    @ManyToOne
    private Flight flight;

    @ManyToOne
    private Passenger passenger;

    @ManyToOne
    private Booking booking;

}
