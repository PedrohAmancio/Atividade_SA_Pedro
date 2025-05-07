import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';

const Quarto_slid = () => {
  return (
    <><Lay>
         
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