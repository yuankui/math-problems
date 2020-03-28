export interface Consumer<T> {
    (value: T): void,
}