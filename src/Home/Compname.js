import '../App.css';
import { Container } from "react-bootstrap"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import clicl from '../image/c-1.png';
import clicl2 from '../image/c-2.png';
import clicl3 from '../image/c-3.png';
import clicl4 from '../image/c-4.png';
import clicl5 from '../image/c-5.png';
import clicl6 from '../image/c-6.png';
import clicl7 from '../image/c-7.png';
import clicl8 from '../image/c-8.png';

function Compname() {
    return (
        <>
            <section>
                <div>
                    <Container>
                        <OwlCarousel className='owl-theme' loop margin={10} items={5} dots={false}>
                            <div class='item'>
                                <div className='m-3'>
                                    <img src={clicl} width={"100px"} ></img>
                                </div>
                            </div>
                            <div class='item'>
                                <div className='m-3'>
                                    <img src={clicl2} width={"100px"} ></img>
                                </div>
                            </div>
                            <div class='item'>
                                <div className='m-3'>
                                    <img src={clicl3} width={"100px"} ></img>
                                </div>
                            </div>
                            <div class='item'>
                                <div className='m-3'>
                                    <img src={clicl4} width={"100px"} ></img>
                                </div>
                            </div>
                            <div class='item'>
                                <div className='m-3'>
                                    <img src={clicl5} width={"100px"} ></img>
                                </div>
                            </div>
                            <div class='item'>
                                <div className='m-3'>
                                    <img src={clicl6} width={"100px"} ></img>
                                </div>
                            </div>
                            <div class='item'>
                                <div className='m-3'>
                                    <img src={clicl7} width={"100px"} ></img>
                                </div>
                            </div>
                            <div class='item'>
                                <div className='m-3'>
                                    <img src={clicl8} width={"100px"} ></img>
                                </div>
                            </div>
                        </OwlCarousel>
                    </Container>
                </div>
            </section>
        </>
    )
}
export default Compname