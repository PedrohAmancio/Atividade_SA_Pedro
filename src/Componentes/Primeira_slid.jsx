import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';

const Primeira_slid = () => {
  return (
    <Carousel>
    <Carousel.Item>
      <ExampleCarouselImage variant="top" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fsc.senai.br%2Fpt-br%2Faprendizagem-industrial&psig=AOvVaw16-a0oyCjtbV-uw2DIENzj&ust=1746303812344000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKiT6OLOhY0DFQAAAAAdAAAAABAE" />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <ExampleCarouselImage  variant="top" src="https://eadsenaies.com.br/wp-content/uploads/2021/10/banner_senai_ead_4.0_350x350-350x284.png" /> 
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}
export default Primeira_slid