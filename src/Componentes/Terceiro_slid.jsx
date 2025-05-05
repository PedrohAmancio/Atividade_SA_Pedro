import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';

const Terceira_slid = () => {
  return (
    <><Lay>
          <div>
          <h1>Técnico em Eletromecânica</h1>
              <h2>Objetivo</h2>
              <p>Capacitar profissionais para realizar manutenção, montagem e projetos de máquinas e equipamentos, de acordo com normas técnicas e de segurança.</p>
              <h2>Estrutura do Curso:</h2>
              <p>Este curso tem carga horária de 14 horas online. O ambiente de aprendizagem ficará disponível durante 30 dias, a partir do dia da sua inscrição. Neste tempo, recomendam-se em média 50 minutos de estudo por dia, sendo que o aluno que decide seu ritmo de estudo.</p>
              <h2>Conteúdo Programático:</h2>
              <p>FUNDAMENTOS ELÉTRICOS
                FUNDAMENTOS MECÂNICOS
                MONTAGEM DE SISTEMAS DE CONTROLE E ACIONAMENTOS ELETROMECÂNICOS
                MONTAGEM DE SISTEMAS ELÉTRICOS
                MONTAGEM DE SISTEMAS MECÂNICOS
                MANUTENÇÃO DE SISTEMAS DE CONTROLE E ACIONAMENTOS ELETRO MECÂNICOS
                MANUTENÇÃO DE SISTEMAS ELÉTRICOS
                MANUTENÇÃO DE SISTEMAS MECÂNICOS
                DESENVOLVIMENTO DE PROJETOS DE SISTEMAS ELETRO MECÂNICOS
                EMPREENDEDORISMO</p>
                <h2>Certificação:</h2>
                <p>O aluno receberá o certificado após obter 60% de aproveitamento ao final do curso. Após a aprovação no curso o próprio aluno emite o certificado pela plataforma online. </p>
     

          </div>
      </Lay><Carousel>
              <Carousel.Item>
                  <ExampleCarouselImage variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyUb1H9RUtWE_gwKCkRSuEijNxrt__bO2-Dg&s" />
                  <Carousel.Caption>
                      <h3>Eletrotecnica</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
              </Carousel.Item>
          </Carousel></>
  )
}

export default Terceira_slid