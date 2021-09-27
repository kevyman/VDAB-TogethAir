package VDAB.TogethAir.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Data
public class Airport {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(updatable = false)
    private String code;

    @Column(updatable = false)
    private String name;

    @Column(updatable = false)
    private String cityCode;

    @Column(updatable = false)
    private String cityName;

    @Column(updatable = false)
    private String countryName;

    @Column(updatable = false)
    private String countryCode;

    @Column(updatable = false)
    private String timezone;

    @Column(updatable = false)
    private String lat;

    @Column(updatable = false)
    private String lon;

    @Column(updatable = false)
    private Integer numAirports;

    @Column(updatable = false)
    private String city;

}
