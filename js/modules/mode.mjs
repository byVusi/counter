const light = "#fefefe";
const dark = "#222";

export function mode() {
  let time = new Date();
  let hour = time.getHours();

  if (hour >= 6 && hour < 18) {

    //Light mode
    document.body.style.backgroundColor = light;
    document.body.style.color = dark;
  }
  else {
    
    //Dark mode
    document.body.style.backgroundColor = dark;
    document.body.style.color = light;
  }
}