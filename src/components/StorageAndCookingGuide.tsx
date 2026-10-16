import React, { useState, useEffect } from 'react';
import { Clock, Play, Pause, RotateCcw, Flame, Waves, UtensilsCrossed, AlertCircle } from 'lucide-react';
import { STORAGE_GUIDE, COOKING_SOP } from '../data/products';

export const StorageAndCookingGuide: React.FC = () => {
  const [activeRecipe, setActiveRecipe] = useState<'kukus' | 'goreng' | 'kuah'>('kukus');
  
  // Interactive cooking timer state
  const [timerSeconds, setTimerSeconds] = useState<number>(900); // 15 mins default for steaming
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTimerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds(prev => prev - 1);
      }, 1000);
    } else if (timerSeconds === 0) {
      setIsTimerRunning(false);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning, timerSeconds]);

  const handleSelectRecipe = (id: 'kukus' | 'goreng' | 'kuah') => {
    setActiveRecipe(id);
    setIsTimerRunning(false);
    const selected = COOKING_SOP.find(c => c.id === id);
    if (selected) {
      setTimerSeconds(selected.durationSec);
    }
  };

  const handleResetTimer = () => {
    setIsTimerRunning(false);
    const selected = COOKING_SOP.find(c => c.id === activeRecipe);
    if (selected) {
      setTimerSeconds(selected.durationSec);
    }
  };

  const formatTimer = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const currentRecipeData = COOKING_SOP.find(c => c.id === activeRecipe) || COOKING_SOP[0];

  return (
    <section id="sop-penyajian" className="w-full bg-[#000000] py-20 border-b border-[#202020]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 space-y-16">
        {/* Section 1: Storage Longevity Matrix */}
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#202020] pb-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#FFC000] uppercase mb-2">
                <span className="w-2 h-2 bg-[#FFC000]"></span>
                MANAJEMEN KUALITAS TANPA PENGAWET
              </div>
              <h2 className="font-display text-4xl sm:text-6xl font-black uppercase text-white tracking-tight leading-[0.95]">
                PANDUAN PENYIMPANAN
              </h2>
            </div>
            <p className="text-sm font-mono text-[#969696] max-w-md">
              Karena tanpa pengawet buatan, pastikan penyimpanan sesuai standar suhu berikut agar kesegaran dan cita rasa daging tetap prima.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono">
            {STORAGE_GUIDE.map((guide, idx) => (
              <div 
                key={idx}
                className="bg-[#181818] border border-[#202020] p-6 space-y-4 relative overflow-hidden"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase text-[#7D7D7D] tracking-widest">{guide.name}</span>
                  <Clock className="w-4 h-4 text-[#FFC000]" />
                </div>

                <div>
                  <span className="font-display text-4xl font-extrabold text-[#FFC000] tracking-tight block">
                    {guide.highlight}
                  </span>
                  <span className="text-xs text-white mt-1 block">Daya Tahan Optimal</span>
                </div>

                <p className="text-xs text-[#969696] leading-relaxed pt-2 border-t border-[#202020]">
                  {guide.condition}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Interactive Cooking SOP & Timer */}
        <div className="space-y-8 pt-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#202020] pb-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#29ABE2] uppercase mb-2">
                <span className="w-2 h-2 bg-[#29ABE2]"></span>
                STANDAR OPERASIONAL PENYAJIAN KONSUMEN
              </div>
              <h3 className="font-display text-4xl sm:text-6xl font-black uppercase text-white tracking-tight leading-[0.95]">
                CARA MEMASAK OPTIMAL
              </h3>
            </div>
            <p className="text-sm font-mono text-[#969696] max-w-md">
              Tahu bakso BAQIRA FOOD dirancang serbaguna — nikmat dikukus lembut maupun digoreng renyah kuning keemasan.
            </p>
          </div>

          {/* SOP Tabs */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-wider">
            {COOKING_SOP.map(recipe => (
              <button
                key={recipe.id}
                onClick={() => handleSelectRecipe(recipe.id as any)}
                className={`px-5 py-3 border transition-colors cursor-pointer flex items-center gap-2 ${
                  activeRecipe === recipe.id
                    ? 'bg-[#FFC000] text-black border-[#FFC000] font-bold'
                    : 'bg-[#141414] text-[#969696] border-[#202020] hover:text-white'
                }`}
              >
                {recipe.id === 'kukus' && <Waves className="w-4 h-4" />}
                {recipe.id === 'goreng' && <Flame className="w-4 h-4" />}
                {recipe.id === 'kuah' && <UtensilsCrossed className="w-4 h-4" />}
                <span>{recipe.title}</span>
              </button>
            ))}
          </div>

          {/* Active SOP Details & Interactive Stopwatch */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch font-mono">
            {/* Left: Recipe Instructions */}
            <div className="lg:col-span-7 bg-[#181818] border border-[#202020] p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-[#202020] pb-4">
                <span className="text-xs text-[#FFC000] uppercase tracking-widest">
                  PANDUAN LANGKAH DEMI LANGKAH
                </span>
                <span className="text-xs text-[#969696]">
                  TARGET: {currentRecipeData.durationDisplay}
                </span>
              </div>

              <div className="space-y-4">
                <h4 className="font-display text-3xl font-extrabold text-white uppercase tracking-tight">
                  {currentRecipeData.title}
                </h4>
                <p className="text-sm text-white/90 leading-relaxed font-sans">
                  {currentRecipeData.instruction}
                </p>
              </div>

              {/* Tips Callout */}
              <div className="bg-[#101010] border border-[#262626] p-4 flex items-start gap-3 text-xs">
                <AlertCircle className="w-4 h-4 text-[#FFC000] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block uppercase mb-0.5">Saran Penyajian:</strong>
                  <span className="text-[#969696] font-sans">{currentRecipeData.tips}</span>
                </div>
              </div>
            </div>

            {/* Right: Lamborghini Digital Cooking Stopwatch */}
            <div className="lg:col-span-5 bg-[#141414] border border-[#202020] p-6 sm:p-8 flex flex-col justify-between items-center text-center space-y-6">
              <div className="w-full flex items-center justify-between text-xs text-[#7D7D7D] uppercase">
                <span>PENGATUR WAKTU MASAK</span>
                <span className={isTimerRunning ? 'text-[#FFC000] font-bold' : ''}>
                  {isTimerRunning ? 'BERJALAN' : 'STANDBY'}
                </span>
              </div>

              {/* Timer Display */}
              <div className="space-y-2">
                <div className="font-mono text-6xl sm:text-7xl font-extrabold text-white tracking-widest tabular-nums drop-shadow-[0_0_20px_rgba(255,192,0,0.15)]">
                  {formatTimer(timerSeconds)}
                </div>
                <span className="text-xs text-[#7D7D7D] uppercase tracking-wider block">
                  MENIT : DETIK
                </span>
              </div>

              {/* Timer Controls */}
              <div className="flex items-center gap-3 w-full">
                <button
                  type="button"
                  onClick={() => setIsTimerRunning(!isTimerRunning)}
                  className={`flex-1 py-4 font-bold text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer ${
                    isTimerRunning
                      ? 'bg-[#202020] text-white hover:bg-[#313131] border border-white/40'
                      : 'bg-[#FFC000] text-black hover:bg-[#917300]'
                  }`}
                >
                  {isTimerRunning ? (
                    <>
                      <Pause className="w-4 h-4" />
                      <span>JEDA</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-black" />
                      <span>MULAI TIMER</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleResetTimer}
                  className="p-4 bg-[#181818] border border-[#202020] text-[#969696] hover:text-white hover:border-[#383838] transition-colors cursor-pointer"
                  title="Reset Timer"
                  aria-label="Reset Timer"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
