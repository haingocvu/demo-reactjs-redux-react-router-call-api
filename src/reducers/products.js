let initialState = [
    {
        id: 1,
        name: 'samsung s9',
        price: 19000000,
        status: true
    },
    {
        id: 2,
        name: 'Nokia N9',
        price: 12000000,
        status: false
    }
];

const products = (state = initialState, action) => {
    switch (action.type) {
        default:
            return [...state];
    }
}

export default products;