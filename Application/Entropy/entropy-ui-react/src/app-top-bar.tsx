import styled from "styled-components";

export const AppTopBar = styled.div `
height: 80px;
width: 100vw;
display: flex;
justify-content: flex-end;
align-items: right;
flex-direction: row;

.title {
    width: 70px;
    flex-grow: 3;
    text-align: center;
}

.upload-status-container {
    flex-grow: 4;
    text-align:right;
}

.menu-container {
 flex-grow: 3;
 text-align: left;
}

}

`