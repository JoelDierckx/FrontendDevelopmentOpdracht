export interface IPuzzle {
    ID: number,
    Name: string,
    Img: string,
    PuzzleText: string,
    Points: number,
    Type: string,
    PossibleAnswer?: string[]
    Answer: string,
    AnswerImg: string,
}