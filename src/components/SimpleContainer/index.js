import React from "react";
import {
    SimpleContainerStyled,
} from "./style";


function SimpleContainer(props) {
    return (
        <SimpleContainerStyled position={props.position}>
            {props.children}
        </SimpleContainerStyled>
    );
}

export default SimpleContainer;
