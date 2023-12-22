package com.condo.demo.controller;

import com.condo.demo.model.Reserva;
import com.condo.demo.service.ReservaService;
import com.condo.demo.dto.ReservaDTO;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
 
@RestController
@RequestMapping("/reservas")
@CrossOrigin(origins = "http://localhost:4200")
public class ReservaServiceController {
    ReservaService reservaService;

    public ReservaServiceController(ReservaService reservaService) {
        this.reservaService = reservaService;
    }

    @GetMapping
    public List<Reserva> getReservasList () {
        return this.reservaService.getReservaList();
    }

    @PostMapping
    public ResponseEntity<String> createReserva (@RequestBody ReservaDTO reservaDTO) {
        Reserva newReserva = new Reserva();
        newReserva.setDate(reservaDTO.getDate());
        newReserva.setResidentName(reservaDTO.getResidentName());
        this.reservaService.createReserva(newReserva);
        return ResponseEntity.ok("{\"message\":\"Reserva feita com sucesso\"}");

    }

    @GetMapping("{id}")
    public Reserva getReservaInfo (@PathVariable("id") Long id) {
        return this.reservaService.getReservaInfo(id);        
    }

    @PutMapping
    public ResponseEntity<String> updateReserva (@RequestBody Reserva reserva) {
        this.reservaService.updateReserva(reserva);
        return ResponseEntity.ok("{\"message\":\"Reserva atualizada com sucesso\"}");
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteReserva (@PathVariable("id") Long id) {
        this.reservaService.deleteReserva(id);
        return ResponseEntity.ok("{\"message\":\"Reserva retirada com sucesso\"}");
    }
}
