import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer bg-primary text-white p-5 text-base">
      <nav>
        <h6 className="footer-title">Kontakt</h6>
          <p className="flex">
            <FaEnvelope className="me-3" />
            <a className="link-info" href="mailto:{data.EMAIL_ADDR}">info@solidarmobil.de</a>
          </p>
      </nav>
      <nav>
        <h6 className="footer-title">Verein</h6>
        <Link href="/doc/Satzung.pdf" className="link link-hover">
          Satzung
        </Link>
        <Link
          href="/doc/Beitragsordnung_15_01_25.pdf"
          className="link link-hover"
        >
          Beitragsordnung
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">Rechtliches</h6>
        <Link href="/datenschutz" className="link link-hover">
          Datenschutzhinweise
        </Link>
        <Link href="/impressum" className="link link-hover">
          Impressum
        </Link>
      </nav>
    </footer>
  );
}
