import React from "react";
import "./loading-spinner.styled";
import {SpinnerContainer, LoadingSpinnerCircle} from "~/component/ui/LoadingSpinner/loading-spinner.styled";

export default function LoadingSpinner() {
    return (
        <SpinnerContainer>
            <LoadingSpinnerCircle/>
        </SpinnerContainer>
    );
}