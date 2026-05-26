type VaultItem = {
  title: string;
  type: string;
  status: 'draft' | 'review' | 'approved' | 'final' | 'rejected';
};

const sampleVault: VaultItem[] = [
  { title: 'Titulo final', type: 'title', status: 'draft' },
  { title: 'Promessa central', type: 'promise', status: 'draft' },
  { title: 'Indice aprovado', type: 'outline', status: 'draft' }
];

export function ApprovedVaultPanel() {
  return (
    <aside className="rounded-3xl border border-[#C9A84C]/20 bg-[#120609] p-6">
      <p className="text-xs uppercase tracking-[0.35em] text-[#C9A84C]">Cofre Editorial</p>
      <h2 className="mt-3 text-xl font-semibold">Produto Final</h2>
      <p className="mt-3 text-sm leading-6 text-[#F5F0E8]/65">
        Tudo que for aprovado entra aqui. Rascunho nao vira produto final sem aprovacao.
      </p>

      <div className="mt-5 space-y-3">
        {sampleVault.map((item) => (
          <div key={item.title} className="rounded-2xl border border-[#C9A84C]/15 bg-black/25 p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-semibold text-[#F5F0E8]">{item.title}</p>
                <p className="mt-1 text-xs text-[#F5F0E8]/55">{item.type}</p>
              </div>
              <span className="rounded-full border border-[#C9A84C]/25 px-3 py-1 text-xs text-[#C9A84C]">{item.status}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-3">
        <button className="rounded-xl bg-[#C9A84C] px-4 py-3 text-sm font-semibold text-black">Enviar aprovado ao Cofre</button>
        <button className="rounded-xl border border-[#C9A84C]/30 px-4 py-3 text-sm text-[#F5F0E8]">Gerar pacote final</button>
      </div>
    </aside>
  );
}
