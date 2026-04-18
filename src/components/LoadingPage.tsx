import { BrainCircuit } from "lucide-react";

export const LoadingPage = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background selection:bg-primary/20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-purple/5 blur-[80px] rounded-full animate-pulse delay-700" />
      </div>

      <div className="relative flex flex-col items-center">
        {/* Logo Animation */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full animate-pulse" />
          <div className="relative p-6 bg-white rounded-2xl shadow-premium border border-border animate-in">
            <BrainCircuit size={48} className="text-primary animate-bounce duration-2000" />
          </div>
          
          {/* Orbiting Circles */}
          <div className="absolute -inset-4 border border-primary/10 rounded-full animate-[spin_10s_linear_infinite]" />
          <div className="absolute -inset-8 border border-accent-purple/5 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
        </div>

        {/* Brand Name */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-heavy tracking-tight">
            <span className="text-text-primary">Brain</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-purple">Stack</span>
          </h1>
          
          {/* Loading Indicator */}
          <div className="flex items-center justify-center gap-1.5 mt-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]" />
            <div className="w-2 h-2 rounded-full bg-primary/60 animate-bounce [animation-delay:-0.15s]" />
            <div className="w-2 h-2 rounded-full bg-primary/30 animate-bounce" />
          </div>
          
          <p className="text-sm font-medium text-text-muted animate-pulse">
            Syncing your digital thoughts...
          </p>
        </div>
      </div>

      {/* Footer Text (Optional) */}
      <div className="absolute bottom-12 left-0 right-0 text-center">
        <p className="text-xs text-text-muted/50 font-medium tracking-widest uppercase">
          Initializing Neural Interface
        </p>
      </div>
    </div>
  );
};

export default LoadingPage;
