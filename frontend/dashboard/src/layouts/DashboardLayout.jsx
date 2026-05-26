import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Package, 
  FileText, 
  Settings, 
  LogOut,
  Bell,
  Search,
  Plus
} from 'lucide-react';

export default function DashboardLayout({ children }) {
  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: true },
    { icon: FileText, label: 'Orçamentos', active: false },
    { icon: Users, label: 'Clientes', active: false },
    { icon: Package, label: 'Produtos', active: false },
  ];

  return (
    <div className="flex h-screen bg-[#f8fafc] text-slate-900 overflow-hidden font-sans">
      {/* Sidebar - Sleek Dark/Light hybrid */}
      <aside className="w-72 bg-white border-r border-slate-200/60 flex flex-col shadow-[4px_0_24px_rgba(0,0,0,0.02)] z-20">
        <div className="p-8">
          <div className="flex items-center gap-3 text-2xl font-black text-brand-600 tracking-tighter">
            <div className="bg-brand-600 p-1.5 rounded-lg">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <span>Quote<span className="text-slate-400">Flow</span></span>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-1.5">
          {navItems.map((item) => (
            <a
              key={item.label}
              href="#"
              className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl transition-all duration-300 group ${
                item.active 
                ? 'bg-brand-600 text-white shadow-lg shadow-brand-500/30' 
                : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <item.icon className={`w-5 h-5 ${item.active ? 'text-white' : 'group-hover:text-brand-500'}`} />
              <span className="font-semibold">{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="p-6 border-t border-slate-100">
          <div className="bg-slate-50 p-4 rounded-2xl mb-4">
             <p className="text-xs font-bold text-slate-400 uppercase mb-2">Plano Atual</p>
             <p className="text-sm font-bold text-slate-700">Pro - Vitalcio</p>
          </div>
          <div className="flex items-center gap-3 px-5 py-3 text-slate-400 hover:text-red-500 transition-colors cursor-pointer group">
            <LogOut className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Sair da conta</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden relative">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-200/10 blur-[120px] rounded-full -mr-64 -mt-64"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-200/10 blur-[100px] rounded-full -ml-32 -mb-32"></div>

        {/* Header */}
        <header className="h-20 bg-white/70 backdrop-blur-xl border-b border-slate-200/50 flex items-center justify-between px-10 z-10">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Buscar orçamentos, faturas ou clientes..."
              className="w-full pl-12 pr-4 py-3 bg-slate-100/50 border-none rounded-xl focus:ring-2 focus:ring-brand-500/20 focus:bg-white outline-none transition-all text-sm"
            />
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-400 hover:bg-gray-50 rounded-lg relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="h-8 w-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 font-bold text-xs uppercase cursor-pointer border border-brand-200 hover:ring-4 hover:ring-brand-50 lg:inline-flex hidden">
              HO
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
