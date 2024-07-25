import Link from "next/link";
import { FaBars } from "react-icons/fa";

export default function NavbarItems({ className, tabIndex }) {
  return (
    <ul tabIndex={tabIndex} className={className}>
      <li>
        <a>Über uns</a>
      </li>
      <li>
        <a>HowTo</a>
      </li>
      <li>
        <details>
          <summary>Aktuelles</summary>
          <ul className="p-2">
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a>Unterstützen</a>
      </li>
    </ul>
  );
}
