import styled from "styled-components"

export const Body = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    text-align: center;
    @media  screen and (min-width: 1000px ) {
        overflow: auto;
    }
`;

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    border-radius: 5px;
    display: grid;
    gap: 15px;
    position: relative;
    right: 5%;
    grid-template:
        "header" 100px
        "navbar1" 50px
        "main1" 135vh
        "sidebar1" 400px
    ;
    @media  screen and (max-height: 450px ) {
        right: auto;
        width: 97%;
        grid-template:
            "header" 100px
            "navbar1" 50px
            "main1" 155vh
            "sidebar1" 400px        
            200px auto
    }
    @media  screen and (min-width: 600px ) {
        right: auto;
        width: 100%;
        grid-template:
            "header" 100px
            "navbar1" 50px
            "main1" 145vh
            "sidebar1" 180px        
            200px auto
    ;
    transition: 1s ease
    }
    @media  screen and (min-width: 700px ) {
        width: 100%;
        right: 2%;
        grid-template:
            "header header" 100px
            "navbar1 navbar1" 50px
            "sidebar1 main1" auto
            /
            200px auto
    ;
    transition: 1s ease
    }
    @media  screen and (min-width: 1000px ) {
        width: 100%;
        right: auto;
        grid-template:
            "header  header header"   100px
            "navbar1 main1    sidebar1" auto
            /
            200px     auto       200px
            ;
            transition-duration: 1s ease
    }
`;

export const Header = styled.div`
    width: 95%;
    height: 80%;
    margin-top: 2px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 6px;
`;

export const ContainerHeader = styled.div`
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: start;
    width: 100%;
    height: 100%;
    box-shadow: -1px 1px 7px 0px rgba(0, 0, 0, 0.75);
    color: #ffffff;
    text-shadow: 0 0 10PX #c7ba45,0 0 40PX #c7c345, 0 0 80PX #c3c745;
    grid-area: header;
`;

export const CajaNav = styled.div`
    background-color: black;
    box-shadow: -1px 1px 7px 0px rgb(208, 255, 0);
    display: flex;
    grid-area: navbar1;
    border-radius: 5px;
    border: solid;
    @media  screen and (min-width: 1000px ) {
        flex-direction: column;
    }
`;

export const ContainerMain = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    grid-area: main1;
    border-radius: 5px;
    overflow: scroll;
    &::-webkit-scrollbar-thumb {
        background: #000000; 
        border-radius: 10px;
    }
    &::-webkit-scrollbar {
        background: transparent;
        border-radius: 10px;
    }
`;

export const ContainerMenu = styled.div`
    background-color: black;
    grid-area: sidebar1;
    box-shadow: -1px 1px 7px 0px rgba(0, 0, 0, 0.75);
    color: #ffffff;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
`;

export const ContainerFooter = styled.div`
    background-color: white;
    grid-area: footer1;
    box-shadow: -1px 1px 7px 0px rgba(0, 0, 0, 0.75);
    border-radius: 5px;
`;

export const CajaLogo = styled.div`
    height: 40px;
    width: 40rem;
    display: flex;
    align-items: center;
`;

export const Boton = styled.button`
    height: 100%;
    margin: 10px;
    width:100px;
    color: #fff;
    text-decoration: none;
    border-radius: 8px;
    background-color: transparent;
    border: none;
    &:hover{
        box-shadow: 0 0 10PX yellow,0 0 40PX yellow, 0 0 80PX yellow;
    };
    &:focus{
        background-color: black;
        color: rgb(255, 255, 255);
        text-shadow:  0 0 10PX orange,0 0 40PX orange, 0 0 80PX orange;
    }
    @media  screen and (min-width: 1000px ) {
        height: 50px;
        width:150px;
        text-decoration: none;
        border: none;
        background-color: transparent;
        text-align: start;
        font-size: 13px;
        font-weight: bold;
        cursor: pointer
    }
`;