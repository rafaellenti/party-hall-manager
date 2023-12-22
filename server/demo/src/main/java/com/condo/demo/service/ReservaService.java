package com.condo.demo.service;

import java.util.List;

import com.condo.demo.model.Reserva;

public interface ReservaService {
    public void createReserva (Reserva reserva);
    public void updateReserva (Reserva reserva);
    public void deleteReserva (Long id);
    public Reserva getReservaInfo (Long id);
    public List<Reserva> getReservaList ();
}
