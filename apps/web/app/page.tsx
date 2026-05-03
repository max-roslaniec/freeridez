"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// ─── NAV ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "0 24px",
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transition: "all 0.3s ease",
        background: scrolled
          ? "rgba(13,13,13,0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.06)"
          : "1px solid transparent",
      }}
    >
      <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
        <div style={{
          width: 32, height: 32, borderRadius: 8,
          background: "linear-gradient(135deg, #E63946, #c1121f)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 16, fontWeight: 800, color: "white",
        }}>F</div>
        <span style={{ fontWeight: 700, fontSize: "1.1rem", color: "#F5F5F5", letterSpacing: "-0.02em" }}>
          FreeRidez
        </span>
      </a>

      <div style={{ display: "flex", alignItems: "center", gap: 32 }} className="nav-links">
        {[["#features", "Funcionalidades"], ["#how", "Como funciona"], ["#pricing", "Planos"]].map(([href, label]) => (
          <a key={href} href={href} style={{
            color: "#888", fontSize: "0.9rem", textDecoration: "none",
            transition: "color 0.2s", fontWeight: 500,
          }}
            onMouseEnter={e => (e.currentTarget.style.color = "#F5F5F5")}
            onMouseLeave={e => (e.currentTarget.style.color = "#888")}
          >{label}</a>
        ))}
      </div>

      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <a href="#pricing" className="btn-ghost" style={{ padding: "8px 18px", fontSize: "0.9rem" }}>Entrar</a>
        <a href="#pricing" className="btn-primary" style={{ padding: "8px 18px", fontSize: "0.9rem" }}>
          Começar grátis
        </a>
      </div>
    </nav>
  );
}

// ─── HERO ──────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "120px 24px 80px",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background effects */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        background: "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(230,57,70,0.18), transparent)",
      }} />
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 780, margin: "0 auto" }}>
        <div className="badge" style={{ marginBottom: 24 }}>
          <span>🏍️</span> Controle financeiro para entregadores
        </div>

        <h1 style={{
          fontSize: "clamp(2.8rem, 8vw, 5.5rem)",
          fontWeight: 900,
          lineHeight: 1.05,
          letterSpacing: "-0.04em",
          marginBottom: 24,
          color: "#F5F5F5",
        }}>
          Sem patrão.{" "}
          <span className="text-gradient">Só você</span>{" "}
          e a rua.
        </h1>

        <p style={{
          fontSize: "clamp(1.05rem, 2.5vw, 1.3rem)",
          color: "#888",
          lineHeight: 1.7,
          marginBottom: 48,
          maxWidth: 560,
          margin: "0 auto 48px",
        }}>
          Registre corridas, controle gastos e acompanhe seus ganhos em tempo real.
          Gratuito para começar. Sem cadastro.
        </p>

        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#pricing" className="btn-primary" style={{ fontSize: "1.05rem", padding: "16px 32px" }}>
            Começar agora — é grátis
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#features" className="btn-ghost" style={{ fontSize: "1.05rem", padding: "16px 32px" }}>
            Ver funcionalidades
          </a>
        </div>

        {/* Trust badges */}
        <div style={{ marginTop: 60, display: "flex", gap: 32, justifyContent: "center", flexWrap: "wrap", opacity: 0.6 }}>
          {["iFood", "Uber", "Rappi", "99", "inDrive", "Loggi"].map(p => (
            <span key={p} style={{ fontSize: "0.85rem", color: "#888", fontWeight: 500 }}>{p}</span>
          ))}
        </div>
        <p style={{ fontSize: "0.78rem", color: "#555", marginTop: 12 }}>Compatível com todas as plataformas</p>
      </div>

      {/* Mock dashboard card */}
      <div className="animate-float" style={{
        marginTop: 80, position: "relative", zIndex: 1,
        maxWidth: 400, width: "100%",
      }}>
        <DashboardMock />
      </div>
    </section>
  );
}

function DashboardMock() {
  return (
    <div className="glass-card glow-red" style={{ padding: 24, textAlign: "left" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <div>
          <p style={{ fontSize: "0.78rem", color: "#666", fontWeight: 500, marginBottom: 2 }}>Hoje, segunda-feira</p>
          <p style={{ fontSize: "1.05rem", fontWeight: 600, color: "#F5F5F5" }}>Bom dia, João! 👋</p>
        </div>
        <div style={{
          padding: "6px 12px", borderRadius: 8,
          background: "rgba(76,175,80,0.15)",
          border: "1px solid rgba(76,175,80,0.3)",
        }}>
          <span style={{ fontSize: "0.75rem", color: "#4CAF50", fontWeight: 600 }}>● Em rota</span>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 20 }}>
        {[
          { label: "Bruto", value: "R$ 312", color: "#F5F5F5" },
          { label: "Gastos", value: "R$ 48", color: "#E63946" },
          { label: "Líquido", value: "R$ 264", color: "#4CAF50" },
        ].map(item => (
          <div key={item.label} style={{
            background: "rgba(255,255,255,0.04)",
            borderRadius: 10,
            padding: "12px 10px",
            textAlign: "center",
          }}>
            <p style={{ fontSize: "0.72rem", color: "#666", marginBottom: 4 }}>{item.label}</p>
            <p style={{ fontSize: "1rem", fontWeight: 700, color: item.color }}>{item.value}</p>
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div style={{ marginBottom: 8 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
          <span style={{ fontSize: "0.75rem", color: "#888" }}>Meta: R$ 5.000</span>
          <span style={{ fontSize: "0.75rem", color: "#E63946", fontWeight: 600 }}>63%</span>
        </div>
        <div style={{ height: 6, background: "rgba(255,255,255,0.08)", borderRadius: 4, overflow: "hidden" }}>
          <div style={{
            height: "100%", width: "63%",
            background: "linear-gradient(90deg, #E63946, #ff6b6b)",
            borderRadius: 4,
            boxShadow: "0 0 12px rgba(230,57,70,0.5)",
          }} />
        </div>
      </div>
      <p style={{ fontSize: "0.72rem", color: "#555" }}>14 corridas • 87km rodados • R$/h: R$28,40</p>
    </div>
  );
}

// ─── FEATURES ──────────────────────────────────────────────────────────────
const features = [
  {
    icon: "⚡",
    title: "Registro em segundos",
    desc: "Anote corridas e gastos entre uma entrega e outra. Interface pensada para o ritmo da rua.",
  },
  {
    icon: "🎯",
    title: "Metas gamificadas",
    desc: "R$1k, R$5k, R$10k… Confete quando você bate. Progresso visual que motiva de verdade.",
  },
  {
    icon: "📊",
    title: "Dashboard inteligente",
    desc: "Bruto, líquido, R$/hora, R$/km — tudo calculado automaticamente, em tempo real.",
  },
  {
    icon: "📴",
    title: "100% offline",
    desc: "Funciona sem internet. Seus dados ficam no seu dispositivo. Sem dependência de nuvem.",
  },
  {
    icon: "🌧️",
    title: "Registro de chuva",
    desc: "Compare seus ganhos em dias de chuva vs sol. Descubra quando vale mais a pena trabalhar.",
  },
  {
    icon: "📄",
    title: "Exportar PDF (Pro)",
    desc: "Comprove sua renda com um relatório profissional. Perfeito para financiamento ou MEI.",
  },
  {
    icon: "🔥",
    title: "Fechar o dia",
    desc: "Registre tudo de uma vez ao final do expediente. Sem estresse durante o trabalho.",
  },
  {
    icon: "🏦",
    title: "FreeRidez Finance",
    desc: "Dicas financeiras exclusivas: Bitcoin, conta digital, seguro de moto e muito mais.",
  },
];

function Features() {
  return (
    <section id="features" style={{ padding: "120px 24px", maxWidth: 1200, margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <div className="badge" style={{ marginBottom: 16 }}>Funcionalidades</div>
        <h2 className="section-title" style={{ marginBottom: 16 }}>
          Tudo que você precisa,{" "}
          <span className="text-gradient">nada do que não precisa</span>
        </h2>
        <p className="section-subtitle" style={{ margin: "0 auto" }}>
          Desenvolvido por entregadores, para entregadores. Cada feature resolve um problema real da rua.
        </p>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
        gap: 20,
      }}>
        {features.map((f) => (
          <div key={f.title} className="glass-card card-hover" style={{ padding: 28 }}>
            <div style={{
              width: 52, height: 52, borderRadius: 14,
              background: "rgba(230,57,70,0.1)",
              border: "1px solid rgba(230,57,70,0.2)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 26, marginBottom: 16,
            }}>{f.icon}</div>
            <h3 style={{ fontWeight: 700, fontSize: "1.05rem", marginBottom: 10, color: "#F5F5F5" }}>{f.title}</h3>
            <p style={{ color: "#888", fontSize: "0.9rem", lineHeight: 1.6 }}>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── HOW IT WORKS ──────────────────────────────────────────────────────────
const steps = [
  { num: "01", title: "Abra o app", desc: "Sem cadastro, sem burocracia. Em 10 segundos você está pronto pra registrar." },
  { num: "02", title: "Configure seu veículo", desc: "Moto, carro, bike ou patinete. Adicione o consumo médio para cálculos precisos." },
  { num: "03", title: "Registre suas corridas", desc: "Rápido entre uma entrega e outra, ou feche o dia de uma vez ao final." },
  { num: "04", title: "Acompanhe seus ganhos", desc: "Dashboard em tempo real com bruto, líquido, metas e muito mais." },
];

function HowItWorks() {
  return (
    <section id="how" style={{
      padding: "120px 24px",
      background: "rgba(26,26,26,0.4)",
      borderTop: "1px solid rgba(255,255,255,0.04)",
      borderBottom: "1px solid rgba(255,255,255,0.04)",
    }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="badge" style={{ marginBottom: 16 }}>Como funciona</div>
          <h2 className="section-title">
            Simples como deve ser
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 32, position: "relative" }}>
          {steps.map((s, i) => (
            <div key={s.num} style={{ textAlign: "center" }}>
              <div style={{
                width: 72, height: 72, borderRadius: "50%",
                background: "rgba(230,57,70,0.1)",
                border: "2px solid rgba(230,57,70,0.3)",
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 20px",
                position: "relative",
              }}>
                <span style={{ fontWeight: 800, fontSize: "1.2rem", color: "#E63946" }}>{s.num}</span>
                {i < steps.length - 1 && (
                  <div style={{
                    position: "absolute", right: "-50%", top: "50%",
                    width: "100%", height: 1,
                    background: "linear-gradient(90deg, rgba(230,57,70,0.3), transparent)",
                    display: "none",
                  }} />
                )}
              </div>
              <h3 style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: 10, color: "#F5F5F5" }}>{s.title}</h3>
              <p style={{ color: "#888", fontSize: "0.9rem", lineHeight: 1.6 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PRICING ───────────────────────────────────────────────────────────────
function Pricing() {
  const freeFeatures = [
    "Sem cadastro — comece já",
    "1 veículo cadastrado",
    "1 meta ativa",
    "Histórico: últimos 7 dias",
    "Registro rápido de corridas",
    "Dashboard básico",
    "100% offline",
  ];
  const proFeatures = [
    "Tudo do plano Free",
    "Dados sincronizados na nuvem",
    "Múltiplos veículos",
    "Múltiplas metas simultâneas",
    "Histórico ilimitado",
    "Análise avançada + heatmap",
    "Exportar PDF (comprovante)",
    "Insights automáticos",
    "Sem anúncios",
    "Suporte prioritário",
  ];

  return (
    <section id="pricing" style={{ padding: "120px 24px", maxWidth: 900, margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <div className="badge" style={{ marginBottom: 16 }}>Planos</div>
        <h2 className="section-title" style={{ marginBottom: 16 }}>
          Comece grátis,{" "}
          <span className="text-gradient">evolua quando quiser</span>
        </h2>
        <p className="section-subtitle" style={{ margin: "0 auto" }}>
          O plano Free não é demo — é completo para o dia a dia. O Pro é para quem quer levar a sério.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        {/* Free */}
        <div className="glass-card" style={{ padding: 36 }}>
          <p style={{ fontSize: "0.85rem", color: "#888", fontWeight: 600, marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>Free</p>
          <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 8 }}>
            <span style={{ fontSize: "3rem", fontWeight: 900, color: "#F5F5F5", letterSpacing: "-0.04em" }}>R$ 0</span>
          </div>
          <p style={{ color: "#555", fontSize: "0.85rem", marginBottom: 32 }}>Para sempre. Sem cartão.</p>
          <a href="#" className="btn-ghost" style={{ width: "100%", marginBottom: 32, justifyContent: "center" }}>
            Começar grátis
          </a>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
            {freeFeatures.map(f => (
              <li key={f} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <span style={{ color: "#4CAF50", fontSize: "1rem", flexShrink: 0, marginTop: 1 }}>✓</span>
                <span style={{ color: "#888", fontSize: "0.9rem" }}>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pro */}
        <div className="glass-card glow-red" style={{
          padding: 36,
          background: "rgba(230,57,70,0.06)",
          border: "1px solid rgba(230,57,70,0.25)",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", top: 20, right: 20,
            background: "linear-gradient(135deg, #E63946, #c1121f)",
            color: "white", fontSize: "0.72rem", fontWeight: 700,
            padding: "4px 10px", borderRadius: 6, textTransform: "uppercase", letterSpacing: "0.05em",
          }}>Popular</div>

          <p style={{ fontSize: "0.85rem", color: "#E63946", fontWeight: 600, marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>Pro</p>
          <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 4 }}>
            <span style={{ fontSize: "3rem", fontWeight: 900, color: "#F5F5F5", letterSpacing: "-0.04em" }}>R$ 9,90</span>
            <span style={{ color: "#888", fontSize: "0.9rem" }}>/mês</span>
          </div>
          <p style={{ color: "#555", fontSize: "0.85rem", marginBottom: 32 }}>Ou R$ 69,90/ano (2 meses grátis)</p>
          <a href="#" className="btn-primary" style={{ width: "100%", marginBottom: 32, justifyContent: "center" }}>
            Assinar Pro
          </a>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
            {proFeatures.map(f => (
              <li key={f} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <span style={{ color: "#E63946", fontSize: "1rem", flexShrink: 0, marginTop: 1 }}>✓</span>
                <span style={{ color: "#888", fontSize: "0.9rem" }}>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

// ─── CTA / FOOTER ──────────────────────────────────────────────────────────
function CTA() {
  return (
    <section style={{
      padding: "100px 24px",
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(230,57,70,0.1), transparent)",
      }} />
      <div style={{ position: "relative", zIndex: 1, maxWidth: 600, margin: "0 auto" }}>
        <h2 className="section-title" style={{ marginBottom: 20 }}>
          A rua não espera.{" "}
          <span className="text-gradient">Você também não deveria.</span>
        </h2>
        <p style={{ color: "#888", fontSize: "1.1rem", marginBottom: 40 }}>
          Comece a controlar seus ganhos hoje. Grátis. Sem cadastro. Em 10 segundos.
        </p>
        <a href="#pricing" className="btn-primary" style={{ fontSize: "1.1rem", padding: "18px 40px" }}>
          Começar agora — é grátis 🏍️
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{
      padding: "40px 24px",
      borderTop: "1px solid rgba(255,255,255,0.05)",
      textAlign: "center",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 28, height: 28, borderRadius: 7,
            background: "linear-gradient(135deg, #E63946, #c1121f)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 13, fontWeight: 800, color: "white",
          }}>F</div>
          <span style={{ fontWeight: 700, color: "#888", fontSize: "0.95rem" }}>FreeRidez</span>
        </div>
        <p style={{ color: "#555", fontSize: "0.82rem" }}>
          © 2025 FreeRidez. Feito com ❤️ para quem vive na rua.
        </p>
        <div style={{ display: "flex", gap: 20 }}>
          {["Privacidade", "Termos", "Contato"].map(l => (
            <a key={l} href="#" style={{ color: "#555", fontSize: "0.82rem", textDecoration: "none" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#888")}
              onMouseLeave={e => (e.currentTarget.style.color = "#555")}
            >{l}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─── PAGE ──────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
