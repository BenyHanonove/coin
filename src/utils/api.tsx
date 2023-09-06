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


const createQuotientRequest =(date :string , symbol:string)=>{
    const options = {
    method: 'GET',
    url: 'https://quotient.p.rapidapi.com/crypto/intraday',
    params: {
        symbol: `${symbol}-USD`,
        interval: '5',
        from: date,
        to: date,
    },
    headers: {
        'X-RapidAPI-Key': '4eaf587454msh73cc1f06c8092e6p1e7d1fjsna03b30c74dcc',
        'X-RapidAPI-Host': 'quotient.p.rapidapi.com'
    }
    };
    return options;
};

export const getIntraday = async (symbol:string) =>{
    const currentDate = new Date();
    let day = currentDate.getDate().toString();
    let month = (currentDate.getMonth()+1).toString();
    const year = currentDate.getFullYear().toString();

    if(day.length === 1){day = `0${day}`}
    if(month.length === 1){month = `0${month}`}

    const dateString = `${year}-${month}-${day}`;
    console.log(dateString);

    try {
        const options = createQuotientRequest(dateString ,symbol);
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
};