import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { datenschutz } from "@/content/legal";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Zahnarzt Olschewski",
};

export default function Page() {
  return <LegalPage title="Datenschutzerklärung" sections={datenschutz} />;
}
