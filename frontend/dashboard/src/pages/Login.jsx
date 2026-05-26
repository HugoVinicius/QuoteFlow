import React from 'react';
import { motion } from 'framer-motion';
import { FileText, LogIn, ArrowRight } from 'lucide-react';

export default function Login() {
  return (
    <div className="min-h-screen flex items-stretch bg-gray-50 overflow-hidden">
      {/* Left Side: Branding/Visuals */}
      <div className="hidden lg:flex lg:w-1/2 bg-brand-600 relative p-12 flex-col justify-between text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-500/50 to-brand-950 opacity-90" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-2 text-2xl font-bold tracking-tight">
            <div className="bg-white p-2 rounded-xl">
              <FileText className="text-brand-600 w-8 h-8" />
            </div>
            <span>QuoteFlow</span>
          </div>
        </div>

        <div className="relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-extrabold leading-tight mb-6"
          >
            Orçamentos profissionais <br /> em segundos.
          </motion.h1>
          <p className="text-brand-100 text-lg max-w-md">
            Simplifique sua gestão comercial com a plataforma que automatiza tudo, do orçamento à assinatura digital.
          </p>
        </div>

        <div className="relative z-10 flex gap-8 text-sm text-brand-200">
          <span>&copy; 2026 QuoteFlow Inc.</span>
          <a href="#" className="hover:text-white transition">Privacidade</a>
          <a href="#" className="hover:text-white transition">Termos</a>
        </div>
      </div>

      {/* Right Side: Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-24 relative bg-white">
        <div className="max-w-md w-full">
          <div className="lg:hidden mb-8">
             <div className="flex items-center gap-2 text-2xl font-bold tracking-tight text-brand-600">
               <FileText className="w-8 h-8" />
               <span>QuoteFlow</span>
             </div>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Bem-vindo de volta</h2>
            <p className="text-gray-500">Entre com suas credenciais para gerenciar seus orçamentos.</p>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">E-mail corporativo</label>
              <input 
                type="email" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 outline-none transition-all"
                placeholder="nome@empresa.com"
              />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <label className="text-Sm font-medium text-gray-700">Senha</label>
                <a href="#" className="text-sm text-brand-600 hover:underline">Esqueci minha senha</a>
              </div>
              <input 
                type="password" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 outline-none transition-all"
                placeholder="••••••••"
              />
            </div>

            <button className="w-full btn-primary bg-brand-600 py-3 text-lg flex items-center justify-center gap-2 group">
              Acessar Painel
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-gray-100 text-center">
            <p className="text-gray-500">
              Ainda não tem uma conta? <br />
              <a href="#" className="font-semibold text-brand-600 hover:text-brand-700 underline decoration-2 underline-offset-4">Comece agora gratuitamente</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
