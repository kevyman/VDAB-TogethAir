package VDAB.TogethAir.model.user;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;

@Entity
@Data
@NoArgsConstructor

public class Person extends AbstractSuper {

    private String name;
    private String surname;
    private Integer age;
    private String emailAddress;
    private String password;

    public Person(String name, String surname, Integer age, String emailAddress, String password) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.emailAddress = emailAddress;
        this.password = password;
    }
}

