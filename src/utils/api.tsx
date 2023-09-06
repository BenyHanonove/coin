import axios from "axios";


// Making a GET request to retrieve information about the cryptocurrency using the CoinGecko API via RapidAPI.
const createCoinGeckoRequest = (coinName :string) =>{
    const options = {
        method: 'GET',
        url: `https://coingecko.p.rapidapi.com/coins/${coinName}`,
        params: {
            sparkline: 'false',
            developer_data: 'true',
            community_data: 'true',
            market_data: 'true',
            tickers: 'true',
            localization: 'true'
        },
        headers: {
            'X-RapidAPI-Key': '4eaf587454msh73cc1f06c8092e6p1e7d1fjsna03b30c74dcc',
            'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
        }
    };

    return options;
};


//Function to get coin value by name
export const getCoinValue = async (coinName:string) =>{
    const req = createCoinGeckoRequest(coinName);
    try{
        const res = await axios.request(req);
        return res.data.market_data.current_price.usd;
    }catch(err){
        console.log(err);
    }
};

//Function to get coin icon by name
export const getCoinIcon = async (coinName:string) =>{
    const req = createCoinGeckoRequest(coinName);
    try{
        const res = await axios.request(req);
        return res.data.image.large;
    }catch(err){
        console.log(err);
    }
};