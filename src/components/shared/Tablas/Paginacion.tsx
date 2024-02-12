// components/Pagination.js
import Link from 'next/link';

interface ListaTablasProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (newPage: number) => void;
}


import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }: ListaTablasProps) => {
    
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="d-flex align-items-center justify-content-center">
            <ul className="pagination">
                {currentPage > 1 && (
                    <li className="page-item">
                        <Link className="page-link" href="#" onClick={() => onPageChange(currentPage - 1)}>
                            Anterior
                        </Link>
                    </li>
                )}
                {pageNumbers.map((pageNumber) => (
                    <li key={pageNumber} className={`page-item ${pageNumber === currentPage ? 'active' : ''}`}>
                        <Link className="page-link" href="#" onClick={() => onPageChange(pageNumber)}>
                            {pageNumber}
                        </Link>
                    </li>
                ))}
                {currentPage < totalPages && (
                    <li className="page-item">
                        <Link className="page-link" href="#" onClick={() => onPageChange(currentPage + 1)}>
                            Siguiente
                        </Link>
                    </li>
                )}
            </ul>
        </div>

    );
};

export default Pagination;
