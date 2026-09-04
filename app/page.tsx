import Image from "next/image";

export default function Home() {
  const whatsapp = "https://wa.me/5512996301562";

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f0f2] text-[#382c31]">
      {/* HERO */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top_left,_#fff8fa_0%,_#f8e9ee_42%,_#e7d0d7_100%)] px-6">
        {/* Brilhos decorativos */}
        <div
          aria-hidden="true"
          className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-white/70 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-[#c08b9b]/25 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/3 h-40 w-40 -translate-x-1/2 rounded-full bg-white/40 blur-3xl"
        />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          {/* MARCA */}
          <div className="mb-8">
            <p className="relative inline-block text-sm font-medium tracking-[0.45em] text-[#8a5365]">
              BETE NAILS BEAUTY

              <span
                aria-hidden="true"
                className="absolute -inset-x-5 -inset-y-3 -z-10 rounded-full bg-white/60 blur-xl"
              />
            </p>

            {/* linha decorativa */}
            <div className="mx-auto mt-4 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-[#b98a99]/60" />
              <span className="h-1.5 w-1.5 rotate-45 bg-[#b98a99]" />
              <span className="h-px w-12 bg-[#b98a99]/60" />
            </div>
          </div>

          {/* PROFISSÃO */}
          <p className="mb-6 text-xs uppercase tracking-[0.4em] text-[#9b7180] sm:text-sm">
            Nail Designer
          </p>

          {/* TÍTULO */}
          <h1 className="text-5xl font-light leading-[1.05] tracking-tight text-[#382c31] sm:text-6xl md:text-8xl">
            Beleza em
            <br />
            <span className="bg-gradient-to-r from-[#69404e] via-[#a96d80] to-[#69404e] bg-clip-text font-medium italic text-transparent">
              cada detalhe.
            </span>
          </h1>

          {/* DESCRIÇÃO */}
          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-[#705d64] sm:text-lg">
            Unhas feitas para valorizar o seu estilo, sua personalidade e o
            seu momento de beleza.
          </p>

          {/* BOTÕES */}
          <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#servicos"
              className="rounded-full border border-[#8b596a] bg-white/30 px-8 py-3.5 text-sm font-medium text-[#69404e] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-[#8b596a] hover:text-white hover:shadow-lg"
            >
              Conheça nossos trabalhos
            </a>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#3b2c32] px-9 py-3.5 text-sm font-medium text-white shadow-xl shadow-[#3b2c32]/20 transition duration-300 hover:-translate-y-1 hover:bg-[#67404e] hover:shadow-2xl"
            >
              Agendar horário
            </a>
          </div>

          {/* INDICADOR */}
          <div className="mt-16 flex flex-col items-center gap-3 text-[#9a7884]">
            <span className="text-[10px] uppercase tracking-[0.35em]">
              Descubra
            </span>

            <span className="h-10 w-px bg-gradient-to-b from-[#9a7884] to-transparent" />
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section className="relative bg-white px-6 py-24 sm:py-28">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-0 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f4dfe5] blur-3xl"
        />

        <div className="relative mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-[#a06f80]">
            Bete Nails
          </p>

          <h2 className="text-4xl font-light leading-tight tracking-tight text-[#382c31] sm:text-5xl">
            Unhas que combinam
            <br />
            <span className="bg-gradient-to-r from-[#704352] to-[#ad7183] bg-clip-text italic text-transparent">
              com você.
            </span>
          </h2>

          <div className="mx-auto my-7 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#c9a5af]" />
            <span className="h-1.5 w-1.5 rotate-45 bg-[#b98495]" />
            <span className="h-px w-10 bg-[#c9a5af]" />
          </div>

          <p className="mx-auto max-w-2xl leading-8 text-[#74636a]">
            Um espaço dedicado à beleza, ao cuidado e aos detalhes. Cada
            trabalho é feito pensando no seu estilo e na sua personalidade.
          </p>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section
        id="servicos"
        className="relative bg-[#f7f0f2] px-6 py-24 sm:py-28"
      >
        <div className="mx-auto max-w-6xl">
          {/* TÍTULO */}
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-[#a06f80]">
              Serviços
            </p>

            <h2 className="text-4xl font-light tracking-tight text-[#382c31] sm:text-5xl">
              Nossos trabalhos
            </h2>

            <div className="mx-auto mt-5 h-px w-16 bg-[#b98a99]" />
          </div>

          {/* CARDS */}
          <div className="grid gap-8 md:grid-cols-3">
            {/* MANICURE */}
            <article className="group overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-lg shadow-[#5c3b46]/5 transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/fotos/unha1.jpg"
                  alt="Manicure Bete Nails"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#2d2025]/30 via-transparent to-white/10"
                />

                <span className="absolute right-5 top-5 rounded-full bg-white/85 px-4 py-2 text-xs font-medium tracking-widest text-[#69404e] backdrop-blur-sm">
                  01
                </span>
              </div>

              <div className="p-7">
                <p className="text-xs uppercase tracking-[0.25em] text-[#b18a96]">
                  Beleza & cuidado
                </p>

                <h3 className="mt-2 text-2xl font-medium text-[#382c31]">
                  Manicure
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#75656b]">
                  Cuidado completo para unhas bonitas, delicadas e bem
                  cuidadas.
                </p>

                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block text-sm font-medium text-[#8b596a] transition hover:text-[#382c31]"
                >
                  Saiba mais ↗
                </a>
              </div>
            </article>

            {/* ALONGAMENTO */}
            <article className="group overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-lg shadow-[#5c3b46]/5 transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/fotos/unha2.jpg"
                  alt="Alongamento de unhas Bete Nails"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#2d2025]/30 via-transparent to-white/10"
                />

                <span className="absolute right-5 top-5 rounded-full bg-white/85 px-4 py-2 text-xs font-medium tracking-widest text-[#69404e] backdrop-blur-sm">
                  02
                </span>
              </div>

              <div className="p-7">
                <p className="text-xs uppercase tracking-[0.25em] text-[#b18a96]">
                  Elegância & naturalidade
                </p>

                <h3 className="mt-2 text-2xl font-medium text-[#382c31]">
                  Alongamento
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#75656b]">
                  Alongamento com acabamento elegante, delicado e natural.
                </p>

                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block text-sm font-medium text-[#8b596a] transition hover:text-[#382c31]"
                >
                  Saiba mais ↗
                </a>
              </div>
            </article>

            {/* NAIL ART */}
            <article className="group overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-lg shadow-[#5c3b46]/5 transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/fotos/unha3.jpg"
                  alt="Nail Art Bete Nails"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#2d2025]/30 via-transparent to-white/10"
                />

                <span className="absolute right-5 top-5 rounded-full bg-white/85 px-4 py-2 text-xs font-medium tracking-widest text-[#69404e] backdrop-blur-sm">
                  03
                </span>
              </div>

              <div className="p-7">
                <p className="text-xs uppercase tracking-[0.25em] text-[#b18a96]">
                  Criatividade & estilo
                </p>

                <h3 className="mt-2 text-2xl font-medium text-[#382c31]">
                  Nail Art
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#75656b]">
                  Detalhes personalizados para deixar suas unhas únicas.
                </p>

                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block text-sm font-medium text-[#8b596a] transition hover:text-[#382c31]"
                >
                  Saiba mais ↗
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* AGENDAMENTO */}
      <section className="relative overflow-hidden bg-[#3b2c32] px-6 py-28 text-center text-white">
        <div
          aria-hidden="true"
          className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-[#c895a5]/20 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[#c895a5]/20 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f1d5dd]/5 blur-3xl"
        />

        <div className="relative z-10 mx-auto max-w-3xl">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-[#d9b8c1]">
            Agendamento
          </p>

          <h2 className="text-4xl font-light leading-tight sm:text-5xl">
            Seu próximo momento de
            <br />
            <span className="bg-gradient-to-r from-[#f0d5dc] via-white to-[#d6aab7] bg-clip-text italic text-transparent">
              beleza.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-lg leading-7 text-[#dbcdd1]">
            Agende seu horário e venha cuidar das suas unhas com todo carinho
            e atenção.
          </p>

          <div className="mx-auto my-9 max-w-sm border-y border-white/10 py-7">
            <p className="text-xs uppercase tracking-[0.3em] text-[#d9b8c1]">
              Horário de atendimento
            </p>

            <p className="mt-4 text-xl font-light">
              Terça-feira a sexta-feira
            </p>

            <p className="mt-1 text-xl font-light">Das 10h às 17h</p>
          </div>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-white px-9 py-4 text-sm font-medium text-[#3b2c32] shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-[#f8e9ee] hover:shadow-2xl"
          >
            Agendar pelo WhatsApp ↗
          </a>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-[#2b2025] px-6 py-10 text-center text-white">
        <p className="text-sm font-medium tracking-[0.35em]">BETE NAILS</p>

        <p className="mt-3 text-xs tracking-[0.2em] text-[#cbbdc1]">
          Nail Designer
        </p>

        <div className="mx-auto my-5 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-[#8f6875]" />
          <span className="h-1.5 w-1.5 rotate-45 bg-[#b98a99]" />
          <span className="h-px w-8 bg-[#8f6875]" />
        </div>

        <p className="text-xs text-[#a99ba0]">
          Terça a sexta • 10h às 17h
        </p>

        <p className="mt-4 text-[10px] tracking-[0.15em] text-[#796970]">
          © {new Date().getFullYear()} Bete Nails Beauty
        </p>
      </footer>
    </main>
  );
}


