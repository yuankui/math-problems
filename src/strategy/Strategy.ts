export interface Strategy {
    max: number,
    min: number,

    append: {
        plus: boolean,
        minus: boolean,
    };
    levelUp?: boolean,

    space: "first" | "second" | "third",
}
