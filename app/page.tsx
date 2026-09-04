import Image from "next/image";

export default function Home() {
  const whatsapp = "https://wa.me/5512996301562";

  return (
    <main className="min-h-screen bg-[#f8f1f3] text-[#3d3035]">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-linear-to-br from-[#fffafa] via-[#f7e6eb] to-[#e5cbd3] px-6">
        {/* Efeitos decorativos */}
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/50 blur-3xl" />

        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#7a3e52]/10 blur-3xl" />

        {/* Conteúdo do Hero */}
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          {/* Marca */}
          <p className="animate-slide-in-right mb-5 text-sm tracking-[0.35em] text-[#7a3e52]">
            BETE NAILS BEAUTY
          </p>

          {/* Profissão */}
          <p
            className="animate-slide-in-right mb-6 text-sm uppercase tracking-[0.3em] text-[#8d6572]"
            style={{ animationDelay: "0.15s" }}
          >
            Nail Designer
          </p>

          {/* Título principal */}
          <h1
            className="animate-slide-in-right text-5xl font-light leading-tight md:text-7xl"
            style={{ animationDelay: "0.3s" }}
          >
            Beleza em
            <br />
            <span className="font-medium italic">cada detalhe.</span>
          </h1>

          {/* Descrição */}
          <p
            className="animate-slide-in-right mx-auto mt-7 max-w-xl text-base leading-7 text-[#6f5a61] md:text-lg"
            style={{ animationDelay: "0.45s" }}
          >
            Unhas feitas para valorizar o seu estilo, sua personalidade e o seu
            momento de beleza.
          </p>

          {/* Botões */}
          <div
            className="animate-slide-in-right mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            style={{ animationDelay: "0.6s" }}
          >
            {/* Conheça nossos trabalhos */}
            <a
              href="#servicos"
              className="flex h-12 min-w-56 items-center justify-center rounded-full border border-[#7a3e52] px-8 text-sm font-medium text-[#7a3e52] transition-all duration-300 hover:-translate-y-1 hover:bg-[#7a3e52] hover:text-white hover:shadow-lg"
            >
              Conheça nossos trabalhos
            </a>

            {/* Agendar horário */}
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 min-w-56 items-center justify-center rounded-full bg-[#7a3e52] px-8 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#633143] hover:shadow-xl"
            >
              Agendar horário
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          SOBRE
      ===================================================== */}

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#7a3e52]">
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

      {/* =====================================================
          SERVIÇOS
      ===================================================== */}

      <section id="servicos" className="bg-[#f8f1f3] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          {/* Título da seção */}
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#7a3e52]">
              Serviços
            </p>

            <h2 className="text-4xl font-light md:text-5xl">
              Nossos trabalhos
            </h2>
          </div>

          {/* Cards */}
          <div className="grid gap-8 md:grid-cols-3">
            {/* =================================================
                MANICURE
            ================================================= */}

            <article className="overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              {/* FOTO QUADRADA */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/fotos/unha1.jpg"
                  alt="Manicure Bete Nails"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="rounded-none object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <div className="p-7">
                <span className="text-sm text-[#7a3e52]">01</span>

                <h3 className="mt-2 text-2xl font-medium">Manicure</h3>

                <p className="mt-4 text-sm leading-7 text-[#75656b]">
                  Cuidado completo para unhas bonitas, delicadas e bem
                  cuidadas.
                </p>

                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block text-sm font-medium text-[#7a3e52] transition hover:translate-x-1"
                >
                  Saiba mais ↗
                </a>
              </div>
            </article>

            {/* =================================================
                ALONGAMENTO
            ================================================= */}

            <article className="overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              {/* FOTO QUADRADA */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/fotos/unha2.jpg"
                  alt="Alongamento de unhas Bete Nails"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="rounded-none object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <div className="p-7">
                <span className="text-sm text-[#7a3e52]">02</span>

                <h3 className="mt-2 text-2xl font-medium">Alongamento</h3>

                <p className="mt-4 text-sm leading-7 text-[#75656b]">
                  Alongamento com acabamento elegante, delicado e natural.
                </p>

                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block text-sm font-medium text-[#7a3e52] transition hover:translate-x-1"
                >
                  Saiba mais ↗
                </a>
              </div>
            </article>

            {/* =================================================
                NAIL ART
            ================================================= */}

            <article className="overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              {/* FOTO QUADRADA */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/fotos/unha3.jpg"
                  alt="Nail Art Bete Nails"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="rounded-none object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <div className="p-7">
                <span className="text-sm text-[#7a3e52]">03</span>

                <h3 className="mt-2 text-2xl font-medium">Nail Art</h3>

                <p className="mt-4 text-sm leading-7 text-[#75656b]">
                  Detalhes personalizados para deixar suas unhas únicas.
                </p>

                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block text-sm font-medium text-[#7a3e52] transition hover:translate-x-1"
                >
                  Saiba mais ↗
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* =====================================================
          AGENDAMENTO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#3d3035] px-6 py-28 text-center text-white">
        {/* Efeitos decorativos */}
        <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-[#7a3e52]/30 blur-3xl" />

        <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-[#7a3e52]/30 blur-3xl" />

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

          {/* Horário */}
          <div className="my-8">
            <p className="text-sm uppercase tracking-[0.2em] text-[#d9b8c1]">
              Horário de atendimento
            </p>

            <p className="mt-3 text-xl">Terça-feira a sexta-feira</p>

            <p className="mt-1 text-xl">Das 10h às 17h</p>
          </div>

          {/* Botão WhatsApp */}
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto flex h-12 w-fit min-w-56 items-center justify-center rounded-full bg-[#b47b91] px-8 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#9d6279] hover:shadow-xl"
          >
            Agendar pelo WhatsApp ↗
          </a>
        </div>
      </section>

      {/* =====================================================
          RODAPÉ
      ===================================================== */}

      <footer className="bg-[#2c2226] px-6 py-8 text-center text-white">
        <p className="tracking-[0.25em]">BETE NAILS</p>

        <p className="mt-2 text-xs text-[#cbbdc1]">Nail Designer</p>

        <p className="mt-4 text-xs text-[#a99ba0]">
          Terça a sexta • 10h às 17h
        </p>

        {/* Assinatura extremamente discreta */}
        <p className="mt-5 text-[9px] text-white/30">
          Desenvolvido por{" "}
          <a
            href="https://studio.neolock.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white/60"
          >
            Studio NeoLock
          </a>
        </p>
      </footer>
    </main>
  );
}
