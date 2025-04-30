import './index.scss';
import LogoS from '../../../assets/images/logo-s.gif'
import { useEffect, useRef } from 'react';


const Logo = () => {

    const bgRef = useRef();
    const solidLogoRef = useRef();

   

    return (
        <div className='logo-container visible' ref={bgRef}>
            <img ref={solidLogoRef} className='solid-logo delayed' src={LogoS} alt="öe" />
            
        </div>
    )
}

export default Logo