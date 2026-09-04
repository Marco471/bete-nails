import Image from "next/image";

export default function Home() {
  const whatsapp = "https://wa.me/5512996301562";

  return (
    <main className="min-h-screen bg-[#f8f1f3] text-[#3d3035]">
      {/* HERO */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-linear-to-br from-[#fffafa] via-[#f7e6eb] to-[#e5cbd3] px-6">
        <div
          aria-hidden="true"
          className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/50 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#c99eaa]/30 blur-3xl"
        />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="mb-5 text-sm tracking-[0.35em] text-[#8d6572]">
            BETE NAILS BEAUTY
          </p>

          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-[#9a7480]">
            Nail Designer
          </p>

          <h1 className="text-5xl font-light leading-tight md:text-7xl">
            Beleza em
            <br />
            <span className="font-medium italic">cada detalhe.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-[#6f5a61] md:text-lg">
            Unhas feitas para valorizar o seu estilo, sua personalidade e o
            seu momento de beleza.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#servicos"
              className="rounded-full border border-[#8d6572] px-8 py-3 text-sm transition hover:bg-[#8d6572] hover:text-white"
            >
              Conheça nossos trabalhos
            </a>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#3d3035] px-8 py-3 text-sm text-white shadow-lg transition hover:scale-105"
            >
              Agendar horário
            </a>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#a47785]">
            Bete Nails
          </p>

          <h2 className="text-4xl font-light md:text-5xl">
            Unhas que combinam
            <br />
            <span className="italic">com você.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl leading-8 text-[#74636a]">
            Um espaço dedicado à beleza, ao cuidado e aos detalhes. Cada
            trabalho é feito pensando no seu estilo e na sua personalidade.
          </p>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="bg-[#f8f1f3] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#a47785]">
              Serviços
            </p>

            <h2 className="text-4xl font-light md:text-5xl">
              Nossos trabalhos
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* SERVIÇO 1 */}
            <article className="overflow-hidden rounded-3xl bg-white shadow-md transition hover:-translate-y-2 hover:shadow-xl">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/fotos/unha1.jpg"
                  alt="Manicure Bete Nails"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <div className="p-7">
                <span className="text-sm text-[#b18a96]">01</span>

                <h3 className="mt-2 text-2xl font-medium">Manicure</h3>

                <p className="mt-4 text-sm leading-7 text-[#75656b]">
                  Cuidado completo para unhas bonitas, delicadas e bem
                  cuidadas.
                </p>

                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block text-sm font-medium text-[#8d6572] transition hover:text-[#3d3035]"
                >
                  Saiba mais ↗
                </a>
              </div>
            </article>

            {/* SERVIÇO 2 */}
            <article className="overflow-hidden rounded-3xl bg-white shadow-md transition hover:-translate-y-2 hover:shadow-xl">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/fotos/unha2.jpg"
                  alt="Alongamento de unhas Bete Nails"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <div className="p-7">
                <span className="text-sm text-[#b18a96]">02</span>

                <h3 className="mt-2 text-2xl font-medium">Alongamento</h3>

                <p className="mt-4 text-sm leading-7 text-[#75656b]">
                  Alongamento com acabamento elegante, delicado e natural.
                </p>

                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block text-sm font-medium text-[#8d6572] transition hover:text-[#3d3035]"
                >
                  Saiba mais ↗
                </a>
              </div>
            </article>

            {/* SERVIÇO 3 */}
            <article className="overflow-hidden rounded-3xl bg-white shadow-md transition hover:-translate-y-2 hover:shadow-xl">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/fotos/unha3.jpg"
                  alt="Nail Art Bete Nails"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <div className="p-7">
                <span className="text-sm text-[#b18a96]">03</span>

                <h3 className="mt-2 text-2xl font-medium">Nail Art</h3>

                <p className="mt-4 text-sm leading-7 text-[#75656b]">
                  Detalhes personalizados para deixar suas unhas únicas.
                </p>

                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block text-sm font-medium text-[#8d6572] transition hover:text-[#3d3035]"
                >
                  Saiba mais ↗
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* AGENDAMENTO */}
      <section className="relative overflow-hidden bg-[#3d3035] px-6 py-28 text-center text-white">
        <div
          aria-hidden="true"
          className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-[#c99eaa]/20 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-[#c99eaa]/20 blur-3xl"
        />

        <div className="relative z-10 mx-auto max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#d9b8c1]">
            Agendamento
          </p>

          <h2 className="text-4xl font-light md:text-5xl">
            Seu próximo momento de
            <br />
            <span className="italic">beleza.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-lg leading-7 text-[#dbcdd1]">
            Agende seu horário e venha cuidar das suas unhas com todo carinho
            e atenção.
          </p>

          <div className="my-8">
            <p className="text-sm uppercase tracking-[0.2em] text-[#d9b8c1]">
              Horário de atendimento
            </p>

            <p className="mt-3 text-xl">Terça-feira a sexta-feira</p>

            <p className="mt-1 text-xl">Das 10h às 17h</p>
          </div>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-white px-9 py-4 text-sm font-medium text-[#3d3035] transition hover:scale-105"
          >
            Agendar pelo WhatsApp ↗
          </a>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-[#2c2226] px-6 py-8 text-center text-white">
        <p className="tracking-[0.25em]">BETE NAILS</p>

        <p className="mt-2 text-xs text-[#cbbdc1]">
          Nail Designer
        </p>

        <p className="mt-4 text-xs text-[#a99ba0]">
          Terça a sexta • 10h às 17h
        </p>
      </footer>
    </main>
  );
}

