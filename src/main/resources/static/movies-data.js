const moviesData = [
  {
    title: "Interstellar",
    description: "A group of astronauts travel through a wormhole searching for a new home for humanity.",
    year: 2014,
    poster: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDAtMDc3OC00ODA3LWJhNjAtNzZmNWFhMzAxZTQ4XkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    title: "Gravity",
    description: "An astronaut stranded in space struggles to survive and return safely to Earth.",
    year: 2013,
    poster: "https://m.media-amazon.com/images/M/MV5BZGM0NGM0N2EtNWI3YS00OTg4LWI1MmItN2Q4YTcxNWFmYzk5XkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    title: "The Martian",
    description: "An astronaut stranded on Mars uses science and ingenuity to survive until rescue.",
    year: 2015,
    poster: "https://m.media-amazon.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZWFwXkFuZHlpZ3g@._V1_SX300.jpg"
  },
  {
    title: "Titanic",
    description: "Two passengers from different social classes fall in love aboard a doomed ocean liner.",
    year: 1997,
    poster: "https://m.media-amazon.com/images/M/MV5BMDMwZDdiMjktYmI4ZC00NWFmLWFlYzAtNTMyMzc5ZTAwM2U5XkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    title: "John Wick",
    description: "A retired assassin returns to the criminal underworld seeking revenge after a personal loss.",
    year: 2014,
    poster: "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZWFwXkFuZHlpZ3g@._V1_SX300.jpg"
  },
  {
    title: "The Dark Knight",
    description: "A masked vigilante battles a criminal mastermind who spreads chaos throughout Gotham City.",
    year: 2008,
    poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZWFwXkFuZHlpZ3g@._V1_SX300.jpg"
  },
  {
    title: "Shutter Island",
    description: "A detective investigates the disappearance of a patient from an isolated psychiatric hospital and begins questioning reality.",
    year: 2010,
    poster: "https://m.media-amazon.com/images/M/MV5BYzhiNDkyNzEtNzc5Yy00OTQ0LTk3MmEtNGYwNTBlN2RhYzdjXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    title: "Finding Nemo",
    description: "A cautious father crosses the ocean searching for his missing son.",
    year: 2003,
    poster: "https://m.media-amazon.com/images/M/MV5BZDZjMDAzOTEtMTdjYS00ZjNhLWI5MDAtMzg0ZWJhMzgwMzk1XkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    title: "The Pursuit of Happyness",
    description: "A struggling father faces poverty and homelessness while trying to build a better future for himself and his young son.",
    year: 2006,
    poster: "https://m.media-amazon.com/images/M/MV5BMTQ4NzEyNzU0OV5BMl5BanBnXkFtZWFwXkFuZHlpZ3g@._V1_SX300.jpg"
  },
  {
    title: "Toy Story",
    description: "A group of toys come alive and struggle with friendship, jealousy, identity and being replaced.",
    year: 1995,
    poster: "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ODQ2LWI4NTItYjU5YjEyNmFkYjhjXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    title: "Inception",
    description: "A skilled thief enters people's dreams to steal secrets and is given a mission to plant an idea inside a target's mind.",
    year: 2010,
    poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzc5OTAtODcyNC00MDZhLWJiNzgtNzc4ZjU2NTA4OTE0XkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    title: "The Shawshank Redemption",
    description: "A wrongly convicted banker forms a lasting friendship and searches for hope while serving a long prison sentence.",
    year: 1994,
    poster: "https://m.media-amazon.com/images/M/MV5BNDE3ODcyMzMtY2IzMC00YmFkLWI1ZTgtYjE4MGQ5YTUyNzMyXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    title: "Forrest Gump",
    description: "A kind-hearted man experiences decades of American history while remaining devoted to the woman he has loved since childhood.",
    year: 1994,
    poster: "https://m.media-amazon.com/images/M/MV5BNWIwYzZmYTEtOTY4ZS00NzA0LWI5YjUtMDAwMmQ1YWJjOGI1XkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    title: "The Matrix",
    description: "A hacker discovers that reality is a simulated world and joins a rebellion against the machines controlling humanity.",
    year: 1999,
    poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDl2OWdhM2YxZjVBXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    title: "Gladiator",
    description: "A betrayed Roman general becomes a gladiator and fights his way toward revenge against the emperor who destroyed his family.",
    year: 2000,
    poster: "https://m.media-amazon.com/images/M/MV5BMzY3MzY4ZWItNDc5Yi00MzE1LWI4MjItZjQ3ZjZkZGQ3YzVhXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    title: "Avengers: Endgame",
    description: "The surviving heroes reunite for a final mission to reverse a devastating loss and restore the people who disappeared.",
    year: 2019,
    poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZWFwXkFuZHlpZ3g@._V1_SX300.jpg"
  },
  {
    title: "Jurassic Park",
    description: "Scientists and visitors become trapped in a dinosaur theme park after its security systems fail.",
    year: 1993,
    poster: "https://m.media-amazon.com/images/M/MV5BMjM2MDgxNTYtOWIyNS00YjlkLTk1MTAtN2M1ZTMxNWMwOGRmXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    title: "The Godfather",
    description: "The reluctant son of a powerful crime family is drawn into the family's violent world and gradually takes control.",
    year: 1972,
    poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNC00MTMyLWFwMzAtODU1Nzk0MzA5NzVhXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    title: "Fight Club",
    description: "A disillusioned office worker and a charismatic stranger create an underground fight club that grows into something dangerous.",
    year: 1999,
    poster: "https://m.media-amazon.com/images/M/MV5BMmEzNTA0ZDctZTMyNC00OTQ3LTk1MzktMDAwNWRlZWY3YzhhXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    title: "La La Land",
    description: "An aspiring actress and a jazz musician fall in love while pursuing ambitious creative careers in Los Angeles.",
    year: 2016,
    poster: "https://m.media-amazon.com/images/M/MV5BMzA1NjkwODQtNzc4Zi00ZDVmLWE2NGEtN2ZjNTUyNDE2YTMyXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    title: "3 Idiots",
    description: "Three engineering students navigate academic pressure, friendship and expectations while questioning a rigid education system.",
    year: 2009,
    poster: "https://m.media-amazon.com/images/M/MV5BNTMyNTc5OTAtMTU3OS00NTc5LWEyMzktNjA4YTY4NDZhOTMzXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    title: "Dangal",
    description: "A former wrestler trains his daughters to become competitive wrestlers while challenging social expectations in rural India.",
    year: 2016,
    poster: "https://m.media-amazon.com/images/M/MV5BMjQ4OTk1Mzc3MV5BMl5BanBnXkFtZWFwXkFuZHlpZ3g@._V1_SX300.jpg"
  },
  {
    title: "Zindagi Na Milegi Dobara",
    description: "Three friends take a road trip across Spain that forces them to confront fear, relationships and how they want to live.",
    year: 2011,
    poster: "https://m.media-amazon.com/images/M/MV5BODkxMTg5MzY3Nl5BMl5BanBnXkFtZWFwXkFuZHlpZ3g@._V1_SX300.jpg"
  },
  {
    title: "Taare Zameen Par",
    description: "A misunderstood child struggling with dyslexia finds confidence after a compassionate teacher recognizes his creativity.",
    year: 2007,
    poster: "https://m.media-amazon.com/images/M/MV5BMzg5Nzg4NTA3OF5BMl5BanBnXkFtZWFwXkFuZHlpZ3g@._V1_SX300.jpg"
  },
  {
    title: "Lagaan",
    description: "Villagers under colonial rule challenge British officers to a cricket match in hopes of escaping a crushing agricultural tax.",
    year: 2001,
    poster: "https://m.media-amazon.com/images/M/MV5BZDZkOTk5YzEtMTg5Yi00ZTA0LWE5MmQtNWE1YjAxNzA4MjRhXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    title: "Dilwale Dulhania Le Jayenge",
    description: "Two young Indians living abroad fall in love, but family tradition and an arranged marriage stand between them.",
    year: 1995,
    poster: "https://m.media-amazon.com/images/M/MV5BMjAxNTI0NzEyN15BMl5BanBnXkFtZWFwXkFuZHlpZ3g@._V1_SX300.jpg"
  },
  {
    title: "Gully Boy",
    description: "A young man from a poor Mumbai neighborhood uses hip-hop and street rap to pursue a life beyond poverty and social limitations.",
    year: 2019,
    poster: "https://m.media-amazon.com/images/M/MV5BNDQ0YzUyMzctNDQzOC00ZDMyLTkwZTAtMDgyY2ZhNDYxZmJlXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    title: "Queen",
    description: "After being abandoned before her wedding, a sheltered young woman travels alone on her planned honeymoon and discovers independence.",
    year: 2013,
    poster: "https://m.media-amazon.com/images/M/MV5BOTczMzYyYTUtZDg0OC00MTdjLWJmNjEtOTZmOTk0YzYzZDQ3XkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    title: "Bajrangi Bhaijaan",
    description: "A kind-hearted Indian man crosses borders and overcomes political obstacles to reunite a lost mute Pakistani girl with her family.",
    year: 2015,
    poster: "https://m.media-amazon.com/images/M/MV5BMjI0YjEyZjEtZDQyYi00Y2Y3LTkxMWUtMDM4ZDczODEwNGFlXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    title: "Andhadhun",
    description: "A pianist pretending to be blind becomes trapped in a dangerous web of murder, deception and unpredictable consequences.",
    year: 2018,
    poster: "https://m.media-amazon.com/images/M/MV5BMzI1NzEyYjAtMDIzMy00YWY2LTg0YjgtNzVlNTAwMTA0OGE0XkEyXkFqcGc@._V1_SX300.jpg"
  }
];
