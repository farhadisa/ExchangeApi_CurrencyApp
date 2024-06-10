class Currency{

    constructor(firstCurrency,secondCurrency){
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.url =  "https://api.currencybeacon.com/v1/latest?base=";
        this.apiKey = "Rem7VWwjm6uqYKitbCX2yMsEsmQcj5tO";
        this.amount = null;
    }

    exchange(){

        const endpoint = this.url + this.firstCurrency + "&api_key=" + this.apiKey;

        return new Promise((resolve,reject) => {
            fetch(endpoint)
            .then(response => response.json())
            .then(data => {
                const parity = data.rates[this.secondCurrency];
                const amount2 = Number(this.amount);

                const total = parity * amount2;

                resolve(parseFloat(total.toFixed(2)));
            })
            .catch(err => reject(err))
        })
        
    }

    changeAmount(amount){
        this.amount = amount;
    }

    changeFirstCurrency(newFirstCurrency){
        this.firstCurrency = newFirstCurrency;
    }

    changeSecondCurrency(newSecondCurrency){
        this.secondCurrency = newSecondCurrency;
    }
}