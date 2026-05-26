import React, { useState } from 'react';
import Login from './pages/Login';
import DashboardLayout from './layouts/DashboardLayout';
import { Plus, TrendingUp, Users, CheckCircle, Clock } from 'lucide-react';

function StatCard({ label, value, icon: Icon, trend, color, accent }) {
  return (
    <div className="bg-white/80 backdrop-blur-md p-7 rounded-[28px] border border-slate-200/50 shadow-sm hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-500 group relative overflow-hidden">
      <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${accent} opacity-5 -mr-8 -mt-8 rounded-full group-hover:scale-150 transition-transform duration-700`}></div>
      
      <div className="flex justify-between items-start mb-5 relative z-10">
        <div className={`p-4 rounded-2xl ${color} shadow-sm group-hover:scale-110 transition-transform duration-500`}>
          <Icon className="w-6 h-6" />
        </div>
        {trend && (
          <span className="text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full text-xs font-black tracking-wider shadow-sm">
            {trend}
          </span>
        )}
      </div>
      <div className="relative z-10">
         <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-1">{label}</p>
         <h3 className="text-3xl font-black text-slate-800 tracking-tight">{value}</h3>
      </div>
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <StatCard 
          label="Total Vendido" 
          value="R$ 12.450,00" 
          icon={TrendingUp} 
          trend="+12%" 
          color="bg-brand-600 text-white"
          accent="from-brand-500 to-brand-900"
        />
        <StatCard 
          label="Orçamentos" 
          value="24 Ativos" 
          icon={Clock} 
          color="bg-amber-500 text-white"
          accent="from-amber-400 to-orange-600"
        />
        <StatCard 
          label="Clientes" 
          value="08 Novos" 
          icon={Users} 
          trend="+03" 
          color="bg-indigo-600 text-white"
          accent="from-indigo-400 to-indigo-900"
        />
        <StatCard 
          label="Aprovação" 
          value="64.5%" 
          icon={CheckCircle} 
          color="bg-emerald-600 text-white"
          accent="from-emerald-400 to-teal-900"
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
