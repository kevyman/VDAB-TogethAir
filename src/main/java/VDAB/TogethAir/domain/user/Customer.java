package VDAB.TogethAir.domain.user;

import lombok.*;

import javax.persistence.Entity;
import javax.validation.constraints.Pattern;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Customer extends be.vdab.domain.user.AppUser {

    @Pattern(regexp = "^[0-9]{4}[-\\.\\s]?[0-9]{4}[-\\.\\s]?[0-9]{4}[-\\.\\s]?[0-9]{4}$",
            message = "credit card number not valid")
    private String creditCardNumber;

    @Pattern(regexp = "(0[1-9]|1[0-2])\\/([0-9]{2})$",
            message = "expiration date not valid")
    private String expirationDate;

}
