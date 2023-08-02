import INSTAGRAM from "./assets/instagram.svg";
import facebook from "./assets/facebook.svg";
import telegram from "./assets/telegram.svg";
import whatsapp from "./assets/whatsapp.svg";


function Footer(props) {
  return (
    <>
    <footer className="text-center py-4 bg-light">
    <h2 className="lineUp">
      Toska en las redes ¡Seguinos!
    </h2>
    <div>
    <ul>
        <a href="https://www.instagram.com/toskacerveza" className="btn btn-outline-light btn-floating m-1"> <img alt="INSTAGRAM" src={INSTAGRAM} ></img></a>
        <a href="https://facebook.com" className="btn btn-outline-light btn-floating m-1" ><img alt="FACEBOOK" src={facebook}></img></a>
        <a href="https://web.telegram.org" className="btn btn-outline-light btn-floating m-1" ><img alt="TELEGRAM" src={telegram}></img></a>
        <a href="https://api.whatsapp.com/send/?phone=543515633431&text=Hola Toska, tengo unas ganas de escabiar que tumba..." className="btn btn-outline-light btn-floating m-1"><img alt="whatsapp" src={whatsapp}></img></a>
    </ul>
    </div>
    <div className="text-center text-dark p-3">
      © 2022 / 2023 :
      <a className="text-dark" href="https://github.com/cirovich">cirovich.com</a>
    </div>
  </footer>
    </>
  );
}

export default Footer;