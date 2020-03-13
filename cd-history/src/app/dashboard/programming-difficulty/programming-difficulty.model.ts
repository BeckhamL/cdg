export class ProgrammingDifficultyModel {
    title: string;
    timeToLearn: string;
    difficulty: ExcerciseDifficultyEnum;
    image: string;
}

export enum ExcerciseDifficultyEnum {
    easy = 'easy',
    medium = 'medium',
    hard = 'hard'
}