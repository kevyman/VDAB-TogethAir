package VDAB.TogethAir.domain;

import VDAB.TogethAir.domain.user.Customer;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
public class Booking extends AbstractEntity {

    @NonNull
    private LocalDate dateBooking;

    private double priceBooking;

    @NonNull
    @Enumerated(EnumType.STRING)
    private PaymentMethod paymentMethod;

    private boolean isPayed;

    @ManyToOne
    private Customer customer;

}
