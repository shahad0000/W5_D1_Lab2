let img = document.getElementById("img");

const coffeeImg = async () => {
  try {
    let res = await fetch('https://coffee.alexflipnote.dev/random.json');
    let data = await res.json();
    img.src = data.file;
  } catch (err) {
    console.log(err);
  }
};

coffeeImg();
