import {useLocation, useParams} from "react-router-dom";
import styled from "styled-components";
import {useState} from "react";

const Container = styled.div`
    padding: 0px 20px;
    max-width: 800px;
    margin: 0 auto;
`;

const Header = styled.div`
    font-size: 50px;
    height: 15vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h1`
    color: ${(props) => props.theme.accentColor}; 
`;

const Loader = styled.span`
    text-align: cenger;
`;

interface RouteParams {
    coinId?: string;
}

interface CoinState {
    state: {
        name: string;
    }
}


function Coin() {
    const [loading, setLoading] = useState(true);
    const {coinId} = useParams() as RouteParams;
    const {state} = useLocation() as CoinState;
    // const name: string = location.state?.name;
    console.log({state});
    return (
        <Container>
            <Header>
                <Title>코인 {coinId}</Title>
            </Header>
            {loading ? (<Loader>Loading...</Loader>) : null}
        </Container>
    );
}
export default Coin;