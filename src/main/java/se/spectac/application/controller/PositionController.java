package se.spectac.application.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import se.spectac.application.entity.Position;
import se.spectac.application.service.PositionService;
import java.io.IOException;
import java.util.List;

@RestController
public class PositionController {

    @Autowired
    PositionService positionService;

    @RequestMapping(value = "/api/positions", method = {RequestMethod.GET}, produces = "application/json")
    public ResponseEntity<List<Position>> getPositions() throws IOException {

        List<Position> positions = positionService.findAll();
        return ResponseEntity.ok(positions);
    }
}
