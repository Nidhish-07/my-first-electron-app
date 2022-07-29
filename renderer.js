const information = document.getElementById("info");

const func = async () => {
  const response = await window.versions.ping();
  console.log(response);
  information.innerText = `The version of Chrome v${versions.chrome()} and ${response}`;
};

func();
