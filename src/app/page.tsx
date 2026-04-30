import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col items-center gap-8 py-20 px-8 text-center">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50">
          🚀 CI/CD com GitHub Actions
        </h1>
        <p className="max-w-lg text-lg text-zinc-600 dark:text-zinc-400">
          Aplicação Next.js com pipeline completa de Integração Contínua e
          Entrega Contínua usando GitHub Actions e GitHub Pages.
        </p>
        <div className="flex gap-4">
          <Button label="Saiba mais" variant="primary" />
          <Button label="Ver código" variant="secondary" />
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { title: "✅ ESLint", desc: "Validação de código automatizada" },
            { title: "🧪 Vitest", desc: "Testes unitários com cobertura" },
            { title: "📦 Build", desc: "Compilação e exportação estática" },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700"
            >
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                {item.title}
              </h2>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

