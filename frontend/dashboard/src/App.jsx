import React, { useState } from 'react';
import Login from './pages/Login';
import DashboardLayout from './layouts/DashboardLayout';
import { Plus, TrendingUp, Users, CheckCircle, Clock } from 'lucide-react';

function StatCard({ label, value, icon: Icon, trend, color }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-3 rounded-xl ${color}`}>
          <Icon className="w-6 h-6" />
        </div>
        {trend && (
          <span className="text-green-600 bg-green-50 px-2 py-1 rounded-lg text-xs font-bold">
            {trend}
          </span>
        )}
      </div>
      <p className="text-gray-500 text-sm font-medium mb-1">{label}</p>
      <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
    </div>
  );
}

function DashboardOverview() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Olá, Hugo 👋</h1>
          <p className="text-gray-500">Aqui está o resumo comercial da sua empresa hoje.</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Plus className="w-5 h-5" />
          Novo Orçamento
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          label="Total Vendido" 
          value="R$ 12.450,00" 
          icon={TrendingUp} 
          trend="+12%" 
          color="bg-brand-50 text-brand-600"
        />
        <StatCard 
          label="Orçamentos Ativos" 
          value="24" 
          icon={Clock} 
          color="bg-orange-50 text-orange-600"
        />
        <StatCard 
          label="Clientes Novos" 
          value="8" 
          icon={Users} 
          trend="+3" 
          color="bg-blue-50 text-blue-600"
        />
        <StatCard 
          label="Taxa de Fechamento" 
          value="64%" 
          icon={CheckCircle} 
          color="bg-green-50 text-green-600"
        />
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h3 className="font-bold text-gray-900">Orçamentos Recentes</h3>
          <button className="text-brand-600 text-sm font-semibold hover:underline">Ver todos</button>
        </div>
        <table className="w-full text-left">
          <thead className="bg-gray-50 text-gray-400 text-xs uppercase font-medium">
            <tr>
              <th className="px-6 py-4">Cliente</th>
              <th className="px-6 py-4">Data</th>
              <th className="px-6 py-4">Valor</th>
              <th className="px-6 py-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[1, 2, 3].map((i) => (
              <tr key={i} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-medium">Empresa Exemplo {i}</td>
                <td className="px-6 py-4 text-gray-500">26 Mai, 2026</td>
                <td className="px-6 py-4 font-bold">R$ 1.500,00</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-bold uppercase">Aprovado</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Simulation: toggle login
  if (!isLoggedIn) {
     return <div onClick={() => setIsLoggedIn(true)} className="cursor-pointer"><Login /></div>;
  }

  return (
    <DashboardLayout>
      <DashboardOverview />
    </DashboardLayout>
  );
}

export default App;
