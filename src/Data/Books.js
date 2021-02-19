const books = [
  {
    name: "The Fellowship of the Ring",
    about:
      "The Fellowship of the Ring is the first of three volumes of The Lord of the Rings by J.R.R. Tolkien. It is divided into two books, Book I and II. It was originally released on July 29, 1954 in the United Kingdom by Allen & Unwin.",
    image:
      "https://prodimage.images-bn.com/pimages/9780358380238_p0_v2_s550x406.jpg",
    shortDescription:
      "The first sets the stage for the adventure and follows Frodo Baggins as he flees from his home in the Shire to escape the minions of the Dark Lord Sauron. Sauron seeks the One Ring that will allow him to control the Bearers of the nineteen other Rings and control the three major races of Middle-earth: Elves, Men, and Dwarves. The One Ring has been inherited by Frodo",
    released: "29 July, 1954",
  },
  {
    name: "The Two Towers",
    about:
      "The Two Towers is the second volume of J.R.R. Tolkien's The Lord of the Rings trilogy. It is preceded by The Fellowship of the Ring and followed by The Return of the King.",
    image:
      "https://prodimage.images-bn.com/pimages/9780358380245_p0_v2_s550x406.jpg",
    shortDescription:
      "Hobbits Merry and Pippin escape from the Orcs who captured them when the orcs themselves are attacked by the Riders of Rohan. Merry and Pippin head into nearby Fangorn Forest where they encounter treelike giants called Ents. The forest generally keep to themselves, but are moved to oppose the menace posed to the trees by the wizard Saruman, who has been chopping down trees in the forest to fuel fires for his furnaces.",
    released: "Nov 11, 1954",
  },
  {
    name: "The Return of the King",
    about:
      "The Return of the King is the third and final volume of J.R.R. Tolkien's The Lord of the Rings, following The Fellowship of the Ring and The Two Towers.",
    image:
      "https://prodimage.images-bn.com/pimages/9780358380252_p0_v2_s550x406.jpg",
    shortDescription:
      "The story begins as Gandalf delivers news to Denethor, the steward of Gondor, that war is imminent. Gandalf brings Pippin with him, who enters the service of the steward. Aragorn, by his courage and leadership, proves himself a worthy ruler of men. He is destined to find a lost army of men now dead yet entrapped in a curse set forth long ago by their own disobedience, in the place known as the Paths of the Dead. ",
    released: "Oct 20, 1955",
  },
  {
    name: "The Hobbit",
    about:
      "The Hobbit is the first published novel by J.R.R. Tolkien set in Middle-earth. The book was first published on September 21, 1937 and is set in the years 2941 to 2942 of the Third Age before the events of The Lord of the Rings. Initially intended as a standalone story for children, it was later realigned more into the Middle-earth legendarium by 1951, when a revised edition was released.",
    image: "https://images.penguinrandomhouse.com/cover/9780345445605",
    shortDescription:
      "Bilbo Baggins, a hobbit, was smoking in his porch-way at Bag End one day, when Gandalf the Wizard visits him. After a lengthy discussion, during which Bilbo uses the phrase Good Morning several times, Bilbo finds himself flustered. He invites Gandalf to tea, and goes back inside his Hobbit-house with a final Good Morning.  Gandalf carves a secret mark on Bilbo's front door, which translated means Burglar wants a good job, plenty of excitement and reasonable reward.",
    released: "September 21, 1937",
  },
  {
    name: "The Silmarillion",
    about:
      "The Silmarillion is a collection of J.R.R. Tolkien's works that were edited and published posthumously by his son Christopher, with the assistance of fantasy fiction writer Guy Gavriel Kay. It is the primary source for Middle-earth's ancient history and the First Age, and for the downfall of the kingdom of Númenor.",
    image: "https://i.harperapps.com/hcanz/covers/9780261102736/x293.jpg",
    shortDescription:
      "The Silmarillion is a complex work that explores a wide array of themes inspired by many ancient, medieval, and modern sources, including the Finnish Kalevala, the Icelandic sagas, the Bible, Greek mythology, World War I, and Celtic myths. For instance, the name of the supreme being, Ilúvatar (Father of All) is clearly borrowed from Finnish mythology.",
    released: "September 15, 1977",
  },
  {
    name: "The Children of Húrin",
    about:
      "The Children of Húrin is the first of the Great Tales, begun by J.R.R. Tolkien in 1918 and published in 2007 (ISBN 0-618-89464-0), once more than thirty years-worth of his notes were compiled and edited by his son, Christopher.",
    image: "https://i.harperapps.com/hcanz/covers/9780008108328/y648.jpg",
    shortDescription:
      "There are tales of Middle-earth from times long before The Lord of the Rings, and the story told in this book is set in the great country that lay beyond the Grey Havens in the North: lands where Treebeard once walked, but which were drowned in the great cataclysm that ended the First Age of the World.",
    released: "April 17, 2007",
  },
  {
    name: "Unfinished Tales",
    about:
      "Unfinished Tales of Númenor and Middle-earth is a collection of stories and essays by J. R. R. Tolkien that were never completed during his lifetime, but were edited by his son Christopher Tolkien and published in 1980. Many of the tales within are retold in The Silmarillion, albeit in modified forms; the work also contains a summary of the events of The Lord of the Rings told from a less personal perspective.",
    image: "https://m.media-amazon.com/images/I/41qhyXgRnXL.jpg",
    shortDescription:
      "Unlike The Silmarillion, also published posthumously (in 1977), for which the narrative fragments were modified to connect into a consistent and coherent work, the Unfinished Tales are presented as Tolkien left them, with little more than names changed (the author having had a confusing habit of trying out different names for a character while writing a draft). Thus some of these are incomplete stories, while others are collections of information about Middle-earth. ",
    released: "1980",
  },
  {
    name: "Beren and Luthien",
    about:
      "The tale of Beren and Lúthien, told in several works by J. R. R. Tolkien, is the story of the love and adventures of the mortal Man Beren and the immortal Elf-maiden Lúthien. (Early versions of the story, published in the standalone book in 2017, described Beren as a Noldorin elf.) Tolkien wrote several versions of their story, the latest in The Silmarillion, and the tale is also mentioned in The Lord of the Rings. The story takes place during the First Age of Middle-earth, about 6,500 years before the events of The Lord of the Rings",
    image: "https://images-na.ssl-images-amazon.com/images/I/51qYRTV5qaL.jpg",
    shortDescription:
      "Beren was the last survivor of a group of Men in Dorthonion led by his father Barahir that had still resisted Morgoth, the Dark Enemy, after the Battle of Sudden Flame, in which Morgoth had conquered much of northern Middle-earth. After the defeat of his companions he fled from peril into the elvish realm Doriath. There he met Lúthien, as she was dancing and singing in a glade. Upon seeing her Beren fell in love, for she was the fairest of all elves.",
    released: "2017",
  },
];

export default books;
