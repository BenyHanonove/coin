// Exporting a template for user data
export const userDataTemplate = {
    fullName: "Beny Hanonove",
    password: "A1234567",
    email: "benyx13@gmail.com",
    img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
    balance: 3014.43,
    cards: [
        { number: "4300-5200-5342-1800", nameHolder: "Beny Hanonove", expirationDate: "05/23" },
        { number: "3300-5200-5342-1800", nameHolder: "Beny Hanonove", expirationDate: "05/23" },
        { number: "2300-5200-5342-1800", nameHolder: "Beny Hanonove", expirationDate: "05/23" },
        { number: "5300-5200-5342-1800", nameHolder: "Beny Hanonove", expirationDate: "05/23" },
    ],
    assets: [
        { id: '1', name: 'bitcoin', purchaseDate: new Date('2021-02-15'), header: 'BTC', amount: 0.62, symbol: 'BTCUSD'},
        { id: '2', name: 'ethereum', purchaseDate: new Date('2022-04-10'), header: 'ETH', amount: 3, symbol: 'ETHUSD'},
        { id: '3', name: 'cardano', purchaseDate: new Date('2023-01-25'), header: 'ADA', amount: 32, symbol: 'ADAUSD'},
        { id: '4', name: 'ripple', purchaseDate: new Date('2021-09-30'), header: 'XRP', amount: 33.8, symbol: 'XRPUSD'},
        { id: '5', name: 'tether', purchaseDate: new Date('2022-11-12'), header: 'USDT', amount: 2.6, symbol: 'USDT' },
        { id: '6', name: 'dogecoin', purchaseDate: new Date('2023-03-18'), header: 'DOGE', amount: 287, symbol: 'DOGEUSD'},
        { id: '7', name: 'solana', purchaseDate: new Date('2021-07-08'), header: 'SOL', amount: 11.4, symbol: 'SOLUSD'},
        { id: '8', name: 'polkadot', purchaseDate: new Date('2022-08-22'), header: 'DOT', amount: 10, symbol: 'DOT'}
    ],
};

// Exporting an interface for a card
export interface card {
    number: string;
    nameHolder: string;
    expirationDate: string;
};

// Exporting an interface for an asset
export interface asset {
    id: string;
    name: string;
    purchaseDate: Date;
    header: string;
    amount: number;
    symbol: string;
};