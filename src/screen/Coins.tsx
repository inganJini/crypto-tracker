import styled from "styled-components";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

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
        display: flex;
        align-items: center;
        padding: 12px;
        transition: color 0.1s ease-in;
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

const Loader = styled.span`
    text-align: cenger;
`;

const Img = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 10px;
`;

interface CoinInterface {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
}

function Coins() {
    const [coins, setCoins] = useState<CoinInterface[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        (async() => {
            const response = await fetch("https://api.coinpaprika.com/v1/coins");
            const json = await response.json();
            setCoins(json.slice(0, 100));
            setLoading(false);
        })();
    }, []);
    return <Container>
        <Header>
            <Title>Coin List</Title>
        </Header>
        { loading ? (<Loader>Loading...</Loader>) : (
            <CoinList>
                {coins.map((coin) => (
                    <Coin key={coin.id}>
                        <Link to={`/${coin.id}`} state={{ name: coin.name }}>
                        <Img
                                src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`}
                                alt={`${coin.name}`}
                            />
                            {coin.name} &rarr;
                        </Link>
                    </Coin>
                ))}
            </CoinList>
        )}

     </Container>
}
export default Coins;