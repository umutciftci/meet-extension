try {
  var partList = [];
  var listItems = document.querySelectorAll(
    '[role="listitem"] > div > div > div > span'
  );
  for (let i = 0; i < listItems.length; i++) {
    if (
      listItems[i].innerText != "" &&
      listItems[i].innerText != "(You)" &&
      listItems[i].innerText != "(Sen)"
    ) {
      partList.push(listItems[i].innerText);
    }
  }
  function copyToClipboard(text) {
    const input = document.createElement("input");
    input.style.position = "fixed";
    input.style.opacity = 0;
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand("Copy");
    document.body.removeChild(input);
  }

  partList.push("KATILIMCI SAYISI: ", partList.length);
  partList.push("DATA ÇEKİM TARİHİ: ", new Date());
  copyToClipboard(JSON.stringify(partList));

  console.log(partList);
  console.log("KATILIMCI SAYISI: ", partList.length);
  console.log("DATA ÇEKİM TARİHİ: ", new Date());
} catch (error) {
  console.log(error)
  alert("Couldnt get the participant list")
}
