const moviesData = [
  {
    title: "Interstellar",
    description: "A group of astronauts travel through a wormhole searching for a new home for humanity.",
    year: 2014,
    poster: "https://image.tmdb.org/t/p/w500/yQvGrMoipbRoddT0ZR8tPoR7NfX.jpg",
    trailer: "https://www.youtube.com/watch?v=2LqzF5WauAw",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
  },
  {
    title: "Gravity",
    description: "An astronaut stranded in space struggles to survive and return safely to Earth.",
    year: 2013,
    poster: "https://image.tmdb.org/t/p/w500/kZ2nZw8D681aphje8NJi8EfbL1U.jpg",
    trailer: "https://www.youtube.com/watch?v=AoB105qtNfI",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
  },
  {
    title: "The Martian",
    description: "An astronaut stranded on Mars uses science and ingenuity to survive until rescue.",
    year: 2015,
    poster: "https://image.tmdb.org/t/p/w500/5BHuvQ6p9kfc091Z8RiFNhCwL4b.jpg",
    trailer: "https://www.youtube.com/watch?v=ej3ioOneTy8",
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
  },
  {
    title: "Titanic",
    description: "Two passengers from different social classes fall in love aboard a doomed ocean liner.",
    year: 1997,
    poster: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    trailer: "https://www.youtube.com/watch?v=5LOrwvyQey8",
    gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)"
  },
  {
    title: "John Wick",
    description: "A retired assassin returns to the criminal underworld seeking revenge after a personal loss.",
    year: 2014,
    poster: "https://image.tmdb.org/t/p/w500/wXqWR7dHncNRbxoEGybEy7QTe9h.jpg",
    trailer: "https://www.youtube.com/watch?v=2AUmvWm5ZDQ",
    gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
  },
  {
    title: "The Dark Knight",
    description: "A masked vigilante battles a criminal mastermind who spreads chaos throughout Gotham City.",
    year: 2008,
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    trailer: "https://www.youtube.com/watch?v=UwrOQ2pYDxY",
    gradient: "linear-gradient(135deg, #ff9566 0%, #ff5e62 100%)"
  },
  {
    title: "Shutter Island",
    description: "A detective investigates the disappearance of a patient from an isolated psychiatric hospital and begins questioning reality.",
    year: 2010,
    poster: "https://image.tmdb.org/t/p/w500/nrmXQ0zcZUL8jFLrakWc90IR8z9.jpg",
    trailer: "https://www.youtube.com/watch?v=jTwRHDWV_fI",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
  },
  {
    title: "Finding Nemo",
    description: "A cautious father crosses the ocean searching for his missing son.",
    year: 2003,
    poster: "https://image.tmdb.org/t/p/w500/eHuGQ10FUzK1mdOY69wF5pGgEf5.jpg",
    trailer: "https://www.youtube.com/watch?v=bMtzgW-FVLY",
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
  },
  {
    title: "The Pursuit of Happyness",
    description: "A struggling father faces poverty and homelessness while trying to build a better future for himself and his young son.",
    year: 2006,
    poster: "https://image.tmdb.org/t/p/w500/lBYOKAMcxIvuk9s9hMuecB9dPBV.jpg",
    trailer: "https://www.youtube.com/watch?v=DMOBlEcRuw8",
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
  },
  {
    title: "Toy Story",
    description: "A group of toys come alive and struggle with friendship, jealousy, identity and being replaced.",
    year: 1995,
    poster: "https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
    trailer: "https://www.youtube.com/watch?v=7MM1k1SSlWs",
    gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)"
  },
  {
    title: "Inception",
    description: "A skilled thief enters people's dreams to steal secrets and is given a mission to plant an idea inside a target's mind.",
    year: 2010,
    poster: "https://image.tmdb.org/t/p/w500/xlaY2zyzMfkhk0HSC5VUwzoZPU1.jpg",
    trailer: "https://www.youtube.com/watch?v=YoHD9XEInc0",
    gradient: "linear-gradient(135deg, #ff9a56 0%, #ff6a88 100%)"
  },
  {
    title: "The Shawshank Redemption",
    description: "A wrongly convicted banker forms a lasting friendship and searches for hope while serving a long prison sentence.",
    year: 1994,
    poster: "https://image.tmdb.org/t/p/w500/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
    trailer: "https://www.youtube.com/watch?v=P9mwtI82k6E",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
  },
  {
    title: "Forrest Gump",
    description: "A kind-hearted man experiences decades of American history while remaining devoted to the woman he has loved since childhood.",
    year: 1994,
    poster: "https://image.tmdb.org/t/p/w500/Cw4hIUIAmSYfK9QfaUW5igp9La.jpg",
    trailer: "https://www.youtube.com/watch?v=eYSnxZKTZzU",
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
  },
  {
    title: "The Matrix",
    description: "A hacker discovers that reality is a simulated world and joins a rebellion against the machines controlling humanity.",
    year: 1999,
    poster: "https://image.tmdb.org/t/p/w500/dXNAPwY7VrqMAo51EKhhCJfaGb5.jpg",
    trailer: "https://www.youtube.com/watch?v=tGgCqGm_6Hs",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
  },
  {
    title: "Gladiator",
    description: "A betrayed Roman general becomes a gladiator and fights his way toward revenge against the emperor who destroyed his family.",
    year: 2000,
    poster: "https://image.tmdb.org/t/p/w500/aDb548BOkFfI4nFm0kx8A3Ezh7H.jpg",
    trailer: "https://www.youtube.com/watch?v=0BLZbrLogTo",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
  },
  {
    title: "Avengers: Endgame",
    description: "The surviving heroes reunite for a final mission to reverse a devastating loss and restore the people who disappeared.",
    year: 2019,
    poster: "https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
    trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
  },
  {
    title: "Jurassic Park",
    description: "Scientists and visitors become trapped in a dinosaur theme park after its security systems fail.",
    year: 1993,
    poster: "https://image.tmdb.org/t/p/w500/d9mtMGQDLANKieb9PbD3yK7xxzo.jpg",
    trailer: "https://www.youtube.com/watch?v=QWBKEmWWL38",
    gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)"
  },
  {
    title: "The Godfather",
    description: "The reluctant son of a powerful crime family is drawn into the family's violent world and gradually takes control.",
    year: 1972,
    poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    trailer: "https://www.youtube.com/watch?v=sXW2aBUJHCk",
    gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
  },
  {
    title: "Fight Club",
    description: "A disillusioned office worker and a charismatic stranger create an underground fight club that grows into something dangerous.",
    year: 1999,
    poster: "https://image.tmdb.org/t/p/w500/jSziioSwPVrOy9Yow3XhWIBDjq1.jpg",
    trailer: "https://www.youtube.com/watch?v=ZWc-cLF_OyA",
    gradient: "linear-gradient(135deg, #ff9566 0%, #ff5e62 100%)"
  },
  {
    title: "La La Land",
    description: "An aspiring actress and a jazz musician fall in love while pursuing ambitious creative careers in Los Angeles.",
    year: 2016,
    poster: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
    trailer: "https://www.youtube.com/watch?v=1bynVcygySE",
    gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)"
  },
  {
    title: "3 Idiots",
    description: "Three engineering students navigate academic pressure, friendship and expectations while questioning a rigid education system.",
    year: 2009,
    poster: "https://image.tmdb.org/t/p/w500/66A9MqXOyVFCssoloscw79z8Tew.jpg",
    trailer: "https://www.youtube.com/watch?v=zrVVdgTurYk",
    gradient: "linear-gradient(135deg, #ff9a56 0%, #ff6a88 100%)"
  },
  {
    title: "Dangal",
    description: "A former wrestler trains his daughters to become competitive wrestlers while challenging social expectations in rural India.",
    year: 2016,
    poster: "https://image.tmdb.org/t/p/w500/cJRPOLEexI7qp2DKtFfCh7YaaUG.jpg",
    trailer: "https://www.youtube.com/watch?v=BM-gr6PQO5w",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
  },
  {
    title: "Zindagi Na Milegi Dobara",
    description: "Three friends take a road trip across Spain that forces them to confront fear, relationships and how they want to live.",
    year: 2011,
    poster: "https://image.tmdb.org/t/p/w500/hKO9O715wYxjkQSEv47giCYcyO8.jpg",
    trailer: "https://www.youtube.com/watch?v=ifIBOKCfjVs",
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
  },
  {
    title: "Taare Zameen Par",
    description: "A misunderstood child struggling with dyslexia finds confidence after a compassionate teacher recognizes his creativity.",
    year: 2007,
    poster: "https://image.tmdb.org/t/p/w500/puHRt6Raovm5ujGCdwLWvRv4NHU.jpg",
    trailer: "https://www.youtube.com/watch?v=LGGiTXLzoho",
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
  },
  {
    title: "Lagaan",
    description: "Villagers under colonial rule challenge British officers to a cricket match in hopes of escaping a crushing agricultural tax.",
    year: 2001,
    poster: "https://image.tmdb.org/t/p/w500/yNX9lFRAFeNLNRIXdqZK9gYrYKa.jpg",
    trailer: "https://www.youtube.com/watch?v=BzJmHad6IWg",
    gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)"
  },
  {
    title: "Dilwale Dulhania Le Jayenge",
    description: "Two young Indians living abroad fall in love, but family tradition and an arranged marriage stand between them.",
    year: 1995,
    poster: "https://image.tmdb.org/t/p/w500/lfRkUr7DYdHldAqi3PwdQGBRBPM.jpg",
    trailer: "https://www.youtube.com/watch?v=cmax1C1p660",
    gradient: "linear-gradient(135deg, #ff9a56 0%, #ff6a88 100%)"
  },
  {
    title: "Gully Boy",
    description: "A young man from a poor Mumbai neighborhood uses hip-hop and street rap to pursue a life beyond poverty and social limitations.",
    year: 2019,
    poster: "https://image.tmdb.org/t/p/w500/h57EzPdrDvtUkvbTj6ar5yZOPic.jpg",
    trailer: "https://www.youtube.com/watch?v=JfbxcD6biOk",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
  },
  {
    title: "Queen",
    description: "After being abandoned before her wedding, a sheltered young woman travels alone on her planned honeymoon and discovers independence.",
    year: 2013,
    poster: "https://image.tmdb.org/t/p/w500/8uGkhBLiJMIkwohGPo3iB9AuwDg.jpg",
    trailer: "https://www.youtube.com/watch?v=M_HP8xgXhBU",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
  },
  {
    title: "Bajrangi Bhaijaan",
    description: "A kind-hearted Indian man crosses borders and overcomes political obstacles to reunite a lost mute Pakistani girl with her family.",
    year: 2015,
    poster: "https://image.tmdb.org/t/p/w500/vhlliI7HZZlWfo5d6CiyfBAGLrW.jpg",
    trailer: "https://www.youtube.com/watch?v=Oz_ZJhcOX1E",
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
  },
  {
    title: "Andhadhun",
    description: "A pianist pretending to be blind becomes trapped in a dangerous web of murder, deception and unpredictable consequences.",
    year: 2018,
    poster: "https://image.tmdb.org/t/p/w500/dy3K6hNvwE05siGgiLJcEiwgpdO.jpg",
    trailer: "https://www.youtube.com/watch?v=yNc_9JgV1KU",
    gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)"
  }
];
