package VDAB.TogethAir.model;


import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
@NoArgsConstructor
@AllArgsConstructor
public abstract class AbstractSuper {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
}
