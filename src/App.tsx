import { useState } from "react";
import { ArrowDownRight, ArrowUpRight, Camera, Check, MapPin, Phone, Scissors, Star } from "lucide-react";
import { Logo } from "./components/Logo";
import { barbearia } from "./data/barbearia";

const imagens = [
  { src: "/images/black-belt-interior.jpg", alt: "Interior da Black Belt Barbearia com identidade inspirada em artes marciais" },
  { src: "/images/black-belt-ritual.jpg", alt: "Ambiente e estrutura da Black Belt Barbearia" },
  { src: "/images/black-belt-assinatura.jpg", alt: "Espaço da Black Belt Barbearia em Santos" },
];

export default function App() {
  const [servicoSelecionado, setServicoSelecionado] = useState(0);
  const servicoAtual = barbearia.servicos[servicoSelecionado];

  return (
    <div className="site-shell">
      <header className="cabecalho">
        <Logo />
        <nav aria-label="Navegação principal">
          <a href="#filosofia">Filosofia</a>
          <a href="#servicos">Serviços</a>
          <a href="#espaco">Espaço</a>
          <a href="#contato">Contato</a>
        </nav>
        <a className="botao botao--compacto" href={barbearia.agendamentoUrl} target="_blank" rel="noreferrer">
          Agendar <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero__conteudo">
            <p className="sobretitulo"><span /> Barbearia no Boqueirão · Santos</p>
            <h1>Seu estilo.<br /><em>Sua faixa.</em></h1>
            <p className="hero__texto">{barbearia.descricao}</p>
            <div className="hero__acoes">
              <a className="botao" href={barbearia.agendamentoUrl} target="_blank" rel="noreferrer">
                Escolher meu ritual <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a className="link-texto" href="#servicos">Conhecer serviços <ArrowDownRight size={17} aria-hidden="true" /></a>
            </div>
          </div>
          <figure className="hero__imagem">
            <img src={imagens[0].src} alt={imagens[0].alt} />
            <figcaption>
              <span className="nota"><Star size={16} fill="currentColor" aria-hidden="true" /> {barbearia.avaliacao}</span>
              <span>{barbearia.totalAvaliacoes} avaliações no Google</span>
            </figcaption>
          </figure>
          <aside className="hero__selo" aria-label="Conceito da marca">
            <span>BLACK BELT</span><strong>BB</strong><small>EST. SANTOS</small>
          </aside>
        </section>

        <section className="manifesto" id="filosofia">
          <p className="rotulo">A FILOSOFIA</p>
          <div>
            <h2>Excelência não é objetivo.<br />É <em>hábito.</em></h2>
            <p>Da disciplina dos tatames ao domínio da tesoura. Um espaço onde técnica, respeito e personalidade formam o ritual de quem não abre mão do próprio padrão.</p>
          </div>
          <Scissors className="manifesto__icone" strokeWidth={1} aria-hidden="true" />
        </section>

        <section className="servicos" id="servicos">
          <div className="secao-cabecalho">
            <div><p className="rotulo">ESCOLHA SEU RITUAL</p><h2>Cuidado com<br />mentalidade de mestre.</h2></div>
            <p>Serviços pensados para transformar cuidado pessoal em constância — sem pressa, sem atalhos.</p>
          </div>
          <div className="lista-servicos" role="radiogroup" aria-label="Escolha um serviço">
            {barbearia.servicos.map((servico, indice) => (
              <button
                className={`servico${servicoSelecionado === indice ? " servico--selecionado" : ""}`}
                type="button"
                role="radio"
                aria-checked={servicoSelecionado === indice}
                onClick={() => setServicoSelecionado(indice)}
                key={servico.nome}
              >
                <span>0{indice + 1}</span>
                <h3>{servico.nome}</h3>
                <p>{servico.descricao}</p>
                <span className="servico__indicador" aria-hidden="true">
                  {servicoSelecionado === indice ? <Check /> : <ArrowUpRight />}
                </span>
              </button>
            ))}
          </div>
          <div className="servicos__selecao" aria-live="polite">
            <div>
              <small>RITUAL SELECIONADO</small>
              <strong>{servicoAtual.nome}</strong>
              <span>Próximo passo: escolha profissional, dia e horário.</span>
            </div>
            <a className="botao" href={barbearia.agendamentoUrl} target="_blank" rel="noreferrer">
              Agendar {servicoAtual.nome.toLowerCase()} <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="espaco" id="espaco">
          <div className="espaco__texto">
            <p className="rotulo">NOSSO DOJO</p>
            <h2>Feito para quem leva estilo a sério.</h2>
            <p>Madeira, aço, couro e referências do jiu-jitsu criam um ambiente autêntico, acolhedor e sem pose.</p>
            <a className="link-texto" href={barbearia.mapsUrl} target="_blank" rel="noreferrer">Ver como chegar <ArrowUpRight size={17} aria-hidden="true" /></a>
          </div>
          <div className="galeria">
            <img src={imagens[1].src} alt={imagens[1].alt} loading="lazy" />
            <img src={imagens[2].src} alt={imagens[2].alt} loading="lazy" />
          </div>
        </section>

        <section className="prova-social" aria-labelledby="titulo-avaliacoes">
          <div className="avaliacao-geral"><span>{barbearia.avaliacao}</span><div><div className="estrelas" aria-label="4,9 de 5 estrelas">★★★★★</div><p>{barbearia.totalAvaliacoes} avaliações no Google</p></div></div>
          <h2 id="titulo-avaliacoes">Respeito se<br />conquista no detalhe.</h2>
          <div className="depoimentos">
            {barbearia.depoimentos.map((depoimento) => (
              <blockquote key={depoimento.autor}><p>“{depoimento.texto}”</p><cite>{depoimento.autor} · Google</cite></blockquote>
            ))}
          </div>
        </section>

        <section className="contato" id="contato">
          <div className="contato__chamada">
            <p className="rotulo">ENTRE NO TATAME</p>
            <h2>Pronto para<br />subir de faixa?</h2>
            <a className="botao botao--claro" href={barbearia.agendamentoUrl} target="_blank" rel="noreferrer">Agendar horário <ArrowUpRight size={18} aria-hidden="true" /></a>
          </div>
          <div className="contato__dados">
            <a href={barbearia.mapsUrl} target="_blank" rel="noreferrer"><MapPin aria-hidden="true" /><span><small>ENDEREÇO</small>{barbearia.endereco}</span></a>
            <a href={`tel:+${barbearia.telefoneLink}`}><Phone aria-hidden="true" /><span><small>TELEFONE</small>{barbearia.telefone}</span></a>
            <div className="horarios"><small>HORÁRIOS</small>{barbearia.horarios.map((item) => <p key={item.dias}><span>{item.dias}</span><strong>{item.horario}</strong></p>)}</div>
          </div>
        </section>
      </main>

      <footer>
        <Logo />
        <p>Arte, disciplina e estilo. Santos — SP.</p>
        <a href={barbearia.instagramUrl} target="_blank" rel="noreferrer"><Camera size={19} aria-hidden="true" /> Instagram</a>
      </footer>
    </div>
  );
}
