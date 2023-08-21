import instagram from "./../assets/instagram.svg";
import facebook from "./../assets/facebook.svg";
import telegram from "./../assets/telegram.svg";
import whatsapp from "./../assets/whatsapp.svg";

function Footer() {
  return (
    <footer className="text-center py-4 bg-light">
    <h2> Toska en las redes ¡Seguinos! </h2>
    <ul>
        <a href="https://www.instagram.com/toskacerveza" className="btn"> <img alt="INSTAGRAM" src={instagram}></img></a>
        <a href="https://facebook.com" className="btn"><img alt="FACEBOOK" src={facebook}></img></a>
        <a href="https://web.telegram.org" className="btn"><img alt="TELEGRAM" src={telegram}></img></a>
        <a href="https://api.whatsapp.com/send/?phone=543515633431&text=Hola Toska, tengo unas ganas de escabiar que tumba..." className="btn"><img alt="whatsapp" src={whatsapp}></img></a>
    </ul>
     © 2022 / 2023 : <a href="https://github.com/cirovich">cirovich.com</a>
  </footer>
  );
}

export default Footer;