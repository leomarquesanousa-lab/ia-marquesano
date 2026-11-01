export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-6 py-10 sm:px-10">
      <header className="flex items-center justify-between border-b border-white/10 pb-6">
        <span className="text-lg font-bold tracking-tight">IA Marquesano</span>
        <span className="rounded-full border border-violet-400/30 px-3 py-1 text-xs text-violet-200">Em desenvolvimento</span>
      </header>
      <section className="py-16 sm:py-24">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-violet-300">Estúdio de vídeos com IA</p>
        <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">Suas ideias em movimento.</h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">Crie vídeos a partir de descrições. Estamos preparando a primeira integração com Kling AI.</p>
      </section>
      <section aria-labelledby="studio-title" className="rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <h2 id="studio-title" className="text-xl font-semibold">Novo vídeo</h2>
          <span className="text-sm text-slate-400">Provedor inicial: Kling AI</span>
        </div>
        <label htmlFor="prompt" className="mb-3 block text-sm font-medium">Descreva sua ideia</label>
        <textarea id="prompt" rows={5} disabled placeholder="Ex.: Uma paisagem de montanhas ao amanhecer, com movimento suave de câmera..." className="w-full resize-none rounded-xl border border-white/10 bg-slate-950 p-4 text-slate-300 placeholder:text-slate-500 disabled:cursor-not-allowed" />
        <p id="generation-status" className="mt-4 text-sm leading-6 text-slate-400">A geração de vídeos estará disponível após a configuração da integração.</p>
        <button type="button" disabled aria-describedby="generation-status" className="mt-6 rounded-lg bg-violet-600 px-5 py-3 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50">Gerar vídeo — em breve</button>
      </section>
      <footer className="mt-auto pt-10 text-sm text-slate-500">IA Marquesano · Plataforma em construção</footer>
    </main>
  );
}
