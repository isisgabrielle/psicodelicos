import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import RegistrationForm from "@/components/RegistrationForm";
import ThemeToggle from "@/components/ThemeToggle";
import { BookOpen, Trophy, PartyPopper, Users, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Header */}
      <header className={`${styles.header} card`}>
        <div className={`container ${styles.headerContainer}`}>
          <div className={styles.logo}>
            <Image src="/logo.png" alt="Logo" width={50} height={50} className={styles.logoImg} />
          </div>
          <nav className={styles.nav}>
            <Link href="#sobre">Sobre Nós</Link>
            <Link href="#atividades">Atividades</Link>
            <Link href="#patrocinadores">Parceiros</Link>
            <Link href="#inscricao" className={styles.btnNav}>Inscreva-se</Link>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent}>
            <h1 className="heading-1">
              A Associação Atlética Acadêmica <br />
              <span className="text-accent">de Psicologia</span>
            </h1>
            <p className={styles.heroDescription}>
              Integrando os estudantes através do esporte, eventos sociais e iniciativas acadêmicas. Conheça nossos clubes, participe e faça parte da nossa história.
            </p>
            <div className={styles.heroActions}>
              <Link href="#inscricao" className={styles.btnPrimary}>
                Faça sua Inscrição
                <ArrowRight size={20} />
              </Link>
              <Link href="#sobre" className={styles.btnSecondary}>
                Saiba Mais
              </Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            <Image src="/brasao.PNG" alt="Brasão Psicodélicos" width={500} height={500} className={styles.heroImg} style={{ objectFit: 'contain', boxShadow: 'none' }} />
          </div>
        </div>
      </section>

      {/* Sobre a Atlética */}
      <section id="sobre" className="section">
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutImageWrapper}>
              <Image src="/lobo.png" alt="Lobo Psicodélicos" width={350} height={350} className={styles.aboutImg} />
            </div>
            <div className={styles.aboutText}>
              <h2 className="heading-2">Muito além do esporte</h2>
              <p>
                A Atlética Psicodélicos tem como objetivo acolher, integrar e promover o bem-estar dos estudantes de Psicologia. Através de atividades esportivas, culturais e sociais, construímos uma verdadeira comunidade.
              </p>
              <p>
                Seja no nosso <strong>Clube do Livro</strong>, nos treinos, ou nas nossas ações e festas, há sempre um espaço para você desenvolver novas habilidades e conhecer pessoas incríveis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Atividades e Clubes */}
      <section id="atividades" className={`section ${styles.activitiesSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className="heading-2">Nossas Atividades</h2>
            <p>Descubra as diversas formas de se envolver com a Atlética.</p>
          </div>
          <div className={styles.activitiesGrid}>
            <div className={`${styles.activityCard} card`}>
              <div className={styles.activityIcon}>
                <Image src="/simbolocarinhafeliz.png" alt="Logo" width={50} height={50} className={styles.logoImg} />
              </div>
              <h3>Clube do Livro</h3>
              <p>Encontros mensais para debater obras fundamentais da psicologia, literatura e temas transversais à sociedade.</p>
            </div>
            <div className={`${styles.activityCard} card`}>
              <div className={styles.activityIcon}>
                <Image src="/carinhaverde.png" alt="Logo" width={50} height={50} className={styles.logoImg} />
              </div>
              <h3>Esportes</h3>
              <p>Treinos regulares para diversas modalidades. Venha suar a camisa com a camisa da Psicodélicos.</p>
            </div>
            <div className={`${styles.activityCard} card`}>
              <div className={styles.activityIcon}>
                <Image src="/espiralroxa.png" alt="Logo" width={50} height={50} className={styles.logoImg} />
              </div>
              <h3>Eventos</h3>
              <p>Das calouradas aos simpósios, organizamos eventos que marcam sua jornada na universidade.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Inscrição */}
      <section id="inscricao" className="section">
        <div className="container">
          <div className={`${styles.registrationWrapper} card`}>
            <div className={styles.registrationText}>
              <h2 className="heading-2 text-accent">Junte-se a nós</h2>
              <p>
                Preencha o formulário para realizar sua adesão ou renovar sua inscrição na Atlética.
                Após o envio, os dados e o comprovante serão enviados diretamente para nossa equipe.
              </p>
            </div>
            <div className={styles.registrationFormArea}>
              <RegistrationForm />
            </div>
          </div>
        </div>
      </section>

      {/* Patrocinadores */}
      <section id="patrocinadores" className={`section ${styles.sponsorsSection}`}>
        <div className="container">
          <h3 className="heading-3" style={{ textAlign: "center", marginBottom: "2rem" }}>Apoiadores Oficiais</h3>
          <div className={styles.sponsorsGrid}>
            <div className={`${styles.sponsorCard} card`}>
              <span style={{ fontWeight: "bold", letterSpacing: "1px" }}>REDE <br /> MENTE DE ATLETA</span>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className="container">
          <p>© {new Date().getFullYear()} Atlética Psicodélicos. Todos os direitos reservados.</p>
        </div>
      </footer>
    </main>
  );
}
