package VDAB.TogethAir.repository;


import VDAB.TogethAir.model.user.Person;
import org.springframework.data.jpa.repository.JpaRepository;

public interface repository extends JpaRepository<Long, Person>{
}
