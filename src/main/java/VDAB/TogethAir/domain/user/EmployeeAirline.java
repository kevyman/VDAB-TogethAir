package be.vdab.domain.user;

import be.vdab.domain.Airline;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
public class EmployeeAirline extends AppUser {

    @ManyToOne
    private Airline airline;

}
