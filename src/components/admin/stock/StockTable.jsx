import React from 'react';

const StockTable = () => {
  const stockData = [
    {
      id: '#7676',
      product: 'Inverter',
      category: 'cat1',
      importDate: '01/01/2025',
      description: 'Stock adjustment',
      items: '80/100',
      status: 'Active'
    },
    {
      id: '#7676',
      product: 'Battery',
      category: 'cat2',
      importDate: '01/01/2025',
      description: '',
      items: '80/100',
      status: 'Pending'
    },
    {
      id: '#7676',
      product: 'Generator',
      category: 'cat2',
      importDate: '01/01/2025',
      description: 'Stock adjustment',
      items: '80/100',
      status: 'Active'
    },
    {
      id: '#7676',
      product: 'Charger',
      category: 'cat3',
      importDate: '01/01/2025',
      description: 'Stock adjustment',
      items: '80/100',
      status: 'Active'
    },
    {
      id: '#7676',
      product: 'Power',
      category: 'cat4',
      importDate: '01/01/2025',
      description: '',
      items: '80/100',
      status: 'Active'
    }
  ];

  return (
    <table aria-label="Stock table">
      <thead>
        <tr>
          <th><input type="checkbox" aria-label="Select all" /></th>
          <th>Product ID</th>
          <th>Product</th>
          <th>Category</th>
          <th>Import date</th>
          <th className="description-col">Description</th>
          <th className="items-col">Items</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {stockData.map((item, index) => (
          <tr key={index}>
            <td><input type="checkbox" aria-label={`Select row ${index + 1}`} /></td>
            <td>{item.id}</td>
            <td>{item.product}</td>
            <td>{item.category}</td>
            <td>{item.importDate}</td>
            <td className="description-col">{item.description}</td>
            <td className="items-col">{item.items}</td>
            <td>
              <span className={`status-pill status-${item.status.toLowerCase()}`}>
                {item.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StockTable; 