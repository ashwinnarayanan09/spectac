package se.spectac.application.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Created by ashwin on 2020-01-29.
 */

@Entity
@Table(name = "POSITIONS")
public class Position {

    @Id
    private Integer id;
    private String name;
    private String city;
    private String country;


}
