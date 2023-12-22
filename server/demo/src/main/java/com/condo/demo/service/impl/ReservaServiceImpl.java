package com.condo.demo.service.impl;

import com.condo.demo.service.ReservaService;

import java.util.List;

import org.springframework.stereotype.Service;

import com.condo.demo.model.Reserva;
import com.condo.demo.repository.ReservaRepository;

@Service
public class ReservaServiceImpl implements ReservaService {
    ReservaRepository reservaRepository;

    public ReservaServiceImpl (ReservaRepository reservaRepository) {
        this.reservaRepository = reservaRepository;
    }

    @Override
    public void createReserva (Reserva reserva) {
        this.reservaRepository.save(reserva);        
    }

    @Override
    public void updateReserva (Reserva reserva) {
        this.reservaRepository.save(reserva);        
    }

    @Override
    public void deleteReserva (Long id) {
        this.reservaRepository.deleteById(id);        
    }

    @Override
    public Reserva getReservaInfo (Long id) {
        return this.reservaRepository.findById(id).get();        
    }

    public List<Reserva> getReservaList () {
        return this.reservaRepository.findAll();
    }
}
