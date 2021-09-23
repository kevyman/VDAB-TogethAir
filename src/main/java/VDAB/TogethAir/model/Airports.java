package VDAB.TogethAir.model;


import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Airports{

    @Id
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




    public String getCode() {
        return code;
    }

    public String getName() {
        return name;
    }

    public String getCityCode() {
        return cityCode;
    }

    public String getCityName() {
        return cityName;
    }

    public String getCountryName() {
        return countryName;
    }

    public String getCountryCode() {
        return countryCode;
    }

    public String getTimezone() {
        return timezone;
    }

    public String getLat() {
        return lat;
    }

    public String getLon() {
        return lon;
    }

    public Integer getNumAirports() {
        return numAirports;
    }

    public String getCity() {
        return city;
    }
}
