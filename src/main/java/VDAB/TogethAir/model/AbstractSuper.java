package VDAB.TogethAir.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public abstract class AbstractSuper implements Serializable {
    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
