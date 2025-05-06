import { useState } from 'react';
import React from 'react'
import Lay from '../Lay'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {useNavigate} from  'react-router-dom' ;
import Primeira_slid from '../Componentes/Primeira_slid';
import './Home.css';
const Home = () => {
    const [index, setIndex] = React.useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
      };

  return (
    <div>
        <Lay>
        <Primeira_slid/>
{/* Cartões */}
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://www.formabrasil.com.br/uploads/images/bra_cursos/redimencionar-730-500-32_1.jpg" />
        <Card.Body>
          <Card.Title>Tecnico em Mecanica</Card.Title>
          <Card.Text>
          O curso Técnico em Mecânica têm como objetivos apoiar a gestão da manutenção, implementar processos de produção e atuar no desenvolvimento de projetos mecânicos e na automação de máquinas, equipamentos e processos mecânicos, atendendo as normas e padrões técnicos, de qualidade, saúde e segurança e de meio ambiente.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <button variant="primary" style={{width:"100%", backgroundColor:"#3840BA"}} 
         className="btn btn-primary">Matricular-se</button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyUb1H9RUtWE_gwKCkRSuEijNxrt__bO2-Dg&s" />
        <Card.Body>
          <Card.Title>Tecnico em Eletrotcnica</Card.Title>
          <Card.Text>
          O curso Técnico em Eletrotécnica têm como objetivos instalar, manter e projetar sistemas elétricos prediais, industriais e de potência, cumprindo legislações vigentes, parâmetros de eficiência energética, normas técnicas, de qualidade, de segurança e saúde e, ainda, ambientais.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <button className="btn btn-primary">Matricular-se</button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://s5.static.brasilescola.uol.com.br/vestibular/2020/11/analise-desenvolvimento-sistema.jpg" />
        <Card.Body>
          <Card.Title>Tecnico em desenvolvimento de sistema</Card.Title>
          <Card.Text>
          O curso Técnico em Desenvolvimento de Sistemas têm como objetivos desenvolver e programar sistemas computacionais, atendendo normas e padrões de qualidade, usabilidade, integridade e segurança da informação.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <button className="btn btn-primary">Matricular-se</button>
        </Card.Footer>
      </Card>
    </CardGroup>
    {/* Fim dos Cartões */}

    </Lay>
    </div>
  )
}

export default Home
