export class Cell {
    empty: boolean = true;

    // cross or tick
    value: string = "";

    setValue(value) {
        this.value = value;
    }
}