import styled from "styled-components";

export const AppTopBar = styled.div `
height: 50px;
width: 99vw;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row;
-webkit-box-shadow: 0 3px 6px -6px black;
-moz-box-shadow: 0 3px 6px -6px black;
box-shadow: 0 3px 6px -6px black;
padding-left: 5px;
padding-right: 5px; 

.top-bar-item {
    width: 90px;
    padding: 10px;
    height:100%;
    display:flex;
    justify-content: center;
    align-items: center;
}

.title {
    width: 20%;
    text-align: center;
    font-size: 22px;
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

.icon {
 position: relative;
 width: 40%;
}

.cloud-icon-upload-complete-enter {
  opacity: 0;
}

.cloud-icon-upload-complete-enter-active {
  opacity: 1;
  transition: opacity 2s;
}

.cloud-icon-upload-complete-exit {
  opacity: 1;
  transition: opacity 2s;
}
.cloud-icon-upload-complete-exit-active {
  opacity: 0;
  transition: opacity 1ms;
}

}`

