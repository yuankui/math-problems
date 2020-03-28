export interface Strategy {
    max: number,
    min: number,

    operator: "+" | "-" | "random";
    levelUp?: boolean,

    space: 0 | 1 | 2,
}
