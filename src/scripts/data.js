// static data
export const countries = ["Brazil", "China", "India", "Spain", "Russia", "USA"]

export const exchangeRatesStatic = {
    "quotes": {
        "USDBRL": 5.185203,
        "USDCNY": 7.054298,
        "USDEUR": 0.94975,
        "USDINR": 81.180497,
        "USDRUB": 61.715006
    },
    "source": "USD",
    "success": true,
    "timestamp": 1669964283
}

export const products = {
    mcchicken: {
        prices: {
            "BRL": 20.90,
            "CNY": 12,
            "EUR": 4.58,
            "INR": 112,
            "RUB": 100
        },
        primaryColor: "#FFC72C",
        secondaryColor: "#27251F",
        title: "Mc Chicken",
        subtitle: "Burger only, not the meal",
        imageOffset: null
    },
    corolla: {
        prices: {
            "BRL": 147790,
            "CNY": 120000,
            "EUR": 22100,
            "INR": 1646000,
            "RUB": 2032000
        },
        primaryColor: "#fff",
        secondaryColor: "#EB0A1E",
        title: "Toyota Corolla",
        subtitle: "2022 model, entry version",
        imageOffset: null
    },
    jeans: {
        prices: {
            "BRL": 460,
            "CNY": 439,
            "EUR": 110,
            "INR": 8500,
            "RUB": 8600
        },
        primaryColor: "#C41230",
        secondaryColor: "#fff",
        title: "Levi's Jeans",
        subtitle: "501® Original Fit Jeans",
        imageOffset: null
    },
    iphone: {
        prices: {
            "BRL": 9499,
            "CNY": 7999,
            "EUR": 1319,
            "INR": 129900,
            "RUB": 99990
        },
        primaryColor: "#000",
        secondaryColor: "#fff",
        title: "iPhone",
        subtitle: "iPhone 14 Pro 128GB",
        imageOffset: null
    },
    coke: {
        prices: {
            "BRL": 3.99,
            "CNY": 9.975, // 4-pack price, divided by 4 (39.9/4)
            "EUR": 1.95,
            "INR": 65,
            "RUB": 51.85
        },
        primaryColor: "#F40009",
        secondaryColor: "#fff",
        title: "Coke",
        subtitle: "1L (33oz) bottle",
        imageOffset: null
    }
}

// national average minimum wage: 22 CNY per hour
// national average is about 5000 CNY per month

export const minimumWage = {
    "BRL": 1212,
    "CNY": 3872, // yuan / rmb => ChiNeseYuan
    "EUR": 1050,
    "INR": 9306,
    "RUB": 13617
}