import NavBar from "@/Components/Leyouts/NavBar";
import Welcome from "@/Components/Welcome/Index";
import Factures from "@/Components/Factures";
export default function Home() {
  return (
    <main className="w-full min-h-screen pt-16"> {/* Ajuste a altura conforme necessário */}
        <NavBar className="fixed top-0 left-0 w-full bg-white shadow-md" />
        <section>
            <Welcome />
        </section>

        <section>
            <Factures />
        </section>
    </main>
  );
}