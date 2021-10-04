package VDAB.TogethAir.services;

import VDAB.TogethAir.model.user.Person;
import VDAB.TogethAir.repository.PersonRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@AllArgsConstructor
public class PersonService {

    private final PersonRepository personRepository;

    public Person addPerson(Person person){
        return personRepository.save(person);
    }

    public Person updatePerson(Person person){
        return personRepository.save(person);
    }

    public Person findPersonById(Long id) throws Exception {
        return personRepository.findById(id)
                .orElseThrow(()-> new Exception("User by id " + id + " was not found."));
    }

    @Transactional
    public void deletePerson(Long id){
        personRepository.deleteById(id);
    }


    public Person findPersonByEmailAddress(String emailAddress){
       Person person = personRepository.findPersonByEmailAddress(emailAddress);
        System.out.println(person.getEmailAddress());
        return person;
    }
}
