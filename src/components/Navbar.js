import React from 'react';
import styled, {css} from 'styled-components/macro';
import {Link} from 'react-router-dom';
import {menuData} from '../data/MenuData';
import {Button} from './Button';
// import Bars from '../images/bars.svg';
import {FaBars} from 'react-icons/fa'




const Nav =  styled.nav`
    height: 60px;
    display:flex;
    justify-content: space-between;
    padding: 1rem;
    z-index:100;
    position:fixed;
    width:100%;
    background: ${({color}) => (color ? 'transparent' : 'orange')};
`;

const NavLink = css`
    color:#fff;
    display:flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
`;
const Logo = styled(Link)`
    font-style:italic;
    font-weight: bold;
    ${NavLink}
    
`;

const MenuBars = styled(FaBars)`
    display:none;
    color: white;

    @media screen and (max-width: 768px){
        display: block;
        cursor: pointer;
        height: 40px;
        width: 40px;
        position: absolute;
        top: 0;
        right:0;
        transform:translate(-50%, 25%);
    }

`;

const NavMenu = styled.div`
    display:flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display:none;
    }
`;

const NavMenuLinks = styled(Link)`
    ${NavLink}
`;

const NavBtn = styled.div `
    display:flex;
    align-items:center;
    margin-right:24px;

    @media screen and (max-width: 768px) {
        display:none;
    }
`;


const Navbar = ({toggle}) => {
    // const [color, setColor] = useState (false);
    // useLayoutEffect(() => {
    //     const changeColorScroll = () =>{
    //         if(window.scrollY >= 60){
    //             setColor(!color) 
    //         }
    //     };
    //     window.addEventListener('scroll', changeColorScroll);
    // }, [color])
 
    
    return (
        <Nav>
            <Logo to="/">SUPERCARS</Logo>
            <MenuBars onClick={toggle}/>
            <NavMenu >
                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key= {index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
                <Button to ='/contact' primary="true">Contact Us
                </Button>
            </NavBtn>
        </Nav>
    )
}

export default Navbar
