import { useEffect, useState } from "react";
import {
  ArrowRight,
  Box,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CloudUpload,
  Code2,
  Download,
  ExternalLink,
  Menu,
  MonitorSmartphone,
  PackageCheck,
  QrCode,
  ScanLine,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Store,
  X,
} from "lucide-react";

const APP_URL = "https://app.smart3dscan.net";
const APP_STORE_URL = "https://apps.apple.com/by/app/smart-3d-scan/id1562115482";
const USER_GUIDE_PDF = "./assets/smart-3d-qr-closed-beta-user-guide.pdf";

const userGuidePages = Array.from({ length: 8 }, (_, index) => ({
  number: index + 1,
  src: `./assets/user-guide/Onboarding-${index + 1}.png`,
}));

const workflow = [
  { icon: ScanLine, number: "01", title: "Create a 3D scan", text: "Use the Smart 3D Scan iOS app to create your 3D model." },
  { icon: CloudUpload, number: "02", title: "Upload", text: "Add USDZ for iOS AR and GLB for browser preview." },
  { icon: QrCode, number: "03", title: "Generate QR", text: "Get a stable QR code and public model link automatically." },
  { icon: MonitorSmartphone, number: "04", title: "Open Viewer", text: "Share a fast public Viewer that needs no customer login." },
  { icon: Box, number: "05", title: "AR or web", text: "Launch AR on iPhone or explore the GLB model in a browser." },
  { icon: Code2, number: "06", title: "Embed", text: "Place the interactive 3D experience directly on your website." },
];

const useCases = [
  { icon: ShoppingBag, title: "E-commerce", text: "Let shoppers inspect products before they buy, directly from a product page or QR code." },
  { icon: Store, title: "Retail & packaging", text: "Connect physical displays, packaging, and printed materials to an interactive 3D experience." },
  { icon: PackageCheck, title: "Product teams", text: "Share prototypes, samples, and digital twins with a stable link that survives model updates." },
];

const faqs = [
  { question: "What files does the platform support?", answer: "USDZ enables iOS AR Quick Look. GLB enables interactive browser preview. Upload both formats to deliver the complete experience." },
  { question: "Do customers need an account to view a model?", answer: "No. Viewer and Embed pages are public. Only the dashboard used to upload and manage models requires an account." },
  { question: "Does the QR code change when I replace a model?", answer: "No. You can replace USDZ or GLB files while keeping the same Scan ID, Viewer link, QR code, and embed code." },
  { question: "Does Smart 3D QR convert USDZ and GLB automatically?", answer: "Not yet. During the closed beta, prepare both formats before uploading when you need both AR and browser preview." },
];

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="Smart 3D QR home">
      <span className="brand-mark"><Box size={22} strokeWidth={2} /></span>
      <span><small>WEBAR ASSETS</small><strong>Smart 3D QR</strong></span>
    </a>
  );
}

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [guideOpen, setGuideOpen] = useState(false);
  const [guidePage, setGuidePage] = useState(0);
  const closeMenu = () => setMenuOpen(false);
  const openGuide = () => {
    setGuidePage(0);
    setGuideOpen(true);
    setMenuOpen(false);
  };
  const closeGuide = () => setGuideOpen(false);
  const goToPreviousGuidePage = () => setGuidePage((page) => (page === 0 ? userGuidePages.length - 1 : page - 1));
  const goToNextGuidePage = () => setGuidePage((page) => (page === userGuidePages.length - 1 ? 0 : page + 1));

  useEffect(() => {
    if (!guideOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeGuide();
      if (event.key === "ArrowLeft") goToPreviousGuidePage();
      if (event.key === "ArrowRight") goToNextGuidePage();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [guideOpen]);

  return (
    <div id="top" className="site-shell">
      <header className="site-header">
        <div className="header-inner">
          <Brand />
          <button className="menu-button" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <nav className={menuOpen ? "site-nav open" : "site-nav"} aria-label="Primary navigation">
            <a href="#capture" onClick={closeMenu}>Create a scan</a>
            <button type="button" className="nav-link-button" onClick={openGuide}>User Guide</button>
            <a href="#experience" onClick={closeMenu}>AR & web</a>
            <a href="#use-cases" onClick={closeMenu}>For teams</a>
            <a href="#faq" onClick={closeMenu}>FAQ</a>
            <div className="nav-actions">
              <a className="button secondary small" href={`${APP_URL}/login`}>Sign in</a>
              <a className="button primary small" href={`${APP_URL}/signup`}>Join closed beta <ArrowRight size={16} /></a>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero section">
          <div className="hero-copy">
            <p className="eyebrow"><Sparkles size={15} /> 3D commerce workflow</p>
            <h1>Turn real products into shareable 3D experiences.</h1>
            <p className="hero-lead">Scan with the Smart 3D Scan iOS app. Publish once. Let anyone open the product in AR, explore it on the web, or embed it on a store page.</p>
            <div className="hero-actions">
              <a className="button primary" href={`${APP_URL}/signup`}>Join closed beta <ArrowRight size={18} /></a>
              <a className="text-link" href="#workflow">See the workflow <ChevronDown size={17} /></a>
              <button className="button secondary guide-trigger" type="button" onClick={openGuide}>View User Guide</button>
            </div>
            <ul className="hero-points" aria-label="Platform benefits">
              <li><Check size={16} /> Stable QR and Viewer links</li>
              <li><Check size={16} /> iOS AR + browser 3D</li>
              <li><Check size={16} /> No viewer login required</li>
            </ul>
          </div>

          <div className="hero-visual" aria-label="A product viewed in augmented reality with Smart 3D QR">
            <div className="hero-media">
              <img src="./assets/smart-3d-qr-hero-ar-final.png" alt="An iPhone displaying a blue chair in augmented reality beside a QR code" />
            </div>
          </div>
        </section>

        <section className="ecosystem-strip" aria-label="Smart 3D ecosystem">
          <div className="ecosystem-inner">
            <p>ONE CONNECTED ECOSYSTEM</p>
            <div className="ecosystem-item"><span><Smartphone size={20} /></span><div><strong>Smart 3D Scan</strong><small>Capture on iPhone</small></div></div>
            <ArrowRight className="ecosystem-arrow" size={20} />
            <div className="ecosystem-item"><span><CloudUpload size={20} /></span><div><strong>Smart 3D QR Cloud</strong><small>Publish and manage</small></div></div>
            <ArrowRight className="ecosystem-arrow" size={20} />
            <div className="ecosystem-item"><span><MonitorSmartphone size={20} /></span><div><strong>Customer experience</strong><small>AR, web and embed</small></div></div>
          </div>
        </section>

        <section id="capture" className="capture-section">
          <div className="section capture-inner">
            <div className="capture-copy">
              <p className="eyebrow"><ScanLine size={15} /> Start with a 3D scan</p>
              <h2>Create your 3D model on iPhone.</h2>
              <p>Use the Smart 3D Scan iOS app to capture a real product and prepare it for publishing in Smart 3D QR Cloud.</p>
              <a className="app-store-link" href={APP_STORE_URL} target="_blank" rel="noreferrer" aria-label="Download Smart 3D Scan on the App Store">
                <img src="./assets/download-on-the-app-store.png" alt="Download on the App Store" />
              </a>
              <p className="capture-next"><ArrowRight size={16} /> Next: Upload to Smart 3D QR Cloud</p>
            </div>

            <div className="capture-card">
              <div className="capture-app">
                <span className="capture-app-icon official">
                  <img src="./assets/smart-3d-scan-ios-logo.png" alt="" aria-hidden="true" />
                </span>
                <div><small>IOS CAPTURE APP</small><strong>Smart 3D Scan</strong><p>Create accurate 3D models directly on iPhone.</p></div>
              </div>
              <div className="app-qr">
                <img src="./assets/smart-3d-scan-app-store-qr.png" alt="QR code to download Smart 3D Scan from the App Store" />
                <div><strong>Open on your iPhone</strong><span>Scan to view in the App Store</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="workflow" className="section workflow-section">
          <div className="section-heading">
            <p className="eyebrow">From object to audience</p>
            <h2>From scan to sale.</h2>
            <p>Every step stays connected, so your public link and QR code remain stable even when the 3D files change.</p>
          </div>
          <div className="workflow-grid">
            {workflow.map(({ icon: Icon, number, title, text }) => (
              <article className="workflow-card" key={number}>
                <div className="card-top"><span className="icon-tile"><Icon size={22} /></span><small>{number}</small></div>
                <h3>{title}</h3><p>{text}</p>
              </article>
            ))}
          </div>
          <div className="guide-callout">
            <div>
              <p className="eyebrow">Closed beta onboarding</p>
              <h3>Need the step-by-step guide?</h3>
              <p>Open the visual walkthrough from scanning on iPhone to QR codes, AR, web preview, and embed.</p>
            </div>
            <div className="guide-callout-actions">
              <button className="button primary" type="button" onClick={openGuide}>View User Guide</button>
              <a className="button secondary" href={USER_GUIDE_PDF} download>Download guide <Download size={17} /></a>
            </div>
          </div>
        </section>

        <section id="experience" className="experience-section">
          <div className="section experience-inner">
            <div className="experience-visual">
              <img src="./assets/smart-3d-qr-viewer.png" alt="Public Smart 3D QR Viewer showing the Fawn toy model and download actions" />
            </div>
            <div className="experience-copy">
              <p className="eyebrow">One Viewer, every surface</p>
              <h2>AR on iPhone. Interactive 3D everywhere else.</h2>
              <p>Give every product a public destination that adapts to the device. Customers can inspect a GLB model in the browser or launch USDZ in iOS AR Quick Look.</p>
              <div className="feature-list">
                <div><span><Smartphone size={20} /></span><div><strong>Native iOS AR</strong><p>Open USDZ from Safari with a single tap.</p></div></div>
                <div><span><Box size={20} /></span><div><strong>Browser-based 3D</strong><p>Rotate and inspect GLB models without installing an app.</p></div></div>
                <div><span><Code2 size={20} /></span><div><strong>Website embed</strong><p>Copy one iframe and add 3D to a product page.</p></div></div>
              </div>
              <a className="button secondary" href={`${APP_URL}/login`}>Open the dashboard <ExternalLink size={17} /></a>
            </div>
          </div>
        </section>

        <section id="use-cases" className="section use-cases-section">
          <div className="section-heading compact">
            <p className="eyebrow">Designed for real product workflows</p>
            <h2>Put your 3D scans to work.</h2>
          </div>
          <div className="use-case-grid">
            {useCases.map(({ icon: Icon, title, text }) => (
              <article className="use-case-card" key={title}><span className="icon-tile"><Icon size={22} /></span><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </section>

        <section className="proof-section">
          <div className="section proof-inner">
            <div><ShieldCheck size={24} /><p><strong>Persistent by design</strong><span>Models and metadata survive redeploys.</span></p></div>
            <div><QrCode size={24} /><p><strong>Stable distribution</strong><span>Replace files without replacing your QR.</span></p></div>
            <div><MonitorSmartphone size={24} /><p><strong>Responsive experience</strong><span>Dashboard, Viewer and Embed work across screens.</span></p></div>
          </div>
        </section>

        <section id="faq" className="section faq-section">
          <div className="section-heading compact"><p className="eyebrow">FAQ</p><h2>Good to know before you start.</h2></div>
          <div className="faq-list">
            {faqs.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div className={isOpen ? "faq-item open" : "faq-item"} key={item.question}>
                  <button type="button" onClick={() => setOpenFaq(isOpen ? -1 : index)} aria-expanded={isOpen}>
                    <span>{item.question}</span><ChevronDown size={19} />
                  </button>
                  {isOpen ? <p>{item.answer}</p> : null}
                </div>
              );
            })}
          </div>
        </section>

        <section className="section final-cta">
          <div><p className="eyebrow">Closed beta</p><h2>Ready to turn your next product into an AR-ready QR?</h2><p>Join the early group shaping the Smart 3D Scan ecosystem.</p></div>
          <div className="final-actions">
            <a className="button primary light" href={`${APP_URL}/signup`}>Join closed beta <ArrowRight size={18} /></a>
            <button className="button light-outline" type="button" onClick={openGuide}>View User Guide</button>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner"><Brand /><p>Scan in 3D. Publish once. Share everywhere.</p><div><a href={`${APP_URL}/login`}>Sign in</a><a href="#faq">FAQ</a><span>© 2026 Smart 3D QR</span></div></div>
      </footer>

      {guideOpen ? (
        <div className="guide-modal" role="dialog" aria-modal="true" aria-label="Smart 3D QR Closed Beta User Guide">
          <button className="guide-backdrop" type="button" aria-label="Close User Guide" onClick={closeGuide} />
          <div className="guide-dialog">
            <header className="guide-header">
              <div>
                <p className="eyebrow">Closed beta user guide</p>
                <h2>Smart 3D QR Cloud Platform</h2>
              </div>
              <div className="guide-header-actions">
                <a className="button secondary small" href={USER_GUIDE_PDF} download>Download guide <Download size={16} /></a>
                <button className="guide-close" type="button" aria-label="Close User Guide" onClick={closeGuide}><X size={22} /></button>
              </div>
            </header>
            <div className="guide-viewer">
              <button className="guide-arrow prev" type="button" aria-label="Previous guide page" onClick={goToPreviousGuidePage}><ChevronLeft size={28} /></button>
              <img src={userGuidePages[guidePage].src} alt={`Smart 3D QR onboarding guide page ${userGuidePages[guidePage].number} of ${userGuidePages.length}`} />
              <button className="guide-arrow next" type="button" aria-label="Next guide page" onClick={goToNextGuidePage}><ChevronRight size={28} /></button>
            </div>
            <footer className="guide-footer">
              <span>{userGuidePages[guidePage].number} / {userGuidePages.length}</span>
              <div className="guide-dots" aria-label="Guide pages">
                {userGuidePages.map((page, index) => (
                  <button
                    key={page.number}
                    className={index === guidePage ? "active" : ""}
                    type="button"
                    aria-label={`Open guide page ${page.number}`}
                    aria-current={index === guidePage ? "page" : undefined}
                    onClick={() => setGuidePage(index)}
                  />
                ))}
              </div>
            </footer>
          </div>
        </div>
      ) : null}
    </div>
  );
}
