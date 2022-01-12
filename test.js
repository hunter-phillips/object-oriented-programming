function Car(year, model) {
    this.year = year;
    this.model = model
    let priceDecrease = 1000;

    this.getInformation = function () {
        `${this.year} & ${this.model}`
    }
}