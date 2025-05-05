import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';

const Segunda_slid = () => {
  return (
    <><Lay>
          <div>
              <h1>Noções Básicas de Mecânica Automotiva</h1>
              <h2>Objetivo</h2>
              <p>Proporcionar aos alunos o conhecimento necessário à aplicação e interpretação de conceitos físicos e mecânicos, relacionados à área de mecânica automotiva. O curso tem como objetivo explorar os principais temas relacionados à mecânica automotiva, desde os conceitos básicos até a conceituação de funcionamento e funções dos sistemas complexos, como sistemas mecânicos principais e secundários.</p>
              <h2>Estrutura do Curso:</h2>
              <p>Este curso tem carga horária de 14 horas online. O ambiente de aprendizagem ficará disponível durante 30 dias, a partir do dia da sua inscrição. Neste tempo, recomendam-se em média 50 minutos de estudo por dia, sendo que o aluno que decide seu ritmo de estudo.</p>
              <h2>Conteúdo Programático:</h2>
              <p>Sistema de Suspensão e Rodas
Sistema de Freios
Sistema de Direção
Sistema de Transmissão Mecânica
Motor Ciclo Otto
Sistema de Alimentação
Turbo Alimentador
Modalidade: Iniciação Profissional
Idade Mínima: 14 anos
Área de atuação: Automotiva</p>
                <h2>Certificação:</h2>
                <p>O aluno receberá o certificado após obter 60% de aproveitamento ao final do curso. Após a aprovação no curso o próprio aluno emite o certificado pela plataforma online. </p>
     
          </div>
      </Lay><Carousel>
              <Carousel.Item>
                  <ExampleCarouselImage variant="top" src="https://www.formabrasil.com.br/uploads/images/bra_cursos/redimencionar-730-500-32_1.jpg" />
                  <Carousel.Caption>
                      <h3>Mecanica</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
              </Carousel.Item>

          </Carousel></>
        
  )
}

export default Segunda_slid