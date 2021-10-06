package VDAB.TogethAir.repository;


import VDAB.TogethAir.model.user.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface PersonRepository extends JpaRepository<Person, Long>{


    @Query("Select p from Person p where p.emailAddress = ?1")
    Optional<Person> findPersonByEmailAddress(String emailAddress);
}
