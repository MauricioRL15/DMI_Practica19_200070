const game = [
    {
        playerId: generateRandom(1,10),
        tittle: "Game1, Nivel1",
        startSAt: Date.now(),
        EndsAt: Date.now() + generateRandom(60000, 300000),
        Score: generateRandom (1,100000)
    }
    ,{
        playerId: generateRandom(1,10),
        tittle: "Game2, Nivel2",
        startSAt: Date.now(),
        EndsAt: Date.now() + generateRandom(60000, 300000),
        Score: generateRandom (1,100000)
    }
    ,{
        playerId: generateRandom(1,10),
        tittle: "Game3, Nivel3",
        startSAt: Date.now(),
        EndsAt: Date.now() + generateRandom(60000, 300000),
        Score: generateRandom (1,100000)
    }
    ,{
        playerId: generateRandom(1,10),
        tittle: "Game14, Nivel4",
        startSAt: Date.now(),
        EndsAt: Date.now() + generateRandom(60000, 300000),
        Score: generateRandom (1,100000)
    }
    ,{
        playerId: generateRandom(1,10),
        tittle: "Game5, Nivel5",
        startSAt: Date.now(),
        EndsAt: Date.now() + generateRandom(60000, 300000),
        Score: generateRandom (1,100000)
    }
    ,{
        playerId: generateRandom(1,10),
        tittle: "Game6, Nivel6",
        startSAt: Date.now(),
        EndsAt: Date.now() + generateRandom(60000, 300000),
        Score: generateRandom (1,100000)
    }
    ,{
        playerId: generateRandom(1,10),
        tittle: "Game7, Nivel7",
        startSAt: Date.now(),
        EndsAt: Date.now() + generateRandom(60000, 300000),
        Score: generateRandom (1,100000)
    }
    ,{
        playerId: generateRandom(1,10),
        tittle: "Game8, Nivel8",
        startSAt: Date.now(),
        EndsAt: Date.now() + generateRandom(60000, 300000),
        Score: generateRandom (1,100000)
    }
    ,{
        playerId: generateRandom(1,10),
        tittle: "Game9, Nivel9",
        startSAt: Date.now(),
        EndsAt: Date.now() + generateRandom(60000, 300000),
        Score: generateRandom (1,100000)
    }
    ,{
        playerId: generateRandom(1,10),
        tittle: "Game10, Nivel10",
        startSAt: Date.now(),
        EndsAt: Date.now() + generateRandom(60000, 300000),
        Score: generateRandom (1,100000)
    }
    ,{
        playerId: generateRandom(1,10),
        tittle: "Game11, Nivel11",
        startSAt: Date.now(),
        EndsAt: Date.now() + generateRandom(60000, 300000),
        Score: generateRandom (1,100000)
    }
    ,{
        playerId: generateRandom(1,10),
        tittle: "Game12, Nivel12",
        startSAt: Date.now(),
        EndsAt: Date.now() + generateRandom(60000, 300000),
        Score: generateRandom (1,100000)
    }
    ,{
        playerId: generateRandom(1,10),
        tittle: "Game13, Nivel13",
        startSAt: Date.now(),
        EndsAt: Date.now() + generateRandom(60000, 300000),
        Score: generateRandom (1,100000)
    }
    ,{
        playerId: generateRandom(1,10),
        tittle: "Game14, Nivel14",
        startSAt: Date.now(),
        EndsAt: Date.now() + generateRandom(60000, 300000),
        Score: generateRandom (1,100000)
    }
    ,{
        playerId: generateRandom(1,10),
        tittle: "Game15, Nivel15",
        startSAt: Date.now(),
        EndsAt: Date.now() + generateRandom(60000, 300000),
        Score: generateRandom (1,100000)
    }
    ,{
        playerId: generateRandom(1,10),
        tittle: "Game16, Nivel16",
        startSAt: Date.now(),
        EndsAt: Date.now() + generateRandom(60000, 300000),
        Score: generateRandom (1,100000)
    }
    ,{
        playerId: generateRandom(1,10),
        tittle: "Game17, Nivel17",
        startSAt: Date.now(),
        EndsAt: Date.now() + generateRandom(60000, 300000),
        Score: generateRandom (1,100000)
    }
    ,{
        playerId: generateRandom(1,10),
        tittle: "Game18, Nivel18",
        startSAt: Date.now(),
        EndsAt: Date.now() + generateRandom(60000, 300000),
        Score: generateRandom (1,100000)
    }
    ,{
        playerId: generateRandom(1,10),
        tittle: "Game19, Nivel9",
        startSAt: Date.now(),
        EndsAt: Date.now() + generateRandom(60000, 300000),
        Score: generateRandom (1,100000)
    }
    ,{
        playerId: generateRandom(1,10),
        tittle: "Game20, Nivel20",
        startSAt: Date.now(),
        EndsAt: Date.now() + generateRandom(60000, 300000),
        Score: generateRandom (1,100000)
    }
];

function generateRandom(min = 0, max = 100){
    let difference = max - min;
    let rand = Math.random();
    rand = Math.floor(rand * difference);
    rand=rand + min;
    return rand; 
}
export default game;