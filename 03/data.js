const data = [
    "..#......###....#...##..#.#....",
    ".#.#.....#.##.....###...##...##",
    "..#.#..#...........#.#..#......",
    "..#......#..........###........",
    "...#..###..##.#..#.......##..##",
    "......#.#.##...#...#....###....",
    "..........##.....##..##......#.",
    "......#...........#............",
    "#....#..........#..............",
    ".#........##.............###.##",
    "....#.........#.......#.#....##",
    "#.#..#..#..#.......#...#....##.",
    ".#........#......#.##.......#..",
    "..#.....#####.....#....#..#..##",
    ".......#..##.......#......#.###",
    "..#.#...#......#.##...#........",
    "##...................#...##..#.",
    "......#...#.##...##.#......#..#",
    ".#.................#..##...#...",
    "...#.....#.......##.....#.#....",
    ".......#.#......#.....#..#..##.",
    "..........#........#...........",
    "..#.#..........................",
    ".#.##..#.#...#...#.........#...",
    ".....#....#.....#..#.....#.....",
    "...#.#.#.....#.#..#.......#..#.",
    ".....#...###...##...#......##..",
    "#.###......#.#...#.#.#..###....",
    "#.....#..##......#..........#.#",
    "#...............#........#.#..#",
    ".....#..#.........#......##.#..",
    ".....#.##.##..#..##............",
    "...#......##...............#.#.",
    ".#..#.#............##.#........",
    "#.....#..###.............##.#..",
    "...##..#.#..#...........#..#...",
    "#....#.........#.#.............",
    "##.#.........#..###......#.#..#",
    "...#...#......#.#.#.##..#.##...",
    ".....##............#.##.##..#..",
    "....#................#.##..#..#",
    "...#..#.......#...#..#........#",
    "....#...#...#................#.",
    "....##...............#.#...#...",
    ".#.....###...#.......#.##......",
    "....######.#..............###.#",
    ".#..#.........##...............",
    "................##.#..#....###.",
    ".......#............#.#..#..#..",
    "......#.#...............##.#...",
    "...#..####.#...#..#..#......#..",
    "....#.#...#.....#.........#..##",
    ".##..#...#......##....##.#.#...",
    ".##.#.........##...#....#......",
    "..#.#..#...#.#..#.......#...#.#",
    ".........#..#.....##..#........",
    "..#......#..##.....#..#...###..",
    "..#...#....#.#..#..#.#.#..#.#..",
    "...#..#####.....#......#.......",
    "#.#............#......#..#...#.",
    ".........#..........###.......#",
    "......#....#..#.##.#......#..#.",
    "...........##.#....#.#..#......",
    "..#...................#..#.#...",
    "#....##.............##....#...#",
    "##..#....#.........#..........#",
    "....#.#.#...#..#........#.##..#",
    "...............#...#..##..#....",
    ".##.......#.......#...........#",
    "#.........................##...",
    "#........#.#..#..##..####.#....",
    "...................##.....###..",
    ".#.......#..#......#......#...#",
    "..#.........#...#..........#...",
    "..........#......#....#........",
    ".#......#..#...#..#...##....##.",
    "...#.#..#..#......#.....##.####",
    ".......#.#....#.......#........",
    "#...#.#...##..##.#......#......",
    ".#.........#...................",
    "...#..........#.#......#.......",
    "...#.....##....#..........#....",
    ".#..........##..#..#..##....#.#",
    ".##.#..........#...#.##.......#",
    "#...###....#..#.#...#..#.......",
    "..................##...........",
    "..#...##.#...........#....#.##.",
    "..#......#..##..#....##..#...#.",
    "..#....#.....#.##..#.......#..#",
    "#...#....#..#.#....#......##...",
    ".......##..#..........#........",
    "..#.............##.#.....#...#.",
    "...............#....#...#...##.",
    "##...........#.......#.##......",
    "#..#...........#.........#.....",
    "....###.............###.##..##.",
    ".........#.#.....###.......#...",
    "..#.##....#.#..........#....#..",
    "#........#....##...#..#........",
    "......#..........###..#.#......",
    ".....#.#......##.....#..##...#.",
    ".#.......#......#...#...#...#.#",
    ".#..........##.......#.....##.#",
    "###.#...#....#.....#...#......#",
    "..#.#.#..#.##.#..#.............",
    ".....#.........................",
    ".#..###..#...#...#..#..#...#.#.",
    "#................##...##.##....",
    "......#...#...#..........#...#.",
    "..........#.....##.............",
    "..#.#......#........#.......#..",
    "........##.............#.......",
    ".......#......#.##.#..#........",
    "#.#.#....#........#..........#.",
    "##..##......#..#..#.....#.#..##",
    "##..#..........#...............",
    "#.....##...#.#......#.......#.#",
    "#.....#...#....#..#.....##.....",
    "##..........#.#.....#....#...##",
    "..##.###..#.....#.......#...#..",
    ".#.#.......#......###........#.",
    ".#..............#.#..###.......",
    ".#....#..##.........#..#.#.....",
    "....#....#.#....#..#.......##.#",
    "#.......#.......#.........#....",
    "...#....#....#.....##..#..#.#.#",
    "........#....#...........#.....",
    ".#......##.#.#.##..............",
    "#..#.#.....##........#........#",
    "##...#.#.......##.......#...#..",
    "#...#.....#.##...##.#.....#....",
    "....#..##...#........#.#...#...",
    "...#....#.#.#..###...##.#.....#",
    "......#..#.....#..#........##..",
    ".......#.....#.#.........#.#..#",
    "..#.......#.#.#.#.#....#.##...#",
    ".#...#........#..##..#......#..",
    ".#..#............#...#..#.#....",
    "...##......#......#............",
    "..#...#.#.....#.....#..##.#....",
    ".#......#.#......#..#.#........",
    "..#..........##...#.#.....#..#.",
    "#...#.....#..#...#.............",
    "..##.................#....#....",
    ".#....#.......#..##....#......#",
    ".#....###............##....##.#",
    "##..#........#..#...#.......#..",
    ".....#.....#.#.#.##.........#..",
    ".......#..#....#...#...#.......",
    "...#...#...#.#.#..#.#.....#....",
    "#.#........#..#.##..#..###.....",
    "..................#..#.........",
    "#.#.....#..##.........#.......#",
    "###..#.......#..............#..",
    "......#..#.....###..........#..",
    "....#.#...#..#...........#.#...",
    "...#.....#.......#.....#.#.....",
    "#.....##..#......##...........#",
    "#...###...........##..#...#.##.",
    "......##.##.#...#..#....#......",
    "...#.#......##.#......##....#.#",
    "..............#.#.###.......#..",
    "........#....#.......##..#..###",
    "...#.....##.#....#......##..#.#",
    "..##........#.....#.#..#...#...",
    ".#..#.##.........#.....#...#..#",
    "..#..#....#...........#........",
    ".#...#....................#....",
    "##.....##....#.............#.#.",
    "....#.#..#.#..#.#.#..........##",
    ".............##.#.....#..#..#..",
    ".#....#.....##...#.###.........",
    "..#........#........#.#..###...",
    ".##....#...#...#.......#...#.#.",
    "..#...#...#..##........#..#....",
    "..##.#..#..#.....#......#.#..#.",
    ".#........#..#....#..#.........",
    "..#.#.....#.##..#........###.#.",
    ".....#.##.....##.#.............",
    "#.........#.......#...##...#...",
    "..#.##.#..#..#............#....",
    ".##....#..#............#.....#.",
    "###........##.....##.#...#.....",
    "#......##..##.#.#.#.#.#.#..##..",
    ".....###.....#....#......#....#",
    "........#.........##...#....#.#",
    ".#.#.....#.#..#..##......#...#.",
    "...#.##....#..#.###..#..##.....",
    "....#..........##..#..#..#..#..",
    "...#..#.##..#..#....#.........#",
    ".....#..###.#.....#.....#..#...",
    "......#...#....#.##...#.#......",
    ".#.###..##.....##.##......##...",
    ".....#.#...........#.#.........",
    "#........#...#..#......##.#....",
    "..#.......##....##....#.##.#..#",
    "...###.#.........#......#.....#",
    "..#.##..#....#.....##...#.##...",
    "....##.##.............#...#....",
    "##..#...#..#..#..#.............",
    ".....#.....#.....#.............",
    "...#.##.......#..#.#.....#....#",
    "#.....##.........#......##.....",
    ".....##..........#..#...#..#...",
    "#...###....#.......#...##......",
    ".#....#..#......#.....#...#.#..",
    "#........#.#.#...#.....###.#.##",
    "##...#...##..#..#....#.........",
    "....#............#..#.....#....",
    "#......#.........##....#.......",
    ".#..#..#........#.............#",
    ".##..........#......#.......#..",
    "#............#..#....#.........",
    "....#.#.....#.##...#.....#.#...",
    "...#.#..#...##..#...#.#.#......",
    "#....#..#.........##..#.#.#..##",
    ".#...#..............#.......#..",
    "#...#.....#.#........##......##",
    "...#....##.####.#.........#.#.#",
    "....###.#..#............#.#..#.",
    "....#......#...#......##.#.#.#.",
    ".....#..#.#.##.#...##..........",
    "##..#...#.#...###.............#",
    "....#...#..#.....#.#..#..#..#..",
    "#..........####......#.....###.",
    ".........#........#.##.#...#...",
    ".........#..........#.#..###...",
    ".....##........##.........#...#",
    "..##....#...#.......##.........",
    ".....#.#......##....#...#...#..",
    ".##..#..##.....................",
    ".......#...#..#..#...##....#...",
    ".#...#.......###...#..#..#.....",
    ".......#.....##.##.#.......#..#",
    ".##......#...#....#..#......##.",
    ".##....#..#....#...#...#.......",
    ".........##..#..#.#.#.....##...",
    "...#..............#..#.....####",
    ".#.#.#..#.......#.......#......",
    "..#.#......#..........#........",
    ".#...#.#..#.......#..#..#..#...",
    ".......##.#...#..#....#.....#..",
    ".##...##....##...#........####.",
    "....#.#..##....#...#....#.#....",
    ".....#.....#..#..#.#.##..#.....",
    "..#....#..............#....#...",
    "..#.#.#.....##.#.....#..##.....",
    "....#.....#....#...#...#..#.#..",
    "#...#...........#..#..#........",
    "...#.#..#.........##.#...#..##.",
    "......#.#.........#.#...#......",
    "......#..##.###......##.#....#.",
    ".....#...#..#.......#..........",
    ".#...#.......#.....###......#..",
    "...........##.....#..#..#....#.",
    "..#....#..#...#......#.......#.",
    "..#...#...#.#..#....#...#......",
    ".......#....###.####...###.#...",
    "#.##.#.......#.......#....#.#.#",
    ".##..........#.....#..###......",
    ".....#...........#.##..#....#..",
    "........##.....#.#........##...",
    "#..#..#..................##....",
    "#...###..........#.............",
    ".......#.#.......#.#.......##..",
    ".....#.#...#....#...####.....#.",
    "..##.....##.......#....#.......",
    "##..........#...#..##....##....",
    "..........#..#......#........#.",
    "##..#....#..#....#.....##....#.",
    "##.##.....#...##.##.......#....",
    "..#..#.###.#..##.#..#..#...#...",
    ".#..#.....#........#...##.#....",
    "..#..#.....#.#......##.#.#.....",
    ".#..##...#.#....#...#...#.#.##.",
    ".........#...#....###.#.....#..",
    "...........###.#.#..#..#...#.#.",
    "##...#......##...........#..#..",
    ".........##..#...#.......#.....",
    "#......#.#..........#..#.......",
    "...#.................#....#....",
    "#....#......................##.",
    "##.......#..#......#.#...###.#.",
    "..#....#..#.#......#...........",
    "...#...........###.#.#.........",
    "..#..##.....#.....##...##......",
    "..#..#.#.#.#..#..#..##....#...#",
    "#......##.....##..##.##...#....",
    "#.....#.....#.#........#.......",
    ".#.....#.................#....#",
    ".###....#...#............#.#.#.",
    ".#...#.#......#.#..............",
    "....#...#......#.....#.......#.",
    "........#.....#..........#....#",
    "#..#......#...#...#.........#..",
    "#....#......#...##.#...#...#...",
    "#...#....#....#..#..#.....#..#.",
    "#......##..#..#.#.#..#.#.......",
    "..#..#...............#...##...#",
    "............#..............#.##",
    ".#.#.#......##.......#.......#.",
    "....#.........##.......#...###.",
    ".......#.#...#.#.#.......#.....",
    "....#..#..#...#....#.##.#.##...",
    "...##.##.#...#......#..........",
    "#.....#...#.#...#.##..##.#.....",
    ".......#.....#...#.#...##.#....",
    ".#.............#.....#....##..#",
    "##......#.......#...#....#.....",
    ".###......#.................#..",
    "#.#......##.........##..#......",
    "...#....#..........#.#.........",
    "..##..#.........#..............",
    ".....#...#..................#.#",
    ".............#.........#...#..#",
    "....#....#......#.#.......#...#",
    "#..#............#.#.......#...#",
    "..#.....#............#.........",
    ".#.....................###....#",
    "........#.####.........#.#.#...",
    "#...........##...#.........#..#",
    "...........#..#......#...#.#...",
    "....##...##.....#.....#........"
]