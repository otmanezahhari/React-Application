import styled from "styled-components";


export const NavbarSection = styled.header`
padding: 20px 0;
overflow: hidden;
background: #fff;
position: relative;
border-bottom: 1px solid #000
display: flex;
`
export const FlexItem = styled.div`
  display:flex;
`


export const Logo = styled.div`
  width: 30%;
`

export const NavbarLink =styled.nav`
  width: 70%;
`
export const UlList =styled.ul  `
  display: flex;
  list-style: none;
  justify-content: space-between;
`
  
export const ListItem  = styled.a`
  display: block;
  color: #222;
  text-decoration: none;
  padding: 10px 15px;
  font-weight: bold;
  &:hover{
    color: #eb5424
  }
`
