package VDAB.TogethAir.repository;

import VDAB.TogethAir.domain.user.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface repository extends JpaRepository<Long, Customer> {
}
