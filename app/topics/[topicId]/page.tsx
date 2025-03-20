"use client";

import { Timer } from "@/components/timer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  MessageCircle,
  Plus,
  Send,
  Smile
} from "lucide-react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { useState } from "react";

export default function TopicPage() {
  const { topicId } = useParams<{ topicId: string }>();

  const [typing, setTyping] = useState({
    lucas: false,
    vinicius: false,
    joao: false,
    milena: false,
    bruno: false,
    lincoln: false,
  });

  const [postOperations, setPostOperations] = useState({
    like: false,
    comment: false,
    share: false,
  });

  const topics = [
    {
      id: "frontend-basics",
      title: "O que é frontend?",
      description: "Diferença entre frontend e backend",
      duration: 5,
      content: (
        <>
          <h2 className="text-2xl font-bold mb-4">O que é Frontend?</h2>
          <p className="mb-4">
            Imagine um restaurante: o frontend é como a área de refeições, onde
            os clientes interagem diretamente - as mesas, cadeiras, decoração e
            cardápio. É tudo o que você vê e com o que interage quando visita um
            site ou aplicativo.
          </p>

          <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-lg mb-4">
            <p className="font-medium">Analogia simples:</p>
            <p>
              Se um site fosse uma casa, o frontend seria tudo o que você pode
              ver e tocar: as paredes, janelas, portas e móveis.
            </p>
          </div>

          <h3 className="text-xl font-semibold mb-2">
            As Três Camadas do Frontend
          </h3>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>HTML</strong>: É a estrutura básica - como os tijolos e
              vigas de uma casa. Define o que aparece na página.
            </li>
            <li>
              <strong>CSS</strong>: É o estilo visual - como a pintura,
              decoração e arranjo dos móveis. Faz tudo ficar bonito.
            </li>
            <li>
              <strong>JavaScript</strong>: É o comportamento - como a
              eletricidade, encanamento e sistemas que fazem a casa funcionar.
              Adiciona interatividade.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">
            Diferença entre Frontend e Backend
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Frontend: O que você vê</h4>
              <ul className="list-disc pl-6">
                <li>É como a área de atendimento de um restaurante</li>
                <li>Tudo o que você interage diretamente</li>
                <li>Foca na experiência e aparência</li>
                <li>Exemplos: botões, menus, imagens, textos</li>
                <li>Preocupa-se com "Como isso parece?"</li>
              </ul>
            </div>

            <div className="bg-secondary/10 dark:bg-secondary/20 p-4 rounded-lg">
              <h4 className="font-bold mb-2">
                Backend: O que acontece nos bastidores
              </h4>
              <ul className="list-disc pl-6">
                <li>É como a cozinha de um restaurante</li>
                <li>Processa dados e lógica de negócio</li>
                <li>Armazena informações (banco de dados)</li>
                <li>Exemplos: processamento de pagamentos, login</li>
                <li>Preocupa-se com "Como isso funciona?"</li>
              </ul>
            </div>
          </div>

          <div className="bg-muted dark:bg-muted/70 p-4 rounded-lg mb-4">
            <h4 className="font-medium mb-2">
              Por que isso importa para a empresa?
            </h4>
            <p>
              Um bom frontend é crucial para a primeira impressão da sua marca.
              Estudos mostram que os usuários formam uma opinião sobre um site
              em apenas 0,05 segundos! Um frontend bem construído significa
              clientes mais satisfeitos, mais vendas e melhor reputação da
              marca.
            </p>
          </div>

          <p>
            Hoje, ferramentas modernas como React e Next.js ajudam a criar
            experiências de usuário incríveis, combinando a velocidade do
            frontend com a potência do backend para oferecer sites e aplicativos
            que encantam os usuários.
          </p>
        </>
      ),
    },
    {
      id: "browser-interpretation",
      title: "Interpretação dos Navegadores",
      description: "Como os navegadores interpretam HTML, CSS e JavaScript",
      duration: 5,
      content: (
        <>
          <h2 className="text-2xl font-bold mb-4">
            Como os Navegadores Transformam Código em Páginas Web
          </h2>

          <p className="mb-4">
            Quando você digita um endereço web e pressiona Enter, começa uma
            jornada fascinante que transforma linhas de código em páginas
            interativas. Vamos entender esse processo de forma simples.
          </p>

          <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-lg mb-4">
            <p className="font-medium">Analogia simples:</p>
            <p>
              Imagine o navegador como um chef que recebe uma receita (o código
              HTML), ingredientes (imagens, vídeos) e instruções de apresentação
              (CSS). O chef segue a receita, prepara o prato e o serve para você
              desfrutar.
            </p>
          </div>

          <h3 className="text-xl font-semibold mb-2">
            A Jornada de uma Página Web
          </h3>

          <ol className="list-decimal pl-6 mb-6">
            <li className="mb-2">
              <strong>Pedido e Entrega</strong>: Você pede uma página (clica em
              um link) e o servidor entrega os arquivos necessários.
            </li>
            <li className="mb-2">
              <strong>Leitura da Estrutura</strong>: O navegador lê o HTML como
              se fosse o esqueleto da página.
            </li>
            <li className="mb-2">
              <strong>Adição de Estilo</strong>: O navegador aplica o CSS para
              deixar tudo bonito e organizado.
            </li>
            <li className="mb-2">
              <strong>Montagem da Página</strong>: O navegador combina estrutura
              e estilo para criar o visual.
            </li>
            <li className="mb-2">
              <strong>Cálculo de Posições</strong>: Decide onde cada elemento
              vai aparecer na tela.
            </li>
            <li className="mb-2">
              <strong>Pintura na Tela</strong>: Finalmente desenha tudo no seu
              monitor.
            </li>
            <li>
              <strong>Adição de Interatividade</strong>: O JavaScript entra em
              ação para fazer a página responder às suas ações.
            </li>
          </ol>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-muted dark:bg-muted/70 p-4 rounded-lg">
              <h4 className="font-bold mb-2">HTML: O Conteúdo</h4>
              <p>
                Como o texto de um livro. Define o que existe na página: textos,
                imagens, links, formulários.
              </p>
            </div>

            <div className="bg-muted dark:bg-muted/70 p-4 rounded-lg">
              <h4 className="font-bold mb-2">CSS: O Visual</h4>
              <p>
                Como a diagramação e ilustrações. Define cores, tamanhos,
                posições e animações.
              </p>
            </div>

            <div className="bg-muted dark:bg-muted/70 p-4 rounded-lg">
              <h4 className="font-bold mb-2">JavaScript: A Interação</h4>
              <p>
                Como as páginas pop-up e elementos móveis. Permite que você
                interaja com a página.
              </p>
            </div>
          </div>

          <div className="bg-muted dark:bg-muted/70 p-4 rounded-lg mb-4">
            <h4 className="font-medium mb-2">
              Por que isso importa para a empresa?
            </h4>
            <p>
              Entender esse processo ajuda a criar sites mais rápidos e
              eficientes. Um site lento pode custar milhões em vendas perdidas -
              a Amazon descobriu que cada 100ms de atraso custa 1% em vendas.
              Otimizar como o navegador processa seu site significa clientes
              mais satisfeitos e melhores resultados.
            </p>
          </div>

          <p>
            Quando entendemos como os navegadores funcionam, podemos criar
            experiências web que carregam rapidamente e funcionam perfeitamente
            em qualquer dispositivo - de computadores a smartphones.
          </p>
        </>
      ),
    },
    {
      id: "seo",
      title: "Indexação de Sites",
      description: "Como os sites são indexados para aparecer no Google",
      duration: 5,
      content: (
        <>
          <h2 className="text-2xl font-bold mb-4">
            Como Seu Site Aparece no Google
          </h2>

          <p className="mb-4">
            Você já se perguntou como o Google sabe que seu site existe? Vamos
            entender como seu site é descoberto, analisado e exibido nos
            resultados de busca.
          </p>

          <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-lg mb-4">
            <p className="font-medium">Analogia simples:</p>
            <p>
              Imagine o Google como uma biblioteca gigante. Para incluir seu
              livro (site), bibliotecários (robôs do Google) precisam
              encontrá-lo, ler seu conteúdo, catalogá-lo corretamente e decidir
              em qual prateleira colocá-lo para que as pessoas o encontrem
              facilmente.
            </p>
          </div>

          <h3 className="text-xl font-semibold mb-2">
            Como o Google Encontra e Exibe Seu Site
          </h3>

          <ol className="list-decimal pl-6 mb-6">
            <li className="mb-2">
              <strong>Descoberta</strong>: Robôs do Google (chamados
              "Googlebot") exploram a internet seguindo links, como exploradores
              mapeando um território desconhecido.
            </li>
            <li className="mb-2">
              <strong>Leitura e Catalogação</strong>: O Google lê o conteúdo do
              seu site e o armazena em seu índice - como fotografar cada página
              de um livro.
            </li>
            <li className="mb-2">
              <strong>Classificação</strong>: Quando alguém faz uma busca, o
              Google decide quais sites mostrar e em que ordem, baseado em
              centenas de fatores.
            </li>
          </ol>

          <h3 className="text-xl font-semibold mb-2">
            Fatores que Ajudam Seu Site a Aparecer Melhor
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-muted dark:bg-muted/70 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Fatores Técnicos</h4>
              <ul className="list-disc pl-6">
                <li>
                  <strong>Velocidade</strong>: Sites rápidos são preferidos
                </li>
                <li>
                  <strong>Adaptação para celular</strong>: Deve funcionar bem em
                  smartphones
                </li>
                <li>
                  <strong>Segurança</strong>: Sites com HTTPS (cadeado verde)
                  têm vantagem
                </li>
                <li>
                  <strong>Estrutura clara</strong>: URLs organizadas e fáceis de
                  entender
                </li>
              </ul>
            </div>

            <div className="bg-muted dark:bg-muted/70 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Fatores de Conteúdo</h4>
              <ul className="list-disc pl-6">
                <li>
                  <strong>Títulos claros</strong>: Que explicam bem do que se
                  trata a página
                </li>
                <li>
                  <strong>Conteúdo valioso</strong>: Que responde às perguntas
                  dos usuários
                </li>
                <li>
                  <strong>Organização lógica</strong>: Com subtítulos e
                  estrutura clara
                </li>
                <li>
                  <strong>Imagens otimizadas</strong>: Com descrições para
                  acessibilidade
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-muted dark:bg-muted/70 p-4 rounded-lg mb-4">
            <h4 className="font-medium mb-2">
              Por que isso importa para a empresa?
            </h4>
            <p>
              93% das experiências online começam com uma busca. Aparecer bem no
              Google significa mais visitantes, mais clientes e mais vendas. Um
              bom SEO pode ser a diferença entre o sucesso e o fracasso de um
              negócio online. Além disso, é uma forma de marketing com excelente
              retorno sobre investimento.
            </p>
          </div>

          <p>
            Felizmente, tecnologias modernas como o Next.js ajudam seu site a
            ser mais amigável para o Google, garantindo que seu conteúdo seja
            facilmente encontrado e bem posicionado nos resultados de busca.
          </p>
        </>
      ),
    },
    {
      id: "security",
      title: "Segurança do Frontend",
      description:
        "Principais aspectos de segurança no desenvolvimento frontend",
      duration: 5,
      content: (
        <>
          <h2 className="text-2xl font-bold mb-4">
            Segurança no Frontend: Protegendo a Porta da Frente
          </h2>

          <p className="mb-4">
            Quando pensamos em segurança digital, geralmente imaginamos hackers
            tentando invadir servidores. Mas a verdade é que muitos ataques
            começam pelo frontend - a parte do site com a qual os usuários
            interagem diretamente.
          </p>

          <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-lg mb-4">
            <p className="font-medium">Analogia simples:</p>
            <p>
              Se seu site fosse uma casa, o frontend seria a porta da frente, as
              janelas e a fechadura. Não importa quão forte seja o cofre dentro
              da casa (backend) se alguém pode facilmente entrar pela janela da
              frente.
            </p>
          </div>

          <h3 className="text-xl font-semibold mb-2">
            Principais Ameaças ao Frontend
          </h3>

          <div className="space-y-4 mb-6">
            <div className="bg-destructive/10 dark:bg-destructive/20 p-4 rounded-lg">
              <h4 className="font-bold mb-1">
                Injeção de Código Malicioso (XSS)
              </h4>
              <p>
                Como se alguém colocasse um espião dentro da sua casa sem você
                perceber.
              </p>
              <p className="text-sm mt-2">
                <strong>Exemplo:</strong> Um atacante insere código em um
                comentário que, quando visualizado por outros usuários, rouba
                suas informações.
              </p>
            </div>

            <div className="bg-destructive/10 dark:bg-destructive/20 p-4 rounded-lg">
              <h4 className="font-bold mb-1">
                Falsificação de Solicitações (CSRF)
              </h4>
              <p>
                Como se alguém falsificasse sua assinatura para fazer transações
                em seu nome.
              </p>
              <p className="text-sm mt-2">
                <strong>Exemplo:</strong> Você clica em um link malicioso que
                faz seu banco transferir dinheiro sem você saber.
              </p>
            </div>

            <div className="bg-destructive/10 dark:bg-destructive/20 p-4 rounded-lg">
              <h4 className="font-bold mb-1">Clickjacking</h4>
              <p>
                Como um golpista que coloca um documento falso sobre o real para
                você assinar.
              </p>
              <p className="text-sm mt-2">
                <strong>Exemplo:</strong> Você acha que está clicando em "Ver
                vídeo", mas na verdade está autorizando uma compra.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-2">
            Como Protegemos Nossos Usuários
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-muted dark:bg-muted/70 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Práticas Básicas</h4>
              <ul className="list-disc pl-6">
                <li>Usar HTTPS (o cadeado verde no navegador)</li>
                <li>Validar todas as informações inseridas pelos usuários</li>
                <li>Implementar proteções contra ataques comuns</li>
                <li>Manter bibliotecas e frameworks atualizados</li>
              </ul>
            </div>

            <div className="bg-muted dark:bg-muted/70 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Tecnologias Modernas</h4>
              <ul className="list-disc pl-6">
                <li>
                  Frameworks como React que protegem automaticamente contra
                  alguns ataques
                </li>
                <li>
                  Políticas de segurança que controlam o que pode ser executado
                  no site
                </li>
                <li>Autenticação segura com múltiplos fatores</li>
                <li>Criptografia de dados sensíveis</li>
              </ul>
            </div>
          </div>

          <div className="bg-muted dark:bg-muted/70 p-4 rounded-lg mb-4">
            <h4 className="font-medium mb-2">
              Por que isso importa para a empresa?
            </h4>
            <p>
              Um único vazamento de dados pode custar milhões em danos à
              reputação, multas regulatórias e perda de confiança do cliente. Em
              média, um ataque cibernético custa $3,86 milhões para uma empresa.
              Investir em segurança frontend não é apenas uma questão técnica -
              é uma proteção essencial para o negócio.
            </p>
          </div>

          <p>
            A boa notícia é que, com as ferramentas certas e práticas adequadas,
            podemos criar experiências web que são não apenas atraentes e
            funcionais, mas também seguras para nossos usuários.
          </p>
        </>
      ),
    },
    {
      id: "dev-tools",
      title: "Ferramentas de Desenvolvimento",
      description: "Ferramentas essenciais para desenvolvimento frontend",
      duration: 5,
      content: (
        <>
          <h2 className="text-2xl font-bold mb-4">
            As Ferramentas que Usamos para Criar Sites Incríveis
          </h2>

          <p className="mb-4">
            Assim como um carpinteiro precisa de martelos e serras, os
            desenvolvedores frontend precisam de ferramentas específicas para
            construir sites e aplicativos modernos. Vamos conhecer as principais
            ferramentas que usamos no dia a dia.
          </p>

          <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-lg mb-4">
            <p className="font-medium">Analogia simples:</p>
            <p>
              Se construir um site fosse como construir uma casa, estas seriam
              nossas ferramentas: plantas arquitetônicas, equipamentos de
              medição, ferramentas de carpintaria e sistemas de inspeção de
              qualidade.
            </p>
          </div>

          <h3 className="text-xl font-semibold mb-2">
            Ferramentas que Usamos Diariamente
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Ferramentas de Inspeção</h4>
              <p className="mb-2">
                Como um raio-X para websites, permitem ver o que está
                acontecendo por baixo da superfície.
              </p>
              <ul className="list-disc pl-6">
                <li>Ver como a página está estruturada</li>
                <li>Identificar problemas de desempenho</li>
                <li>Testar como o site aparece em diferentes dispositivos</li>
                <li>Depurar quando algo não funciona corretamente</li>
              </ul>
            </div>

            <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Editores de Código</h4>
              <p className="mb-2">
                Como processadores de texto super avançados, especialmente
                projetados para escrever código.
              </p>
              <ul className="list-disc pl-6">
                <li>Destacam o código com cores para facilitar a leitura</li>
                <li>Sugerem correções e melhorias automaticamente</li>
                <li>Integram-se com outras ferramentas</li>
                <li>Aumentam drasticamente a produtividade</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-2">
            Ferramentas que Melhoram a Qualidade
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-secondary/10 dark:bg-secondary/20 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Ferramentas de Teste</h4>
              <p>
                Como inspetores de qualidade, garantem que tudo funcione como
                esperado.
              </p>
              <ul className="list-disc pl-6">
                <li>Verificam se os botões fazem o que deveriam</li>
                <li>Testam se o site funciona em diferentes navegadores</li>
                <li>Simulam usuários reais interagindo com o site</li>
                <li>
                  Identificam problemas antes que os usuários os encontrem
                </li>
              </ul>
            </div>

            <div className="bg-secondary/10 dark:bg-secondary/20 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Ferramentas de Otimização</h4>
              <p>
                Como afinadores de motor, fazem o site rodar mais rápido e
                melhor.
              </p>
              <ul className="list-disc pl-6">
                <li>Comprimem imagens sem perder qualidade</li>
                <li>Reduzem o tamanho dos arquivos</li>
                <li>Verificam a acessibilidade para todos os usuários</li>
                <li>Medem o desempenho e sugerem melhorias</li>
              </ul>
            </div>
          </div>

          <div className="bg-muted dark:bg-muted/70 p-4 rounded-lg mb-4">
            <h4 className="font-medium mb-2">
              Por que isso importa para a empresa?
            </h4>
            <p>
              As ferramentas certas significam desenvolvimento mais rápido,
              menos bugs e melhor experiência para os usuários. Isso se traduz
              diretamente em economia de custos, maior satisfação do cliente e
              vantagem competitiva. Um estudo da Stripe estimou que
              desenvolvedores perdem 42% do tempo lidando com ferramentas e
              código ruins - ter as ferramentas certas é um investimento que se
              paga rapidamente.
            </p>
          </div>

          <p>
            Com o conjunto certo de ferramentas, podemos criar experiências
            digitais que não apenas atendem, mas superam as expectativas dos
            usuários, mantendo-nos à frente da concorrência.
          </p>
        </>
      ),
    },
    {
      id: "nextjs-performance",
      title: "Performance e Cache do Next.js",
      description: "Otimizações de performance e sistema de cache do Next.js",
      duration: 5,
      content: (
        <>
          <h2 className="text-2xl font-bold mb-4">
            Como o Next.js Torna Nossos Sites Extremamente Rápidos
          </h2>

          <p className="mb-4">
            A velocidade é crucial para o sucesso online. O Next.js, nossa
            ferramenta principal de desenvolvimento, oferece técnicas avançadas
            para criar sites que carregam quase instantaneamente.
          </p>

          <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-lg mb-4">
            <p className="font-medium">Analogia simples:</p>
            <p>
              Se um site tradicional é como preparar uma refeição do zero quando
              o cliente chega ao restaurante, o Next.js é como ter pratos
              pré-preparados que podem ser servidos imediatamente ou finalizados
              rapidamente conforme necessário.
            </p>
          </div>

          <h3 className="text-xl font-semibold mb-2">
            Estratégias para Sites Ultra-Rápidos
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Páginas Pré-Prontas (SSG)</h4>
              <p>
                Como revistas impressas, prontas para serem lidas imediatamente.
              </p>
              <p className="text-sm mt-2">
                <strong>Benefício:</strong> Carregamento quase instantâneo,
                ideal para blogs, páginas de produtos e conteúdo que não muda
                frequentemente.
              </p>
            </div>

            <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-lg">
              <h4 className="font-bold mb-2">
                Páginas Preparadas na Hora (SSR)
              </h4>
              <p>
                Como um prato preparado no momento do pedido, sempre fresco.
              </p>
              <p className="text-sm mt-2">
                <strong>Benefício:</strong> Conteúdo sempre atualizado, ideal
                para dashboards, feeds sociais e conteúdo personalizado.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Atualização Inteligente (ISR)</h4>
              <p>
                Como ter um prato pré-preparado que é renovado periodicamente.
              </p>
              <p className="text-sm mt-2">
                <strong>Benefício:</strong> Combina velocidade com atualização,
                ideal para e-commerce e sites de notícias.
              </p>
            </div>

            <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Interatividade Instantânea</h4>
              <p>Como adicionar temperos e toques finais na mesa do cliente.</p>
              <p className="text-sm mt-2">
                <strong>Benefício:</strong> Páginas carregam rápido e depois
                ganham interatividade, oferecendo o melhor dos dois mundos.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-2">
            O Sistema de Memória do Next.js
          </h3>

          <p className="mb-4">
            O Next.js usa um sistema inteligente de "memória" (cache) que
            funciona como um garçom que memoriza os pedidos frequentes para
            servi-los mais rapidamente:
          </p>

          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Memoriza dados</strong>: Armazena informações para não
              precisar buscá-las repetidamente
            </li>
            <li>
              <strong>Guarda páginas inteiras</strong>: Mantém páginas prontas
              para serem servidas instantaneamente
            </li>
            <li>
              <strong>Atualiza inteligentemente</strong>: Sabe quando algo mudou
              e precisa ser renovado
            </li>
            <li>
              <strong>Carrega apenas o necessário</strong>: Envia para o usuário
              apenas o que ele precisa ver naquele momento
            </li>
          </ul>

          <div className="bg-muted dark:bg-muted/70 p-4 rounded-lg mb-4">
            <h4 className="font-medium mb-2">
              Por que isso importa para a empresa?
            </h4>
            <p>
              A velocidade afeta diretamente os resultados do negócio. Estudos
              mostram que 53% dos usuários abandonam sites que demoram mais de 3
              segundos para carregar. A cada segundo de melhoria na velocidade
              de carregamento, a Amazon registra um aumento de 1% nas vendas
              (aproximadamente $1,6 bilhão por ano). Sites rápidos também são
              favorecidos pelo Google, aparecendo melhor nas buscas.
            </p>
          </div>

          <p>
            Com o Next.js, conseguimos criar sites que não apenas impressionam
            visualmente, mas também oferecem uma experiência instantânea que
            mantém os usuários engajados e satisfeitos.
          </p>
        </>
      ),
    },
    {
      id: "nielsen-heuristics",
      title: "10 Heurísticas de Nielsen",
      description: "Princípios de usabilidade para design de interfaces",
      duration: 10,
      content: (
        <>
          <h2 className="text-2xl font-bold mb-4">
            10 Regras de Ouro para Criar Sites Fáceis de Usar
          </h2>

          <p className="mb-4">
            Você já se sentiu perdido ou frustrado ao usar um site? As
            Heurísticas de Nielsen são 10 princípios fundamentais que ajudam a
            criar interfaces intuitivas e agradáveis. Imagine usar o Instagram:
            tudo parece natural, fácil e intuitivo. Vamos ver esses princípios
            com exemplos práticos do Instagram!
          </p>

          <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-lg mb-4">
            <p className="font-medium">Analogia simples:</p>
            <p>
              Se um site fosse o Instagram, as heurísticas seriam como as boas
              práticas já familiares da plataforma: notificações claras, botões
              fáceis de entender, navegação intuitiva e liberdade para corrigir
              erros.
            </p>
          </div>

          <div className="space-y-6 mb-6">
            <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                1. Mantenha os usuários informados
              </h3>
              <ul className="list-disc pl-6">
                <li>Como a barra que indica o progresso ao postar stories</li>
                <li>
                  Como notificações claras sobre novas curtidas e comentários
                </li>
                <li>
                  Como indicadores mostrando que alguém está digitando no Direct
                </li>
              </ul>
            </div>

            <div className="flex flex-row gap-12 items-center">
              <div className="flex gap-4">
                <div className="flex gap-1">
                  <Heart
                    className={`h-8 w-8 text-zinc-500 hover:cursor-pointer ${
                      postOperations.like && "text-red-600 fill-red-600"
                    }`}
                    onClick={() => {
                      setPostOperations({
                        ...postOperations,
                        like: !postOperations.like,
                      });
                    }}
                  />
                  {postOperations.like ? "5" : "4"}
                </div>
                <div className="flex gap-1">
                  <MessageCircle className="h-8 w-8 text-zinc-500" /> 2
                </div>
                <div className="flex gap-1">
                  <Send className="h-8 w-8 text-zinc-500" /> 7
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div
                  className="flex flex-row gap-2 items-center hover:cursor-pointer"
                  onMouseEnter={() => setTyping({ ...typing, lucas: true })}
                  onMouseLeave={() => setTyping({ ...typing, lucas: false })}
                >
                  <div className="relative">
                    <img
                      src="https://media.licdn.com/dms/image/v2/D4D03AQH-Rf02lJH8oA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1682477255312?e=1747872000&v=beta&t=BLAMZlB1lFl7xtv5OhirOj0G6odPbi-aF_9O7UXKDfI"
                      alt="foto"
                      className="w-12 h-12 rounded-full hover:cursor-pointer"
                    />
                    <div className="absolute bottom-0 top-16 right-0 h-4 w-4 bg-green-400 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold">Lucas Santana</span>
                    {!typing.lucas && (
                      <span className="text-sm">Digitando...</span>
                    )}

                    {typing.lucas && (
                      <div className="flex gap-1 flex-row">
                        <span className="font-bold text-sm">To com sono</span>
                        <span className="text-zinc-500 text-sm">- agora</span>
                      </div>
                    )}
                  </div>
                </div>
                <div
                  className="flex flex-row gap-2 items-center hover:cursor-pointer"
                  onMouseEnter={() => setTyping({ ...typing, vinicius: true })}
                  onMouseLeave={() => setTyping({ ...typing, vinicius: false })}
                >
                  <div className="relative">
                    <img
                      src="/avatars/vinicius.jpeg"
                      alt="foto"
                      className="w-12 h-12 rounded-full hover:cursor-pointer"
                    />
                    <div className="absolute bottom-0 top-16 right-0 h-4 w-4 bg-green-400 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold">Vinicius Catarino</span>
                    {!typing.vinicius && (
                      <span className="text-sm">Digitando...</span>
                    )}

                    {typing.vinicius && (
                      <div className="flex gap-1 flex-row">
                        <span className="font-bold text-sm">Boa nego!</span>
                        <span className="text-zinc-500 text-sm">- agora</span>
                      </div>
                    )}
                  </div>
                </div>
                <div
                  className="flex flex-row gap-2 items-center hover:cursor-pointer"
                  onMouseEnter={() => setTyping({ ...typing, milena: true })}
                  onMouseLeave={() => setTyping({ ...typing, milena: false })}
                >
                  <div className="relative">
                    <img
                      src="/avatars/milena.jpeg"
                      alt="foto"
                      className="w-12 h-12 rounded-full hover:cursor-pointer"
                    />
                    <div className="absolute bottom-0 top-16 right-0 h-4 w-4 bg-green-400 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold">Milena Costa</span>
                    {!typing.milena && (
                      <span className="text-sm">Digitando...</span>
                    )}

                    {typing.milena && (
                      <div className="flex gap-1 flex-row">
                        <span className="font-bold text-sm">Tá pronto?</span>
                        <span className="text-zinc-500 text-sm">- agora</span>
                      </div>
                    )}
                  </div>
                </div>
                <div
                  className="flex flex-row gap-2 items-center hover:cursor-pointer"
                  onMouseEnter={() => setTyping({ ...typing, joao: true })}
                  onMouseLeave={() => setTyping({ ...typing, joao: false })}
                >
                  <div className="relative">
                    <img
                      src="/avatars/joao.jpeg"
                      alt="foto"
                      className="w-12 h-12 rounded-full hover:cursor-pointer"
                    />
                    <div className="absolute bottom-0 top-16 right-0 h-4 w-4 bg-green-400 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold">João Costa</span>
                    {!typing.joao && (
                      <span className="text-sm">Digitando...</span>
                    )}

                    {typing.joao && (
                      <div className="flex gap-1 flex-row">
                        <span className="font-bold text-sm">Vlw papito</span>
                        <span className="text-zinc-500 text-sm">- agora</span>
                      </div>
                    )}
                  </div>
                </div>
                <div
                  className="flex flex-row gap-2 items-center hover:cursor-pointer"
                  onMouseEnter={() => setTyping({ ...typing, bruno: true })}
                  onMouseLeave={() => setTyping({ ...typing, bruno: false })}
                >
                  <div className="relative">
                    <img
                      src="/avatars/bruno.jpeg"
                      alt="foto"
                      className="w-12 h-12 rounded-full hover:cursor-pointer"
                    />
                    <div className="absolute bottom-0 top-16 right-0 h-4 w-4 bg-green-400 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold">Bruno Santos</span>
                    {!typing.bruno && (
                      <span className="text-sm">Digitando...</span>
                    )}

                    {typing.bruno && (
                      <div className="flex gap-1 flex-row">
                        <span className="font-bold text-sm">Ta ai Edzao?</span>
                        <span className="text-zinc-500 text-sm">- agora</span>
                      </div>
                    )}
                  </div>
                </div>
                <div
                  className="flex flex-row gap-2 items-center hover:cursor-pointer"
                  onMouseEnter={() => setTyping({ ...typing, lincoln: true })}
                  onMouseLeave={() => setTyping({ ...typing, lincoln: false })}
                >
                  <div className="relative">
                    <img
                      src="/avatars/lincoln.jpeg"
                      alt="foto"
                      className="w-12 h-12 rounded-full hover:cursor-pointer"
                    />
                    <div className="absolute bottom-0 top-16 right-0 h-4 w-4 bg-green-400 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold">Lincoln Almeida</span>
                    {!typing.lincoln && (
                      <span className="text-sm">Digitando...</span>
                    )}

                    {typing.lincoln && (
                      <div className="flex gap-1 flex-row">
                        <span className="font-bold text-sm">Opre</span>
                        <span className="text-zinc-500 text-sm">- agora</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                2. Fale a língua do usuário
              </h3>
              <ul className="list-disc pl-6">
                <li>
                  Como "Enviar mensagem" em vez de algo técnico como "Submeter
                  formulário"
                </li>
                <li>
                  Ícones claros e universais como o coração (curtir) ou
                  aviãozinho (Direct)
                </li>
                <li>Termos simples como "Stories" e não "Conteúdo efêmero"</li>
              </ul>
            </div>

            <div className="flex flex-row gap-4">
              <div className="flex flex-col space-y-2 items-center">
                <div className="relative">
                  <img
                    src="/avatars/ed.jpeg"
                    alt="foto"
                    className="w-24 h-24 rounded-full hover:cursor-pointer m-0"
                  />
                  <div className="flex flex-col items-center justify-center absolute bottom-0 top-16 right-0 h-8 w-8 bg-sky-500 rounded-full border-2">
                    <Plus color="white" size={20} />
                  </div>
                </div>
                <span className="text-zinc-500 text-sm">Seu story</span>
              </div>
              <div className="flex flex-col space-y-2 items-center">
                <div className="relative">
                  <img
                    src="/avatars/ed.jpeg"
                    alt="foto"
                    className="w-24 h-24 rounded-full hover:cursor-pointer m-0"
                  />
                  <div className="flex flex-col items-center justify-center absolute bottom-0 top-16 right-0 h-8 w-8 bg-sky-500 rounded-full border-2">
                    <Plus color="white" size={20} />
                  </div>
                </div>
                <span className="text-zinc-500 text-sm">Conteúdo efêmero</span>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex gap-2 w-full items-center">
                  <Button
                    size="icon"
                    variant="outline"
                    aria-label="Abrir emojis"
                    className="w-20"
                  >
                    {" "}
                  </Button>
                  <Input placeholder="" />
                  <Button
                    size="icon"
                    variant="outline"
                    aria-label="Abrir emojis"
                    className="w-20"
                  >
                    {" "}
                  </Button>
                  <Button
                    size="icon"
                    aria-label="Enviar mensagem"
                    variant={"outline"}
                    className="w-20"
                  >
                    {" "}
                  </Button>
                </div>
                <div className="flex gap-2 w-full">
                  <Button
                    size="icon"
                    variant="outline"
                    aria-label="Abrir emojis"
                    className="w-20"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                  <Input placeholder="Digite sua mensagem" />
                  <Button
                    size="icon"
                    variant="outline"
                    aria-label="Abrir emojis"
                    className="w-20"
                  >
                    <Smile className="h-4 w-4" />
                  </Button>
                  <Button
                    size="icon"
                    aria-label="Enviar mensagem"
                    variant={"outline"}
                    className="w-20"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                3. Dê controle e liberdade
              </h3>
              <ul className="list-disc pl-6">
                <li>Como poder excluir uma postagem que não gostou</li>
                <li>Como desfazer o envio de uma mensagem no Direct</li>
                <li>Como sair facilmente de um story ou live</li>
              </ul>
            </div>

            <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                4. Seja consistente
              </h3>
              <ul className="list-disc pl-6">
                <li>Como os ícones sempre no mesmo lugar</li>
                <li>
                  Como ações padrão (curtir, comentar, compartilhar) sempre
                  iguais
                </li>
                <li>
                  Cores e estilos visuais consistentes em toda a plataforma
                </li>
              </ul>
            </div>

            <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">5. Previna erros</h3>
              <ul className="list-disc pl-6">
                <li>Como sugestões automáticas ao digitar hashtags</li>
                <li>Como confirmação antes de apagar uma publicação</li>
                <li>Como indicar se uma mensagem foi visualizada ou enviada</li>
              </ul>
            </div>

            <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                6. Reconhecimento em vez de memorização
              </h3>
              <ul className="list-disc pl-6">
                <li>Como menus visíveis (stories sempre no topo)</li>
                <li>Como sugerir contatos frequentes no Direct</li>
                <li>Ícones claros sem necessidade de memorizar funções</li>
              </ul>
            </div>

            <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                7. Flexibilidade e eficiência
              </h3>
              <ul className="list-disc pl-6">
                <li>Como atalhos rápidos nos stories (deslizar para reagir)</li>
                <li>Como salvar posts para ver depois</li>
                <li>
                  Personalizar notificações por perfil ou conteúdo específico
                </li>
              </ul>
            </div>

            <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                8. Design minimalista
              </h3>
              <ul className="list-disc pl-6">
                <li>Interface limpa e sem distrações ao visualizar fotos</li>
                <li>Textos curtos e diretos nas legendas e notificações</li>
                <li>Hierarquia visual clara entre feed, stories e directs</li>
              </ul>
            </div>

            <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                9. Ajude a reconhecer e corrigir erros
              </h3>
              <ul className="list-disc pl-6">
                <li>
                  Como mensagens claras se a internet cai ("Tentar novamente")
                </li>
                <li>Como alertar se você tentar postar sem legenda</li>
                <li>
                  Como avisos visuais para campos obrigatórios ao editar perfil
                </li>
              </ul>
            </div>

            <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                10. Ofereça ajuda e documentação
              </h3>
              <ul className="list-disc pl-6">
                <li>
                  Como guias de ajuda facilmente acessíveis nas configurações
                </li>
                <li>Dicas contextuais sobre novos recursos (ex: Reels)</li>
                <li>Seção completa de FAQ com dúvidas frequentes</li>
              </ul>
            </div>
          </div>

          <p>
            Aplicar essas regras como o Instagram faz resulta em usuários mais
            felizes, engajados e fiéis à plataforma, criando uma experiência que
            é fácil, intuitiva e divertida.
          </p>
        </>
      ),
    },
  ];

  const topic = topics.find((t) => t.id === topicId);

  if (!topic) {
    return notFound();
  }

  const currentIndex = topics.findIndex((t) => t.id === topicId);
  const prevTopic = currentIndex > 0 ? topics[currentIndex - 1] : null;
  const nextTopic =
    currentIndex < topics.length - 1 ? topics[currentIndex + 1] : null;

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-3">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">{topic.title}</h1>
            <p className="text-muted-foreground">{topic.description}</p>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            {topic.content}
          </div>

          <div className="flex justify-between mt-12">
            {prevTopic ? (
              <Link href={`/topics/${prevTopic.id}`}>
                <Button variant="outline" className="flex items-center">
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  {prevTopic.title}
                </Button>
              </Link>
            ) : (
              <div></div>
            )}

            {nextTopic && (
              <Link href={`/topics/${nextTopic.id}`}>
                <Button variant="outline" className="flex items-center">
                  {nextTopic.title}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            )}
          </div>
        </div>

        <div className="md:col-span-1">
          <div className="sticky top-20 space-y-6">
            <Timer duration={topic.duration} />

            <div className="bg-card rounded-lg border p-4">
              <h3 className="font-medium mb-2">Todos os Tópicos</h3>
              <ul className="space-y-1">
                {topics.map((t) => (
                  <li key={t.id}>
                    <Link
                      href={`/topics/${t.id}`}
                      className={`block p-2 rounded-md hover:bg-accent ${
                        t.id === topicId ? "bg-accent font-medium" : ""
                      }`}
                    >
                      {t.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
