import React from 'react';
import {
    DriverCardContainer,
    HeaderDriverCard,
    TopText,
    BottomText,
    ContainerText, IdText
} from "~/component/ui/DriverCard/driver-card.styled";
import {FiMoreHorizontal} from 'react-icons/fi';
import {FaRegUserCircle} from 'react-icons/fa';

const _renderHeaderCard = (props: any) => {
    return (
        <HeaderDriverCard>
            <span style={{fontSize: '0.75rem', color: "black"}}>Driver ID:</span>
            <IdText>
                {props.obj.id}
            </IdText>
            <div style={{marginLeft: "auto"}}>
                <FiMoreHorizontal size={28}/>
            </div>
        </HeaderDriverCard>
    )
}

const _renderCardDesc = (props: any) => {
    const date = new Date(props.obj.dob);
    const formatedDate = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`

    return (<React.Fragment>
        <ContainerText>
            <TopText>Nama Driver</TopText>
            <BottomText>{props.obj.name}</BottomText>
        </ContainerText>
        <ContainerText>
            <TopText>Telepon </TopText>
            <BottomText>{props.obj.phone}</BottomText>
        </ContainerText>
        <ContainerText>
            <TopText>Email</TopText>
            <BottomText>{props.obj.email}</BottomText>
        </ContainerText>
        <ContainerText>
            <TopText>Tanggal Lahir</TopText>
            <BottomText>{formatedDate}</BottomText>
        </ContainerText>
    </React.Fragment>)
}

const _renderCardImage = () => (
    <div style={{marginTop: '12px'}}>
        <FaRegUserCircle size={80} color='gray'/>
    </div>
)

function DriverCard(props: any) {
    return (
        <DriverCardContainer>
            {_renderHeaderCard(props)}
            {_renderCardImage()}
            {_renderCardDesc(props)}
        </DriverCardContainer>
    )
}

export default DriverCard;