let ul = document.querySelector("ul");

got.houses.forEach((house) => {
  house.people.forEach((char) => {
    let li = document.createElement("li");

    let outerDiv = document.createElement("div");
    outerDiv.style.width = "90%";
    outerDiv.style.margin = "1rem auto";
    outerDiv.classList.add("flex", "flex-start");

    let innerDiv = document.createElement("div");
    innerDiv.style.border = "2px solid rgb(57, 148, 98)";
    innerDiv.style.borderRadius = "50%";
    innerDiv.style.width = "5rem";
    innerDiv.style.height = "5rem";
    innerDiv.style.overflow = "hidden";
    innerDiv.style.marginRight = "1.5rem";
    innerDiv.classList.add("flex", "flex-center");

    let img = document.createElement("img");
    img.src = char.image;
    img.classList.add("full-width");

    innerDiv.append(img);

    let character = document.createElement("cite");
    character.innerText = char.name;
    character.style.display = "inline-block";
    character.style.fontSize = "1.6rem";

    outerDiv.append(innerDiv, character);

    let description = document.createElement("p");
    description.innerText = char.description;
    description.style.fontSize = "1rem";

    let btn = document.createElement("a");
    btn.innerText = "Learn More!";
    btn.href = char.wikiLink;
    btn.classList.add("btn", "btn-primary");

    li.append(outerDiv, description, btn);

    li.classList.add("card", "padding", "flex-30", "flex", "flex-column");
    ul.append(li);
  });
});