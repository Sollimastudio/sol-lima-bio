export default function HomePage() {
  const links = [
    { href: '/publisher', label: 'Publisher' },
    { href: '/publisher/workspace', label: 'Workspace' },
    { href: '/publisher/mvp', label: 'MVP' },
    { href: '/artifact', label: 'Artefato Editorial' },
    { href: '/html-render', label: 'HTML/WebBook' },
    { href: '/export-manifest', label: 'Manifesto de Exportacao' },
    { href: '/docx-export', label: 'DOCX Editavel' }
  ];

  return (
    <main style={{ minHeight: '100vh', background: '#0A0A0A', color: '#F5F0E8', padding: 32 }}>
      <section style={{ maxWidth: 980, margin: '0 auto' }}>
        <p style={{ color: '#C9A84C', letterSpacing: 4, textTransform: 'uppercase' }}>Tronco IA</p>
        <h1 style={{ fontSize: 56, lineHeight: 1, margin: '16px 0' }}>Publisher IA</h1>
        <p style={{ fontSize: 18, lineHeight: 1.7, opacity: 0.75 }}>
          Central de testes do Publisher: memoria, artefato editorial, WebBook, manifesto e exportacao DOCX.
        </p>
        <div style={{ display: 'grid', gap: 12, marginTop: 32 }}>
          {links.map((link) => (
            <a key={link.href} href={link.href} style={{ border: '1px solid rgba(201,168,76,.35)', borderRadius: 18, padding: 18, textDecoration: 'none' }}>
              {link.label}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
