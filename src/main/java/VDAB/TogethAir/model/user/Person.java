package VDAB.TogethAir.model.user;

import VDAB.TogethAir.model.AbstractSuper;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "person" , schema = "togethair")
public class Person extends AbstractSuper implements Serializable {

    @Column(nullable = false , length = 100)
    private String name;

    @Column(nullable = false , length = 100)
    private String surname;

    @Column(nullable = false , length = 100)
    private Integer age;

    @Column(nullable = false , length = 100)
    private String emailAddress;

    @Column(nullable = false , length = 100)
    private String password;

    @Enumerated(EnumType.STRING)
    private UserRole role;

}

