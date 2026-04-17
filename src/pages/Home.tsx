import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button.tsx";
import { BrainCircuit, Sparkles, Shield, Rocket, ArrowRight, Zap, Share2, Globe } from "lucide-react";

export const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-background selection:bg-primary/20">
            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-border">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-primary">
                        <div className="p-1.5 bg-primary-light rounded-lg">
                            <BrainCircuit size={24} />
                        </div>
                        <span className="font-bold text-xl tracking-tight text-text-primary">BrainStack</span>
                    </div>
                    
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-text-secondary">
                        <a href="#features" className="hover:text-primary transition-colors">Features</a>
                        <a href="#security" className="hover:text-primary transition-colors">Security</a>
                        <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
                    </div>

                    <div className="flex items-center gap-4">
                        <button 
                            onClick={() => navigate("/signin")}
                            className="text-sm font-semibold text-text-secondary hover:text-primary transition-colors"
                        >
                            Log in
                        </button>
                        <Button 
                            text="Get Started" 
                            variant="primary" 
                            onClick={() => navigate("/signup")}
                        />
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 blur-[120px] rounded-full" />
                    <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-accent-purple/5 blur-[100px] rounded-full" />
                </div>

                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-light text-primary text-xs font-bold uppercase tracking-wider mb-6 animate-fade-in">
                            <Sparkles size={14} />
                            <span>Your second brain is here</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-heavy text-text-primary leading-[1.1] mb-8 tracking-tight">
                            Organize your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-purple">digital chaos</span> in one place.
                        </h1>
                        <p className="text-xl text-text-secondary mb-10 leading-relaxed max-w-2xl mx-auto">
                            BrainStack helps you capture, categorize, and recall everything you find interesting online. From tweets to videos, keep your knowledge organized.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button 
                                onClick={() => navigate("/signup")}
                                className="group px-8 py-4 bg-primary hover:bg-primary-hover text-white rounded-xl font-bold text-lg shadow-premium transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
                            >
                                Start Building Your Brain
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button 
                                onClick={() => navigate("/signin")}
                                className="px-8 py-4 bg-white border border-border text-text-primary hover:bg-slate-50 rounded-xl font-bold text-lg transition-all"
                            >
                                View Demo
                            </button>
                        </div>
                    </div>

                    {/* App Preview Mockup */}
                    <div className="mt-20 relative px-4 md:px-0">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 via-transparent to-accent-purple/20 blur-3xl -z-10" />
                        <div className="bg-white rounded-2xl shadow-2xl border border-border overflow-hidden lg:scale-105 transform transition-all duration-700">
                             <div className="bg-slate-50 border-b border-border px-4 py-3 flex items-center gap-2">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-400" />
                                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                                </div>
                                <div className="ml-4 bg-white border border-border px-3 py-1 rounded text-[10px] text-text-muted w-64">app.brainstack.com/dashboard</div>
                             </div>
                             <div className="p-4 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="h-48 bg-slate-100/50 rounded-xl border border-dashed border-slate-200 animate-pulse" />
                                <div className="h-48 bg-slate-100/50 rounded-xl border border-dashed border-slate-200 animate-pulse" />
                                <div className="h-48 bg-slate-100/50 rounded-xl border border-dashed border-slate-200 animate-pulse" />
                             </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Everything you need to stay organized</h2>
                        <p className="text-text-secondary max-w-2xl mx-auto">Powerful features to help you manage your digital library without the friction.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Zap className="text-amber-500" />,
                                title: "Instant Capture",
                                desc: "Save tweets, videos, and articles in a single click before you forget."
                            },
                            {
                                icon: <Share2 className="text-primary" />,
                                title: "Quick Sharing",
                                desc: "Generate shareable links for your curated stacks to collaborate with others."
                            },
                            {
                                icon: <Shield className="text-emerald-500" />,
                                title: "Secure & Private",
                                desc: "Your data is encrypted and private. You control who sees your brain."
                            },
                            {
                                icon: <Globe className="text-blue-500" />,
                                title: "Universal Access",
                                desc: "Access your second brain from any device, anywhere in the world."
                            },
                            {
                                icon: <Rocket className="text-accent-purple" />,
                                title: "Fast Search",
                                desc: "Find exactly what you're looking for with our lightning-fast search."
                            },
                            {
                                icon: <BrainCircuit className="text-accent-pink" />,
                                title: "AI Categorization",
                                desc: "Automatically tag and sort your content for easy retrieval later."
                            }
                        ].map((feature, i) => (
                            <div key={i} className="p-8 rounded-2xl border border-border hover:border-primary/50 hover:shadow-soft transition-all group">
                                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-text-primary mb-3">{feature.title}</h3>
                                <p className="text-text-secondary leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-primary text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
                <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to clear your mental clutter?</h2>
                    <p className="text-primary-light/80 text-xl mb-10 max-w-2xl mx-auto">Join thousands of thinkers using BrainStack to organize their digital lives.</p>
                    <button 
                        onClick={() => navigate("/signup")}
                        className="px-10 py-5 bg-white text-primary hover:bg-slate-50 rounded-2xl font-heavy text-xl shadow-2xl transition-all hover:scale-105 active:scale-95"
                    >
                        Get Started for Free
                    </button>
                    <p className="mt-6 text-primary-light/60 text-sm">No credit card required. Free forever (limited).</p>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 bg-slate-50 border-t border-border">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-2 text-primary grayscale opacity-50">
                        <BrainCircuit size={20} />
                        <span className="font-bold text-lg tracking-tight text-text-primary">BrainStack</span>
                    </div>
                    <div className="flex items-center gap-8 text-sm text-text-muted">
                        <a href="#" className="hover:text-primary transition-colors">Privacy</a>
                        <a href="#" className="hover:text-primary transition-colors">Terms</a>
                        <a href="#" className="hover:text-primary transition-colors">Twitter</a>
                        <a href="#" className="hover:text-primary transition-colors">Contact</a>
                    </div>
                    <p className="text-sm text-text-muted">© 2026 BrainStack. Built for the modern web.</p>
                </div>
            </footer>
        </div>
    );
};
