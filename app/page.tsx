import Image from "next/image";
import Link from "next/link";
import { SearchBar } from "@/components/SearchBar";
import { StatCard } from "@/components/StatCard";
import { CategoryCard } from "@/components/CategoryCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans">
      {/* Hero */}
      <section className="bg-white dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Portal de Segurança Digital
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
            Aprenda, pratique e proteja-se com conteúdo, ferramentas e cursos de segurança da informação.
          </p>
          <SearchBar placeholder="Buscar artigos, ferramentas, cursos..." />
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard title="Usuários" value="0" icon="users" color="blue" />
          <StatCard title="Artigos" value="0" icon="file-text" color="green" />
          <StatCard title="Ferramentas" value="0" icon="tool" color="orange" />
        </div>
      </section>

      {/* Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
            Categorias
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              "Senhas",
              "Phishing",
              "Malware",
              "Ransomware",
              "LGPD",
              "Backup",
              "VPN",
              "Windows",
            ].map((cat) => (
              <CategoryCard key={cat} name={cat} href={`/articles?category=${encodeURIComponent(cat)}`} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-200 dark:bg-gray-800 py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} SEST SENAT – Portal de Segurança Digital
        </div>
      </footer>
    </div>
  );
}
