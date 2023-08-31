import styled from 'styled-components';

export const Container = styled.div`
    width: 1020px;
    height: 800px;
`;

export const CajaElementos = styled.div`
    width: 100%;
    background-color: bisque;
`;

export const CajaTitulo = styled.div`
    width: 100%;
    height: 80px;
    background-color: #0073ff;
    text-align: center;
    border-radius: 5px;
    h2 {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
`;

export const CajaProductos = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    background-color: #e7e3e3;
    border: 1px solid black;
`;

export const CamposInf = styled.div`
    flex: 1;
    height: 25px;
    background-color: #0000ffe2;
    border: 1px solid black;
    text-align: center;
    color: white;
`;

export const FilaDatosContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    background-color: #ffffffe8;
    border: 1px solid black;
`;

export const Celda = styled.div`
    flex: 1;
    height: 40px;
    padding: 0 8px;
    border-right: 1px solid #020202;
    display: flex;
    align-items: center;
`;
