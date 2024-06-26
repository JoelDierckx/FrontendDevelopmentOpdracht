import { IPuzzle } from "../../models/IPuzzle";

export const PuzzleArray: IPuzzle[] = [
    {
        ID: 1,
        Name: "Strange Hats",
        Img: "src\\assets\\img\\StrangeHats.webp",
        PuzzleText: "These four top hats are all the same height, but the length of each brim is different. In other words, the hats are equally tall but vary in width. One of these four hats has a brim and height that are the same length. Which hat is it?",
        Points: 10,
        Type: "MultipleChoice",
        PossibleAnswer: ["A", "B", "C", "D"],
        Answer: "A",
        AnswerImg: "src\\assets\\img\\StrangeHats2.webp",
    },
    {
        ID: 2,
        Name: "Bottle Full of Germs",
        Img: "src\\assets\\img\\germs.webp",
        PuzzleText: "A glass jar holds a single germ. After one minute, the germ splits into two germs. One minute after that, the two germs each split again, forming a total of four germs. Continuing at this rate, a single germ can multiply to fill the whole jar in exactly one hour.\nKnowing this, how long in minutes would it take to fill the jar if you had started with two germs?",
        Points: 20,
        Type: "Write",
        PossibleAnswer: undefined,
        Answer: "59",
        AnswerImg: "src\\assets\\img\\germs2.webp",
    },
    {
        ID: 3,
        Name: "Sausage Thief",
        Img: "src\\assets\\img\\SausageThief.webp",
        PuzzleText: "Somebody ate the butcher's sausages! Here's what these four boys have to say: \n\nA: 'B ate the sausages!'\nB: 'D ate them all up!'\nC: 'I didn't eat them, no way!'\nD: 'B's totally lying!'\n\nOnly one of these rascals is telling the truth and all the others are, needless to say, lying.Can you figure out who ate the sausages?",
        Points: 40,
        Type: "MultipleChoice",
        PossibleAnswer: ["A", "B", "C", "D"],
        Answer: "C",
        AnswerImg: "src\\assets\\img\\SausageThief2.webp",
    },
    {
        ID: 4,
        Name: "Farm Work",
        Img: "src\\assets\\img\\farm.webp",
        PuzzleText: "Alfred and Roland have been hired by a farm to sow flower seeds. They've been assigned a 10-acre plot of land and split it in half so they can work independently. Roland starts from the east and Alfred from the west.\nAlfred can plow the land at a rate of 20 minutes per acre. Roland takes 40 minutes to plow, but sows seeds at three times the speed Alfred does.\nIf sowing seeds on the 10-acre plot pays $100, how much of that money should go to Roland?",
        Points: 20,
        Type: "Write",
        PossibleAnswer: undefined,
        Answer: "50",
        AnswerImg: "src\\assets\\img\\farm2.webp",
    },
    {
        ID: 5,
        Name: "Weighing Cats",
        Img: "src\\assets\\img\\cats.webp",
        PuzzleText: "There are three different colours of toy cat, each colour having a different weight. Examples 1 and 2 show their relative weights.\nYou have three red cats and four black cats on one side of the scale, and four white cats and one black cat on the other. Given this setup, what will the scale do?",
        Points: 30,
        Type: "MultipleChoice",
        PossibleAnswer: ["A: Tip left", "B: Stay level", "C: Tip right"],
        Answer: "A: Tip left",
        AnswerImg: "src\\assets\\img\\cats2.webp",
    },
]