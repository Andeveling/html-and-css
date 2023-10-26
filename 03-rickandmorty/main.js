  const fetchCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character")
    const characters = await response.json()
    return characters.results
  }

  const renderCharacters = (characters) => {
    const ul = document.createElement("ul")
    for (const character of characters) {
      const li = document.createElement("li")
      const p = document.createElement("p")
      const characterName = character.name
      const characterImage = document.createElement("img")

      characterImage.src = character.image
      characterImage.width = 200
      characterImage.height = 200
      p.textContent = characterName

      li.appendChild(characterImage)
      li.appendChild(p)
      ul.appendChild(li)
    }
    document.body.appendChild(ul)
  }

  fetchCharacters().then(renderCharacters)
