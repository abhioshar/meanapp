export class Player {
    score: number = 0;
    computer: boolean = true;

    updateScore(increment: number) {
        this.score += increment;
    }
}