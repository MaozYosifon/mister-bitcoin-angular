import { MoveModel } from "./move";

export class User {
    constructor(
        public name: string,
        public coins: number,
        public moves: MoveModel[]) { }
}