import Link from "next/link";
import Image from "next/image";
import RegistrationForm from "@/components/RegistrationForm";
import ThemeToggle from "@/components/ThemeToggle";
import { ArrowLeft } from "lucide-react";
import styles from "./page.module.css";

export const metadata = {
  title: "Inscrição | Atlética Psicodélicos",
  description: "Formulário de adesão e inscrição da Atlética Psicodélicos.",
};

export default function InscricaoPage() {
  return (
    <main className={styles.splitPageWrapper}>
      {/* Lado Esquerdo - Branding / Benefícios */}
      <div className={styles.splitLeft}>
        <div className={styles.splitLeftContent}>
          <Link href="/" className={styles.backLink}>
            <ArrowLeft size={24} strokeWidth={3} />
            VOLTAR
          </Link>

          <div className={styles.brandingHeader}>
            <Image src="/logo.png" alt="Logo" width={80} height={80} className={styles.logoImgBrutal} />
            <h1 className={styles.splitTitle}>
              SEJA UM<br />ASSOCIADO<br />DA <span className="text-accent-alt">ATLÉTICA</span>
            </h1>
          </div>

          <div className={styles.benefitsBox}>
            <p className={styles.benefitsIntro}>
              Faça parte da nossa comunidade e viva experiências pensadas especialmente para os estudantes de Psicologia da UNIT.
            </p>
            <div className={styles.priceTag}>
              APENAS <strong>R$ 35,00</strong> / MÊS
            </div>
          </div>
        </div>
      </div>

      {/* Lado Direito - Formulário */}
      <div className={styles.splitRight}>
        <div className={styles.splitRightHeader}>
          <h2 className="heading-3">PREENCHA SEUS DADOS</h2>
          <ThemeToggle />
        </div>
        <div className={styles.formContainerBrutal}>
          <RegistrationForm />
        </div>
      </div>
    </main>
  );
}
