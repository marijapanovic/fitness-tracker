
class Training {
    constructor(epochTime, steps) {
        this.dateTime = new Date(epochTime);
        this.steps = steps;
    }

    getActivityTotalSeconds() {
        return this.steps * 0.5;
    }

    getCallories() {
        return this.steps * 0.05;
    }

    getDistance() {
        return this.steps * 0.762;
    }

    getDate() {
        // return new Date(this.dateTime.getFullYear(), this.dateTime.getMonth(), this.dateTime.getDate(), 0, 0, 0, 0)
        return this.dateTime.getFullYear() 
            + "-" + padLeftWithZeros(this.dateTime.getMonth() + 1, 2) 
            + "-" + padLeftWithZeros(this.dateTime.getDate(), 2);
    }
}


function padLeftWithZeros (str, max) {
    str = str.toString();
    return str.length < max ? padLeftWithZeros("0" + str, max) : str;
}

export default Training;