import styled from "styled-components";
import {Link} from "react-router-dom";

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

const CoinList = styled.div``;

const Coin = styled.li`
    background: white;
    color: ${(props) => props.theme.bgColor};
    list-style-type: none;
    font-size: 40px;
    line-height: 1.6;
    border-radius: 8px; 
    margin-bottom: 8px;
    align-items: center;
    gap: 10px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
    a {
        padding: 12px;
        transition: color 0.1s ease-in;
        display: block;
    }
    &:hover {
        a {
            color: ${(props) => props.theme.accentColor}
        }
    }
`;

const Title = styled.h1`
    color: ${(props) => props.theme.accentColor}; 
`;

const coins = [
    {
        id: "btc-bitcoin",
        name: "Bitcoin",
        symbol: "BTC",
        rank: 1,
        is_new: false,
        is_active: true,
        type: "coin",
    },
    {
        id: "eth-ethereum",
        name: "Ethereum",
        symbol: "ETH",
        rank: 2,
        is_new: false,
        is_active: true,
        type: "coin",
    },
    {
        id: "hex-hex",
        name: "HEX",
        symbol: "HEX",
        rank: 3,
        is_new: false,
        is_active: true,
        type: "token",
    },
]

function Coins() {
    //return <Title>Coins</Title>
    return <Container>
        <Header>
            <Title>Coin List</Title>
        </Header>
        <CoinList>
            {coins.map((coin) => (
                <Coin key={coin.id}>
                    <Link to={`/${coin.id}`}>
                        {coin.name} &rarr;
                    </Link>
                </Coin>
            ))}
        </CoinList>
     </Container>
}
export default Coins;