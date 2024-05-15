import { Link } from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-green-800 text-white py-4 px-16 text-2xl w-full flex flex-row justify-between">
      <span className="w-1/3">💰 Sorte Lançada - Painel 💰</span>
      <div className="flex flex-row justify-evenly w-2/3">
        {[
          { name: "Rifas", route: "rifas" },
          { name: "Pagamentos", route: "pagamentos" },
          { name: "Usuários", route: "usuarios" },
        ].map((item) => (
          <Link
            href={`/${item.route}`}
            className="cursor-pointer hover:text-green-500 transition-all hover:shadow-black "
          >
            {item.name}
          </Link>
        ))}
      </div>

      <span className="text-red-500 w-1/3 flex justify-end">Sair</span>

      {children}
    </div>
  );
}
