import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';

const Quarto_slid = () => {
  return (
    <><Lay>
          <div>
          <h1>Lógica de Programação</h1>
              <h2>Objetivo</h2>
              <p>Neste curso abordaremos Tipos de Dados, Variáveis, Expressões Aritméticas, Expressões Literais, Expressões Lógicas, Estruturas de Condição, Estruturas de Repetição e Variáveis Indexadas.</p>
              <h2>Estrutura do Curso:</h2>
              <p>Este curso tem carga horária de 14 horas online. O ambiente de aprendizagem ficará disponível durante 30 dias, a partir do dia da sua inscrição. Neste tempo, recomendam-se em média 50 minutos de estudo por dia, sendo que o aluno que decide seu ritmo de estudo.</p>
              <h2>Conteúdo Programático:</h2>
              <p>Representações
Visual G
Tipos de Dados
Variáveis
Expressões Aritméticas
Expressões Literais
Expressões Lógicas
Estruturas de Condições
Estruturas de Repetição
Variáveis Indexadas
Modalidade: Iniciação Profissional
Idade Mínima: 14 anos
Área de atuação: Informática</p>
                <h2>Certificação:</h2>
                <p>O aluno receberá o certificado após obter 60% de aproveitamento ao final do curso. Após a aprovação no curso o próprio aluno emite o certificado pela plataforma online. </p>
     
          </div>
      </Lay><Carousel>
              <Carousel.Item>
                  <ExampleCarouselImage variant="top" src="https://s5.static.brasilescola.uol.com.br/vestibular/2020/11/analise-desenvolvimento-sistema.jpg" />
                  <Carousel.Caption>
                      <h3>Desenvolvimento de sistema</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
              </Carousel.Item>
          </Carousel></>
  )
}

export default Quarto_slid