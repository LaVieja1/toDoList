export default class Task {
    constructor(name, date = 'No hay fecha') {
        this.name = name;
        this.date = date;
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setDate(date) {
        this.date = date;
    }

    getDate() {
        return this.date;
    }

    getDateFormatted() {
        const day = this.date.split('/')[0];
        const month = this.date.split('/')[1];
        const year = this.date.split('/')[2];
        return `${day}/${month}/${year}`;
    }
}