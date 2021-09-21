package VDAB.TogethAir.model.user;

import javax.persistence.*;

@Entity
public abstract class AbstractSuper {
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
