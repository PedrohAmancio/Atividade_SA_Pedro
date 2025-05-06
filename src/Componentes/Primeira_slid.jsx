import Carousel from 'react-bootstrap/Carousel';
import './Primeira_slid.css';

const Primeira_slid = () => {
  return (
    <Carousel >
     <img
          className="Imagem_senai_02"
          src="https://eadsenaies.com.br/wp-content/uploads/2021/10/banner_senai_ead_4.0_350x350-350x284.png" // imagem válida
          alt="Primeiro slide"
          />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>

    <Carousel.Item>
      <img
          className="Imagem_senai_01"
          src="https://eadsenaies.com.br/wp-content/uploads/2021/10/banner_senai_ead_4.0_350x350-350x284.png"
          alt="Segundo slide"
          />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}
export default Primeira_slid