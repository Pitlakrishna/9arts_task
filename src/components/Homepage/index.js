
import React from 'react'
import "./index.css"
import cup from "../../images/cup.svg"
import bulb from "../../images/bulb.svg"
import image1 from "../../images/image1.svg"
import person from "../../images/People061kl1 1.svg"
import image2 from "../../images/image2.svg"
import image3 from "../../images/image3.svg"
import image4 from "../../images/image4.svg"
import image5 from "../../images/image5.svg"
import vector3 from "../../images/Vector_3.svg"
import circleMini from "../../images/miniCrcle.svg"
import textAni from "../../images/text-animation-main-main-2.gif"
import Ellipse7 from "../../images/Ellipse 7.svg"
import Ellipse8 from "../../images/Ellipse 8.svg"

const HomePage = () => {
    return (
        <div>
            <div className='boxContainer' >
                <div className='pink-gradient' >
                    <img src={Ellipse7} width={500} />
                </div>
                <div className='orange-gradient' >
                    <img src={Ellipse8} />
                </div>
                <div className='left_box'  >
                    <img src={image4} className='image4' alt="image4" />
                    <img src={cup} className='cup_image' alt='cup_image' />
                    <img src={circleMini} className='circleMini_image' alt='circleMini_image' />
                    <img src={image3} className='image3' alt="image3" />
                </div>
                <div className='box_text text-center' >
                    <img src={bulb} alt='bulb' className='bulb_image' style={{ width: '90px', height: '130px', marginTop: '15px' }} />
                    <div className='box_header' >
                        <img src={textAni} alt="textAni" style={{ width: '900px', marginTop: '-130px' }} />
                        <div className='button-classes button '  >
                            <button type='button' >Live Online Classes</button>
                            <button type='button' >Placement Guidance</button>
                        </div>
                    </div>
                    <img src={person} className='person-img button' alt="person_image" />
                    <hr className='hrline' />
                </div>
                <div className='right_box' >
                    <img src={vector3} className='vector3' alt="vector3_image" />
                    <img src={image1} className='thunder_image' alt="thunder_image" />
                    <img src={image2} className='image2' alt="thunder_image" />
                    <img src={image5} className='image5' alt="thunder_image" />
                </div>
            </div>
        </div >
    )
}

export default HomePage
