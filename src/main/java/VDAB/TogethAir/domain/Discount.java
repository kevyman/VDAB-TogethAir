package VDAB.TogethAir.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import javax.persistence.*;
import java.util.List;
import java.util.Map;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
public class Discount extends AbstractEntity {

    private final int togethAirRate = 5;

    @NonNull
    @ElementCollection
    @MapKeyEnumerated(EnumType.STRING)
    @MapKeyColumn(name = "time_category")
    private Map<TimeCategory,Integer> timeCategoryRate;

    @NonNull
    @ElementCollection
    @MapKeyEnumerated(EnumType.STRING)
    @MapKeyColumn(name = "travel_class")
    private Map<TravelClass,Integer> travelClassRate;

    @NonNull
    @ElementCollection
    @MapKeyColumn(name = "volume")
    private Map<Integer,Integer> volumeDiscount;

}
