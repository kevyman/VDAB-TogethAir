package VDAB.TogethAir.controller;

import VDAB.TogethAir.model.user.Person;
import VDAB.TogethAir.services.PersonService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
public class PersonController {

    private PersonService personService;


    @GetMapping("/findPerson/{id}")
    public ResponseEntity<Person> findPersonById(Long id) throws Exception {
        Person person = personService.findPersonById(id);
        return new ResponseEntity<>(person , HttpStatus.OK);
    }

    @PostMapping("/addPerson")
    public ResponseEntity<Person> addPerson(@RequestBody Person person){
        Person newPerson = personService.addPerson(person);
        return new ResponseEntity<>(newPerson , HttpStatus.OK);
    }

    @PutMapping("/updatePerson")
    public ResponseEntity<Person> updatePerson(@RequestBody Person person){
        Person updatePerson = personService.updatePerson(person);
        return new ResponseEntity<>(updatePerson , HttpStatus.OK);
    }

    @DeleteMapping("/deletePerson/{id}")
    public ResponseEntity<?>  deletePerson(@PathVariable("id") Long id) {
        personService.deletePerson(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/findByEmail/{emailAddress}")
    public ResponseEntity<Person> findPersonByEmail(@PathVariable("emailAddress") String emailAddress) throws Exception {
        Person person = personService.findPersonByEmailAddress(emailAddress);
        return new ResponseEntity<>(person , HttpStatus.OK);
    }

}
