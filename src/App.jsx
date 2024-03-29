import iconSedans from "./assets/icon-sedans.svg"
import iconSuvs from "./assets/icon-suvs.svg"
import iconLuxury from "./assets/icon-luxury.svg"
export default function App () {
  return (
    <main className="min-h-svh bg-offwhitebg py-20 px-6">
      <section>
        <div className="bg-orange">
          <img src={iconSedans} alt="ícone dos carros sedan" />
          <h2 className="font-shoulders">Sedans</h2>
          <p className="font-lexend">Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na sua cidade ou na siua próxima viagem</p>
          <a className="font-lexend" href="https://www.webmotors.com.br/sedans">Ver mais</a>
        </div>

        <div className="bg-green">
          <img src={iconSuvs} alt="ícone dos carros SUV" />
          <h2 className="font-shoulders">SUVs</h2>
          <p className="font-lexend">Escolha um SUV pelo o seu interior espaçoso, poder e versatilidade. PErfeito para passar as férias em família ou para aventuras off-road</p>
          <a className="font-lexend" href="https://www.webmotors.com.br/suvs">Ver mais</a>
        </div>

        <div className="bg-dark-green">
          <img src={iconLuxury} alt="ícone dos carros de luxo" />
          <h2 className="font-shoulders">Luxuosos</h2>
          <p className="font-lexend">Passeie nos melhores carros sem os preços exorbitantes. Desfrute de um conforto aprimorado de um aluguel de luxo e cheque com estilo</p>
          <a className="font-lexend" href="https://www.webmotors.com.br/carros-de-luxo">Ver mais</a>
        </div>
      </section>
    </main>
  )
}