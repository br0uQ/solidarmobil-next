import Link from "next/link";

export default function NavbarItems({ className, tabIndex }) {
  return (
    <ul tabIndex={tabIndex} className={className}>
      <li>
        <Link href="/ueber_uns">Über uns</Link>
      </li>
      <li>
        <Link href="">HowTo</Link>
      </li>
      <li>
        <details>
          <summary>Aktuelles</summary>
          <ul className="p-2">
            <li>
              <Link href="">Submenu 1</Link>
            </li>
            <li>
              <Link href="">Submenu 2</Link>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <Link href="">Unterstützen</Link>
      </li>
    </ul>
  );
}
