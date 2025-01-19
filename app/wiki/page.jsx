import { permanentRedirect } from "next/navigation";

export default function Wiki() {
  permanentRedirect(
    "https://wiki.solidarmobil.de",
    "replace",
  );
}
