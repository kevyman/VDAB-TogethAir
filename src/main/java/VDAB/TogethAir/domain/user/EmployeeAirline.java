package VDAB.TogethAir.domain.user;

import VDAB.TogethAir.domain.Airline;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
public class EmployeeAirline extends be.vdab.domain.user.AppUser {

    @ManyToOne
    private Airline airline;

}
