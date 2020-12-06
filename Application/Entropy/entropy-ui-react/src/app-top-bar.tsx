import styled from "styled-components";

export const AppTopBar = styled.div `
height: 50px;
width: 99vw;
display: flex;
justify-content: flex-end;
align-items: right;
flex-direction: row;
-webkit-box-shadow: 0 3px 6px -6px black;
-moz-box-shadow: 0 3px 6px -6px black;
box-shadow: 0 3px 6px -6px black;
padding-left: 5px;
padding-right: 5px; 

.title {
    width: 20%;
    text-align: center;
    font-size: 22px;
    padding: 10px;
}

.cloud-icon-container {
    width: 40%;
    height:100%;
    position: relative;
}

.menu-container {
 width: 40%;
 text-align: left;
}

.cloud-base {
    position: relative;
    top: 0;
    left: 0;
    width: 30px;
    height: 15px;
}

.cloud-icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height:15px;
}

}`

