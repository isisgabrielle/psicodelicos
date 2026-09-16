import Link from "next/link";
import { ArrowLeft, BookOpen, ShieldCheck, HeartHandshake } from "lucide-react";
import styles from "./page.module.css";

export const metadata = {
  title: "Estatuto e Termos | Atlética Psicodélicos",
  description: "Estatuto social e termos de associação da Atlética de Psicologia Psicodélicos.",
};

export default function EstatutoPage() {
  return (
    <main className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.header}>
          <Link href="/inscricao" className={styles.backLink}>
            <ArrowLeft size={18} /> Voltar para Inscrição
          </Link>
          <span className={styles.badge}>DOCUMENTO OFICIAL</span>
          <h1 className={styles.title}>Estatuto & Diretrizes</h1>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <ShieldCheck size={22} /> 1. Da Natureza e Finalidade
          </h2>
          <p className={styles.paragraph}>
            A <strong>Associação Atlética Acadêmica de Psicologia Psicodélicos</strong> é uma entidade representativa, autônoma e sem fins lucrativos, criada para promover a integração, o bem-estar, a prática desportiva e o desenvolvimento cultural e acadêmico dos discentes do curso de Psicologia.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <HeartHandshake size={22} /> 2. Dos Direitos dos Associados
          </h2>
          <ul className={styles.list}>
            <li>Participar de todos os treinos, eventos esportivos, festas e atividades culturais promovidas pela Atlética.</li>
            <li>Descontos exclusivos em produtos oficiais (camisas, tirantes, canecas e moletons).</li>
            <li>Acesso aos clubes de leitura, simpósios e projetos de extensão apoiados pela Atlética.</li>
            <li>Votar e ser votado para cargos diretivos conforme os editais eleitorais.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <BookOpen size={22} /> 3. Dos Deveres e Conduta
          </h2>
          <ul className={styles.list}>
            <li>Respeitar todos os membros da comunidade acadêmica, zelando pelos valores de diversidade, empatia e inclusão.</li>
            <li>Não tolerar nenhum tipo de discriminação, assédio ou preconceito.</li>
            <li>Zelar pelo bom uso e preservação dos materiais, espaços e patrimônio da Atlética.</li>
            <li>Estar regularmente matriculado no curso de Psicologia para usufruir da condição de associado atleta/membro ativo.</li>
          </ul>
        </div>

        <div className={styles.footerActions}>
          <Link href="/" className={styles.backLink}>
            Ir para Início
          </Link>
          <Link href="/inscricao" className={styles.btnAction}>
            Concluir Inscrição
          </Link>
        </div>
      </div>
    </main>
  );
}
