package se.spectac.application.repository;


import org.springframework.data.repository.CrudRepository;
import se.spectac.application.entity.Position;

import java.util.List;

/**
 * Created by ashwin on 2020-01-29.
 */
public interface PositionRepository extends CrudRepository<Position,String> {

    List<Position> findAll();
    List<Position> findByCountry(String country);
}
