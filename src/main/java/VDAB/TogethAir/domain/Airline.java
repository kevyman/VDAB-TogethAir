package VDAB.TogethAir.domain;


import lombok.*;
import javax.persistence.*;


@Entity
@RequiredArgsConstructor
@NoArgsConstructor
@Getter
public class Airline extends AbstractEntity {

    @NonNull
    private String name;

}
