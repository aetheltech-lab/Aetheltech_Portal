import React, { useState, useRef } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import logoImage from './assets/logo.png'; 

// --- AETHELTECH LIVE DISTRIBUTION CONFIG ---
const PAYPAL_CLIENT_ID = "Abgwsr6qsjiL2-XxFmQ_6qSAqHuyHziiBgFB9Wnht4wEa8rSg-KTbCQjqnlORLThwqooe_A5jaCMq0nh";
const PRO_PLAN_ID = "P-5ML4271244454362WM36FGRY"; 

const DOWNLOAD_LINKS = {
  // LINK VERIFIED: 2026-01-20
  nexus: "https://github.com/aetheltech-lab/Nexus_Gaming_Distro/releases/download/v1.4.2/Nexus.Prime.1.0.0.exe",
  ai: "#" // Sector Locked: Sanitization in Progress
};

const App = () => {
  const [activeApp, setActiveApp] = useState('nexus');
  const [showPatchNotes, setShowPatchNotes] = useState(false);
  const [isHoveringNews, setIsHoveringNews] = useState(false);
  const scrollRef = useRef(null);

  const apps = {
    nexus: {
      id: 'nexus', name: 'NEXUS GAMING', tagline: 'GAMING DEVELOPMENT PLATFORM', version: 'v1.4.2', color: '#06b6d4', 
      bg: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2070',
      showPaypal: true,
      news: [
        { title: 'GENESIS PROTOCOL', desc: 'Draenei mesh integration complete.', tag: '3D UPDATE' },
        { title: 'KRIOS CHRONICLES', desc: 'New branching narrative nodes added.', tag: 'NARRATIVE' },
        { title: 'ORC ASCENSION', desc: 'Testing skin shader variations.', tag: 'R&D' }
      ],
      logs: [{ date: '2026-01-19', ver: 'v1.4.2', note: 'PayPal Pro Economic Bridge integrated.' }]
    },
    'nexus-ai': {
      id: 'nexus-ai', name: 'NEXUS AI', tagline: 'ARTIFICIAL INTELLIGENCE PLATFORM', version: 'v2.1.0', color: '#a855f7', 
      bg: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2070',
      showPaypal: false,
      news: [
        { title: 'NEURAL SYNC v2', desc: 'Optimized Llama 3 response latency.', tag: 'CORE' },
        { title: 'HEARING AID', desc: 'Advanced phonetic autocorrect online.', tag: 'VOICE' }
      ],
      logs: [{ date: '2026-01-19', ver: 'v2.1.0', note: 'Renamed to Nexus AI. Trademark Shield active.' }]
    }
  };

  const current = apps[activeApp];

  const handleDownload = () => {
    const downloadUrl = activeApp === 'nexus' ? DOWNLOAD_LINKS.nexus : DOWNLOAD_LINKS.ai;
    
    if (downloadUrl === "#") {
      alert("Sir, the Nexus AI public build is currently undergoing sanitization. Please stand by.");
      return;
    }

    // Protocol: Direct Handshake with Aetheltech GitHub Node
    window.location.href = downloadUrl;
  };

  const scrollNews = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const offset = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollTo({ left: scrollLeft + offset, behavior: 'smooth' });
    }
  };

  return (
    <div style={styles.fullscreenWrapper}>
      <style>{`
        body, html, #root { margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden; background-color: black; font-family: 'Inter', sans-serif; }
        .internal-scroll::-webkit-scrollbar { display: none; }
        .internal-scroll { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes glow { 0% { opacity: 0.15; } 50% { opacity: 0.45; } 100% { opacity: 0.15; } }
        @keyframes intenseGlow { 0% { opacity: 0.5; } 50% { opacity: 1; } 100% { opacity: 0.5; } }
        .news-card { transition: all 0.3s ease; border: 1px solid rgba(255,255,255,0.05); }
        .news-card:hover { border-color: ${current.color} !important; background: rgba(255,255,255,0.08) !important; transform: scale(1.02); }
        .nav-arrow:hover { background: ${current.color} !important; color: black !important; box-shadow: 0 0 20px ${current.color}; }
        .action-btn:hover { filter: brightness(1.2); transform: translateY(-2px); }
      `}</style>

      <div style={{...styles.heroBackground, backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.95)), url(${current.bg})`}}></div>

      <div style={{
        ...styles.horizontalReactor, 
        background: `linear-gradient(to right, transparent, ${current.color}, transparent)`,
        boxShadow: isHoveringNews ? `0 0 100px ${current.color}` : `0 0 40px ${current.color}`,
        animation: isHoveringNews ? 'intenseGlow 1s infinite' : 'glow 4s infinite',
      }}></div>

      <nav style={styles.sidebar}>
        <img src={logoImage} alt="Aetheltech" style={{...styles.sidebarLogo, filter: `drop-shadow(0 0 10px ${current.color})` }} />
        <div style={styles.navDivider}></div>
        <button onClick={() => setActiveApp('nexus')} style={activeApp === 'nexus' ? {...styles.navBtn, borderColor: '#06b6d4'} : styles.navBtn}>NX</button>
        <button onClick={() => setActiveApp('nexus-ai')} style={activeApp === 'nexus-ai' ? {...styles.navBtn, borderColor: '#a855f7'} : styles.navBtn}>AI</button>
        <button onClick={() => setShowPatchNotes(!showPatchNotes)} style={styles.patchToggle}>📜</button>
      </nav>

      <main className="internal-scroll" style={{...styles.mainContent, marginRight: showPatchNotes ? '350px' : '0'}}>
        <div style={styles.centralHub}>
          <div style={styles.brandingHeader}>
             <div style={styles.brandingRow}>
                <img src={logoImage} alt="Logo" style={{...styles.headerLogo, width: '300px', height: '120px', filter: `drop-shadow(0 0 15px ${current.color}88)`}} />
                <div style={styles.brandingTextStack}>
                    <span style={{...styles.aetheltechTitle, color: current.color}}>AETHELTECH</span>
                    <span style={styles.systemsText}>ADVANCED SYSTEMS & DISTRIBUTIONS</span>
                </div>
             </div>
          </div>

          <header style={styles.header}>
            <h1 style={styles.title}>{current.name}</h1>
            <p style={{...styles.subtitle, color: current.color}}>{current.tagline}</p>
          </header>

          <div style={styles.newsWrapper}>
            <button className="nav-arrow" onClick={() => scrollNews('left')} style={{...styles.arrowBtn, left: '-20px'}}>‹</button>
            <section ref={scrollRef} style={styles.newsSection}>
              {current.news.map((item, i) => (
                <div key={i} className="news-card" onMouseEnter={() => setIsHoveringNews(true)} onMouseLeave={() => setIsHoveringNews(false)} style={{...styles.newsCard, borderLeft: `4px solid ${current.color}`}}>
                  <div style={styles.newsTag}>{item.tag}</div>
                  <h3 style={styles.newsTitle}>{item.title}</h3>
                  <p style={styles.newsDesc}>{item.desc}</p>
                </div>
              ))}
            </section>
            <button className="nav-arrow" onClick={() => scrollNews('right')} style={{...styles.arrowBtn, right: '-20px'}}>›</button>
          </div>

          <div style={{height: '60px'}}></div>

          <div style={styles.glassCard}>
            <div style={styles.statusRow}>
              <span>Status: <b style={{color: current.color}}>LIVE</b></span>
              <span>Distributor: Aetheltech Hub v2.0</span>
            </div>
            
            <div style={styles.buttonGrid}>
                <button className="action-btn" style={{...styles.launchBtn, background: current.color}}>LAUNCH PLATFORM</button>
                <button onClick={handleDownload} className="action-btn" style={styles.downloadBtn}>DOWNLOAD INSTALLER</button>
            </div>

            {current.showPaypal && (
              <div style={styles.paypalWrapper}>
                <div style={styles.priceTag}>UNLOCK PRO FEATURES • €9.99 / MO</div>
                <PayPalScriptProvider options={{ "client-id": PAYPAL_CLIENT_ID, vault: true, currency: "EUR" }}>
                  <PayPalButtons style={{ shape: 'pill', color: 'blue', layout: 'vertical', label: 'subscribe' }} createSubscription={(data, actions) => actions.subscription.create({ 'plan_id': PRO_PLAN_ID })} />
                </PayPalScriptProvider>
              </div>
            )}
          </div>
          <div style={{height: '10vh'}}></div>
        </div>
      </main>

      <aside style={{...styles.patchNotes, transform: showPatchNotes ? 'translateX(0)' : 'translateX(100%)'}}>
        <h3 style={{color: current.color, fontSize: '0.8rem', letterSpacing: '0.3rem'}}>AETHELTECH LOGS</h3>
        {current.logs.map((log, i) => (
          <div key={i} style={styles.logItem}>
            <div style={styles.logHeader}><span>{log.ver}</span><span style={{fontSize: '0.6rem'}}>{log.date}</span></div>
            <p style={styles.logText}>{log.note}</p>
          </div>
        ))}
      </aside>
    </div>
  );
};

const styles = {
  fullscreenWrapper: { width: '100vw', height: '100vh', display: 'flex', backgroundColor: '#000', color: '#fff', position: 'relative', overflow: 'hidden' },
  heroBackground: { position: 'absolute', inset: 0, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.35, zIndex: 0, transition: 'all 1s ease' },
  horizontalReactor: { position: 'absolute', top: '48.5%', width: '100%', height: '2px', zIndex: 5 },
  sidebar: { width: '100px', backgroundColor: 'rgba(5,5,5,0.98)', borderRight: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '30px 0', zIndex: 30 },
  sidebarLogo: { width: '60px', height: '60px', marginBottom: '30px' },
  navDivider: { width: '40px', height: '1px', background: 'rgba(255,255,255,0.1)', marginBottom: '30px' },
  navBtn: { width: '60px', height: '60px', backgroundColor: '#111', border: '2px solid transparent', borderRadius: '15px', color: '#fff', fontWeight: 'bold', cursor: 'pointer', marginBottom: '20px', transition: '0.3s' },
  patchToggle: { background: 'none', border: 'none', fontSize: '1.8rem', cursor: 'pointer', marginTop: 'auto', opacity: 0.6 },
  mainContent: { flex: 1, zIndex: 10, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: '4vh', transition: '0.4s', position: 'relative', overflowY: 'auto' },
  centralHub: { width: '85%', maxWidth: '1200px', display: 'flex', flexDirection: 'column', gap: '0px', position: 'relative', zIndex: 20 },
  brandingHeader: { marginBottom: '30px' },
  brandingRow: { display: 'flex', alignItems: 'center', gap: '25px' },
  headerLogo: { transition: '0.5s' },
  brandingTextStack: { display: 'flex', flexDirection: 'column' },
  aetheltechTitle: { fontSize: '1.5rem', fontWeight: '900', letterSpacing: '0.8rem' },
  systemsText: { fontSize: '0.7rem', color: '#666', letterSpacing: '0.3rem', marginTop: '6px' },
  header: { textAlign: 'left', marginBottom: '35px' },
  title: { fontSize: '4.5rem', fontWeight: '900', letterSpacing: '1rem', margin: 0, textShadow: '0 5px 20px rgba(0,0,0,0.9)' },
  subtitle: { fontSize: '0.9rem', letterSpacing: '0.6rem', marginTop: '10px' },
  newsWrapper: { position: 'relative', display: 'flex', alignItems: 'center', zIndex: 20 },
  newsSection: { display: 'flex', gap: '25px', overflowX: 'hidden', padding: '15px 0', scrollBehavior: 'smooth' },
  newsCard: { flex: '0 0 320px', height: '180px', background: 'rgba(10,10,10,0.9)', borderRadius: '20px', padding: '25px', cursor: 'pointer', backdropFilter: 'blur(10px)' },
  arrowBtn: { position: 'absolute', zIndex: 25, width: '45px', height: '45px', borderRadius: '50', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', cursor: 'pointer', fontSize: '1.8rem' },
  newsTag: { fontSize: '0.6rem', opacity: 0.5, letterSpacing: '0.2rem', marginBottom: '12px' },
  newsTitle: { fontSize: '1.1rem', fontWeight: 'bold', margin: '0 0 12px 0' },
  newsDesc: { fontSize: '0.8rem', color: '#666', lineHeight: '1.5' },
  glassCard: { background: 'rgba(10,10,10,0.85)', border: '1px solid rgba(255,255,255,0.1)', padding: '40px', borderRadius: '35px', width: '500px', position: 'relative', zIndex: 20, backdropFilter: 'blur(15px)', marginBottom: '40px' },
  statusRow: { display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: '#555', marginBottom: '30px' },
  buttonGrid: { display: 'flex', gap: '20px', marginBottom: '30px' },
  launchBtn: { flex: 2, padding: '18px', border: 'none', borderRadius: '18px', color: '#fff', fontWeight: '900', letterSpacing: '0.2rem', cursor: 'pointer', transition: '0.3s' },
  downloadBtn: { flex: 1, padding: '18px', background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '18px', color: '#fff', fontSize: '0.7rem', fontWeight: 'bold', cursor: 'pointer', transition: '0.3s' },
  paypalWrapper: { borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '25px' },
  priceTag: { fontSize: '0.7rem', color: '#06b6d4', marginBottom: '15px', fontWeight: 'bold' },
  patchNotes: { position: 'absolute', right: 0, top: 0, width: '380px', height: '100%', backgroundColor: 'rgba(5,5,5,0.98)', borderLeft: '1px solid rgba(255,255,255,0.05)', padding: '45px', zIndex: 25, transition: '0.4s' },
  logItem: { marginBottom: '30px', borderBottom: '1px solid rgba(255,255,255,0.02)', paddingBottom: '20px' },
  logHeader: { display: 'flex', justifyContent: 'space-between', marginBottom: '8px' },
  logText: { fontSize: '0.8rem', color: '#555', margin: 0 }
};

export default App;