import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import RegistrationForm from "@/components/RegistrationForm";
import ThemeToggle from "@/components/ThemeToggle";
import { BookOpen, Trophy, PartyPopper, Users, ArrowRight, ExternalLink } from "lucide-react";
import { NEWS_POSTS } from "@/data/news";

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Header Brutalista */}
      <header className={styles.header}>
        <div className={`container ${styles.headerContainer}`}>
          <div className={styles.logo}>
            <Image src="/logo.png" alt="Logo" width={50} height={50} className={styles.logoImg} />
            <div className={styles.logoTextStack}>
              <span className={styles.logoTitle}>ATLÉTICA</span>
              <span className={styles.logoSubtitle}>PSICODÉLICOS</span>
            </div>
          </div>
          {/* Nav: links ficam escondidos no mobile, apenas aparecem em desktop */}
          <nav className={styles.nav}>
            <Link href="#sobre" className={styles.navLink}>SOBRE</Link>
            <Link href="#atividades" className={styles.navLink}>ATIVIDADES</Link>
            <Link href="#noticias" className={styles.navLink}>MURAL</Link>
            <Link href="/inscricao" className={styles.btnNavSolid}>ASSOCIE-SE</Link>
            <ThemeToggle />
          </nav>
          {/* Mobile: só o botão de inscrição e o toggle de tema */}
          <div className={styles.mobileActions}>
            <Link href="/inscricao" className={styles.btnNavSolid}>ASSOCIE-SE</Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackgroundPattern}></div>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent}>
            <h1 className="heading-1">
              CONHEÇA NOSSO<br />
              <span className={styles.heroHighlight}>PLANO CULTURAL.</span>
            </h1>
            <p className={styles.heroDescription}>
              Mais que esportes. Nós somos eventos, integração, cultura e a sua melhor experiência universitária. Conheça nossos clubes e junte-se ao bando!
            </p>
            <div className={styles.heroActions}>
              <Link href="/inscricao" className={styles.btnPrimaryBlock}>
                FAÇA SUA INSCRIÇÃO
                <ArrowRight size={24} strokeWidth={3} />
              </Link>
              <Link href="#sobre" className={styles.btnSecondaryBlock}>
                CONHEÇA NOSSO PLANO CULTURAL
              </Link>
            </div>
          </div>
          <div className={styles.heroImageWrapper}>
            <Image
              src="/brasao.PNG"
              alt="Brasão Psicodélicos"
              width={600}
              height={600}
              className={styles.heroBrasao}
              priority
            />
            <div className={styles.heroDecorativeGraphic}></div>
          </div>
        </div>
      </section>

      {/* Sobre a Atlética */}
      <section id="sobre" className="section">
        <div className="container">
          <div className={styles.aboutBrutalGrid}>
            <div className={styles.aboutBrutalImage}>
              <div className={styles.aboutBrutalImageFrame}>
                <Image src="/lobo.png" alt="Lobo Psicodélicos" width={400} height={400} className={styles.aboutImg} />
              </div>
            </div>
            <div className={styles.aboutBrutalContent}>
              <div className={styles.sectionHeaderLeft}>
                <h2 className="heading-2">MUITO ALÉM<br /><span className="text-accent">DO ESPORTE</span></h2>
              </div>
              <div className={styles.aboutBrutalText}>
                <p>
                  A Atlética Psicodélicos tem como objetivo acolher, integrar e promover o bem-estar dos estudantes de Psicologia. Através de atividades esportivas, culturais e sociais, construímos uma verdadeira comunidade.
                </p>
                <p>
                  Seja no nosso <strong>Clube do Livro</strong>, nos treinos, ou nas nossas ações e festas, há sempre um espaço para você desenvolver novas habilidades e conhecer pessoas incríveis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Atividades e Clubes */}
      <section id="atividades" className={`section ${styles.activitiesSection}`}>
        <div className={styles.activitiesBackgroundPattern}></div>
        <div className="container">
          <div className={styles.sectionHeaderLeft}>
            <h2 className="heading-2">NOSSAS<br /> ATIVIDADES</h2>
            <p className={styles.activitiesSubtitle}>Descubra as diversas formas de se envolver com a Atlética.</p>
          </div>

          <div className={styles.activitiesBrutalList}>
            <div className={styles.activityBrutalItem}>
              <div className={styles.activityBrutalIconBox}>
                <Image src="/simbolocarinhafeliz.png" alt="Logo" width={60} height={60} />
              </div>
              <div className={styles.activityBrutalInfo}>
                <h3 className={styles.activityBrutalTitle}>CLUBE DO LIVRO</h3>
                <p>Encontros mensais para debater obras fundamentais da psicologia, literatura e temas transversais à sociedade.</p>
              </div>
            </div>

            <div className={styles.activityBrutalItem}>
              <div className={styles.activityBrutalIconBox}>
                <Image src="/carinhaverde.PNG" alt="Logo" width={60} height={60} />
              </div>
              <div className={styles.activityBrutalInfo}>
                <h3 className={styles.activityBrutalTitle}>ESPORTES & TREINOS</h3>
                <p>Treinos regulares para diversas modalidades. Venha suar a camisa com a camisa da Psicodélicos.</p>
              </div>
            </div>

            <div className={styles.activityBrutalItem}>
              <div className={styles.activityBrutalIconBox}>
                <Image src="/espiralroxa.png" alt="Logo" width={60} height={60} />
              </div>
              <div className={styles.activityBrutalInfo}>
                <h3 className={styles.activityBrutalTitle}>EVENTOS & AÇÕES</h3>
                <p>Das calouradas aos simpósios, organizamos eventos que marcam sua jornada na universidade.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Últimas Notícias e Instagram */}
      <section id="noticias" className={`section ${styles.newsSection}`}>
        <div className="container">
          <div className={styles.newsBrutalHeader}>
            <div>
              <h2 className="heading-2">MURAL<br />PSICODÉLICO</h2>
              <p>Fique por dentro das novidades, encontros e comunicados da Atlética.</p>
            </div>
            <a
              href="https://www.instagram.com/atlpsicodelicos/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.instagramLinkSubtitle}
            >
              <InstagramIcon size={24} /> <span>@atlpsicodelicos</span>
            </a>
          </div>

          <div className={styles.newsBrutalGrid}>
            {NEWS_POSTS.map((post) => (
              <div key={post.id} className={styles.newsBrutalCard}>
                <div className={styles.newsBrutalTop}>
                  <span className={styles.newsBrutalBadge}>
                    {post.badgeEmoji} {post.category}
                  </span>
                  <span className={styles.newsBrutalDate}>{post.date}</span>
                </div>
                <div className={styles.newsBrutalContentBox}>
                  <h3 className={styles.newsBrutalTitle}>{post.title}</h3>
                  <p className={styles.newsBrutalDescription}>{post.description}</p>
                </div>
                <a
                  href={post.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.newsBrutalBtnInstagram}
                >
                  VER NO INSTAGRAM <ExternalLink size={16} strokeWidth={3} />
                </a>
              </div>
            ))}
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
