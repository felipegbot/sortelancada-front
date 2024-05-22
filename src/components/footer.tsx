export default function Footer() {
  return (
    <div className="bottom-0 bg-black flex-col w-full items-center space-y-4 py-4 flex text-center text-tiny break-keep">
      <div>
        <img src="/sortelancada-idea.svg" width={300} />
      </div>
      <div className="flex flex-row space-x-4">
        <img
          src="/whatsapp.svg"
          className="bg-white rounded-xl"
          height={35}
          width={35}
        />
        <img
          src="/facebook.svg"
          className="bg-white rounded-xl"
          height={35}
          width={35}
        />
        <img src="/instagram.svg" height={35} width={35} />

        <img
          className="bg-white rounded-xl"
          src="/telegram.svg"
          height={35}
          width={35}
        />
      </div>
      <div className="max-w-[90vw] space-y-2">
        Título de Capitalização da Modalidade Filantropia Premiável de
        Contribuição Única. É proibida a venda de título de capitalização a
        menores de dezesseis anos. Antes de contratar consulte previamente as
        Condições Gerais. As condições contratuais/regulamento deste produto.
        Confira o resultado dos sorteios e as condições de participação em nossa
        página. Imagens meramente ilustrativas.{" "}
        <span className="inline-block">
          © 2024 - Todos os direitos reservados
        </span>
        <div className="flex flex-row w-full space-x-1 justify-center">
          <div> Termos de uso</div>
          <span>|</span>
          <div> Política de Privacidade</div>
        </div>
        <div className="flex flex-row w-full space-x-1 justify-center">
          <div>Sistema desenvolvido por sortelancada.com e</div>
          <a
            className="underline text-blue-500"
            href="https://www.linkedin.com/in/felipe-gabriel-botelho/"
            target="_blank"
          >
            Felipe Botelho
          </a>
        </div>
      </div>
    </div>
  );
}
