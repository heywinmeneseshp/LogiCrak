"use client"
import React from 'react';

const FuelConsumptionDashboard = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Consumo por Vehículo</h1>
      <div className="row">

        <div className="col-md-6">
          <div className="card mb-4 border-0 rounded-3 shadow">
            <div className="card-header bg-success text-white border-0 rounded-top">
              Vehículo 2
            </div>
            <div className="card-body text-center text-sm">
              <strong>
                <p className="card-text"> Stock Inicial: 120 gal</p>
              </strong>
              <strong>
                <p className="card-text text-danger">Consumo: 40 gal</p>
              </strong>
              <strong>
                <p className="card-text text-success">Tanqueo: 100 gal</p>
              </strong>
              <div className='mb-3 mt-1'>
                <div className='mb-1'><strong>Stock</strong></div>
                <span className='alert alert-secondary p-1 mt-1 col-lg-8'>
                  <strong>
                    <span className="card-text text-secondary m-2 mt-0 mb-0">Teorico: 800 gal</span>
                    <span className="card-text">|</span>
                    <span className="card-text m-2 mt-0 mb-0">Real: 800 gal</span>
                  </strong>
                </span>
              </div>
              <p className="card-text">Fecha: 2022-02-15</p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card mb-4 border-0 rounded-3 shadow">
            <div className="card-header bg-success text-white border-0 rounded-top">
              Vehículo 2
            </div>
            <div className="card-body text-center text-sm">
              <strong>
                <p className="card-text"> Stock Inicial: 120 gal</p>
              </strong>
              <strong>
                <p className="card-text text-danger">Consumo: 40 gal</p>
              </strong>
              <strong>
                <p className="card-text text-success">Tanqueo: 100 gal</p>
              </strong>
              <div className='mb-3 mt-1'>
                <div className='mb-1'><strong>Stock</strong></div>
                <span className='alert alert-secondary p-1 mt-1 col-lg-8'>
                  <strong>
                    <span className="card-text text-secondary m-2 mt-0 mb-0">Teorico: 800 gal</span>
                    <span className="card-text">|</span>
                    <span className="card-text m-2 mt-0 mb-0">Real: 800 gal</span>
                  </strong>
                </span>
              </div>
              <p className="card-text">Fecha: 2022-02-15</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuelConsumptionDashboard;
