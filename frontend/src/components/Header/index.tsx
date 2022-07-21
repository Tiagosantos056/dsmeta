import logo from '../../assets/img/logo.svg';
import git from '../../assets/img/github-icon.png';

import './style.css';

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta - Tiagosantos056</h1>
                <p>
                    Desenvolvido por 
                    <a className='a' href="https://github.com/Tiagosantos056" target={'_blank'} > @Tiagosantos056  
                    <img className='git' src= {git} alt= "GitHub" /></a> 
                </p>
            </div>
        </header>
    )
}
export default Header;