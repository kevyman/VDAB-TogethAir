package VDAB.TogethAir.model;

import VDAB.TogethAir.model.user.Person;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Booking extends AbstractSuper{

    @Column(nullable = false , length = 100)
    private Double flightPrice;

    @ManyToOne
    private Person person;

    @Column(nullable = false , length = 100)
    private LocalDateTime bookingDate;
}
