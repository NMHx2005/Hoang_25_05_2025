import React from 'react';
import RevenueCard from '../../components/admin/RevenueCard';
import CircleStats from '../../components/admin/CircleStats';
import ProductList from '../../components/admin/ProductList';
import DonutChart from '../../components/admin/DonutChart';
import LineChart from '../../components/admin/LineChart';
import BottomText from '../../components/admin/BottomText';
import BottomBar from '../../components/admin/BottomBar';
import './Dashboard.scss';
function Dashboard() {
  return (
    <div>
      <h1>Dashboard Page</h1>
      <RevenueCard />
      <div style={{display: "flex", gap: "20px"}}>
        <CircleStats />
        <ProductList />
      </div>
      <div style={{display: "flex", gap: "20px"}}>
        <DonutChart />
        <LineChart />
      </div>
      <BottomText />
      <BottomBar />
    </div>
  );
}

export default Dashboard; 