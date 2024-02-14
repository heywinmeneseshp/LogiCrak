"use client"
import React from 'react';

const FuelConsumptionDashboard = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Dashboard de Consumo de Combustible por Vehículo</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4 border-0 rounded-3 shadow">
            <div className="card-header bg-primary text-white border-0 rounded-top">
              Vehículo 1
            </div>
            <div className="card-body">
              <p className="card-text">Stock Inicial: 100 litros</p>
              <p className="card-text">Consumo: 50 litros</p>
              <p className="card-text">Tanqueo: 70 litros</p>
              <p className="card-text">Stock Final: 50 litros</p>
              <p className="card-text">Fecha: 2022-02-15</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-4 border-0 rounded-3 shadow">
            <div className="card-header bg-success text-white border-0 rounded-top">
              Vehículo 2
            </div>
            <div className="card-body">
              <strong>
                <p className="card-text"> Stock Inicial: 120 litros</p>
              </strong>
              <strong>
                <p className="card-text text-danger">Consumo: 40 litros</p>
              </strong>
              <strong>
                <p className="card-text text-success">Tanqueo: 100 litros</p>
              </strong>
              <strong>
                <p className="card-text">Stock Final: 80 litros</p>
              </strong>
              <p className="card-text">Fecha: 2022-02-15</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuelConsumptionDashboard;
