package se.spectac.application.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import se.spectac.application.entity.Position;
import se.spectac.application.repository.PositionRepository;

import java.util.List;

@Service
public class PositionService {

    @Autowired
    PositionRepository positionRepository;


    public List<Position> findByCountry(String country){
        return positionRepository.findByCountry(country);
    }

    public List<Position> findAll(){
        return positionRepository.findAll();
    }
}
