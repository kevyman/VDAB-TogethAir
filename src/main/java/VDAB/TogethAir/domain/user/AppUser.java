package be.vdab.domain.user;

import VDAB.TogethAir.domain.AbstractEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import javax.persistence.MappedSuperclass;

@MappedSuperclass
@AllArgsConstructor
@NoArgsConstructor
@Getter
public abstract class AppUser extends AbstractEntity {

    @NonNull
    private String name;

}
