import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';


const Slid_historia =() =>{
    return(
        <><Lay>
        <div>
            <h1>A historia do Senai </h1>
            <h2>Origens e Criação (1942)</h2>
            <p>O SENAI foi criado em 22 de janeiro de 1942, por meio do Decreto-Lei nº 4.048, durante o governo de Getúlio Vargas. Sua criação foi uma resposta à necessidade de qualificar mão de obra para a crescente industrialização do país.

A iniciativa teve forte apoio da Confederação Nacional da Indústria (CNI), que ficou responsável pela administração do SENAI, em parceria com os sindicatos industriais. A ideia era criar uma entidade sem fins lucrativos, mantida pela contribuição das indústrias, para capacitar trabalhadores e melhorar a produtividade e a competitividade do setor.</p>
             <h2>Anos 1940–1950: Consolidação e Expansão</h2>
                <p>Nos anos seguintes à sua criação, o SENAI rapidamente se expandiu por todo o Brasil. Inicialmente, os cursos eram voltados para profissões básicas da indústria, como ajudantes, torneiros, mecânicos, eletricistas e soldadores.

A formação era técnica e prática, com o lema: "Aprender fazendo", destacando o ensino prático em oficinas-escola. Durante esse período, o SENAI também passou a atuar em áreas como metalurgia, construção civil, marcenaria e eletricidade.

</p>
            <h2>Anos 1960–1970: Desenvolvimento Tecnológico</h2>
            <p>Com o avanço industrial no Brasil, o SENAI passou a investir mais em tecnologia e inovação, ampliando seus cursos para níveis técnicos e criando centros de formação em automação, eletrotécnica, química e outros setores de ponta.

Também surgiram os primeiros laboratórios especializados e o foco começou a se voltar não apenas para formação de trabalhadores, mas também para apoio técnico às indústrias.</p>
              <h2>Anos 1980–1990: Novos Desafios:</h2>
                <p>Durante a crise econômica e abertura comercial dos anos 80 e 90, o SENAI teve que se adaptar. Passou a oferecer consultorias, treinamentos rápidos e customizados, com foco em produtividade e qualidade industrial.

Foi também nesse período que o SENAI começou a desenvolver parcerias com empresas e governos internacionais, além de investir em educação à distância (EAD) e informatização.</p>
                <h2>Anos 2000 em diante: Inovação, Sustentabilidade e Indústria 4.0</h2>
                <p>Com a globalização e a chegada da Indústria 4.0, o SENAI se posicionou como um dos principais agentes de inovação e capacitação tecnológica no Brasil. Criou Institutos de Inovação e Tecnologia, centros de pesquisa aplicada, e fortaleceu a oferta de cursos técnicos, de graduação tecnológica e pós-graduação.

Além disso, o SENAI passou a apoiar startups, incubadoras de empresas e a desenvolver projetos em áreas como:

Inteligência artificial

Automação industrial

Internet das Coisas (IoT)

Sustentabilidade e energias renováveis</p>
        </div>
    </Lay>
    <Carousel fade>
    <Carousel.Item>
    <ExampleCarouselImage variant="top" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.senairs.org.br%2Fmural-senai-80-anos&psig=AOvVaw3LTDNyV73Qjuk9pmqVtVdg&ust=1746563613517000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPisrvOWjY0DFQAAAAAdAAAAABAE" />
      <Carousel.Caption>
        <h3>Historia</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <ExampleCarouselImage variant="top" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.portaldaindustria.com.br%2Fiel%2Finstitucional%2Fhistoria%2F&psig=AOvVaw3LTDNyV73Qjuk9pmqVtVdg&ust=1746563613517000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPisrvOWjY0DFQAAAAAdAAAAABAT" />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <ExampleCarouselImage variant="top" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fsenaies.com.br%2Fsenai-es-70-anos-transformando-o-espirito-santo%2F&psig=AOvVaw3LTDNyV73Qjuk9pmqVtVdg&ust=1746563613517000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPisrvOWjY0DFQAAAAAdAAAAABAj" />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>

        
        </>
    )
}

export default Slid_historia;