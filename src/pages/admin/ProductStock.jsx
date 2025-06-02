import React from 'react';
import { FaPlus, FaSearch, FaCalendarAlt } from 'react-icons/fa';
import StockTable from '../../components/admin/stock/StockTable';
import SalesChart from '../../components/admin/stock/SalesChart';
import TableControls from '../../components/admin/stock/TableControls';
import '../../styles/admin/stock.scss';

const ProductStock = () => {
  return (
    <div className="container page-enter-active">
      <div className="header-row">
        <h2>In stock</h2>
        <button className="btn-new-stock">
          <FaPlus /> New Stock
        </button>
      </div>
      <hr className="divider" />
      
      <TableControls />
      <StockTable />
      <SalesChart />
    </div>
  );
};

export default ProductStock; 