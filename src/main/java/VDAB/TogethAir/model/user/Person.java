package VDAB.TogethAir.model.user;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Enumerated;
import javax.persistence.Table;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "user" , schema = "togethair")
public class Person extends AbstractSuper {

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

    @Enumerated
    private UserRole role;

}

