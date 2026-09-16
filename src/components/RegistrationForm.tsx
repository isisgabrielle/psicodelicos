"use client";

import { useState } from "react";
import PixPaymentBox from "./PixPaymentBox";
import styles from "./RegistrationForm.module.css";

export default function RegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [fileName, setFileName] = useState<string | null>(null);

  // Formatações utilitárias
  const formatCPF = (value: string) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2")
      .slice(0, 14);
  };

  const formatPhone = (value: string) => {
    return value
      .replace(/\D/g, "")
      .replace(/^(\d{2})(\d)/g, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .slice(0, 15);
  };

  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Falha ao enviar formulário");

      setSubmitStatus("success");
      (e.target as HTMLFormElement).reset();
      setFileName(null);
      setCpf("");
      setPhone("");
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName(null);
    }
  };

  if (submitStatus === "success") {
    return (
      <div className={styles.successMessage}>
        <div className={styles.successIcon}>✓</div>
        <h3>Inscrição Recebida!</h3>
        <p>Seus dados e o comprovante foram enviados com sucesso para a nossa equipe.</p>
        <button 
          className={styles.btnReset}
          onClick={() => setSubmitStatus("idle")}
        >
          Fazer nova inscrição
        </button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {/* Nome Completo */}
      <div className={styles.formGroup}>
        <label htmlFor="name">Nome Completo</label>
        <input type="text" id="name" name="name" required placeholder="Digite seu nome completo" />
      </div>

      {/* E-mail e Telefone */}
      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="email" required placeholder="seu.email@exemplo.com" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="telefone">Número de Telefone / WhatsApp</label>
          <input 
            type="tel" 
            id="telefone" 
            name="telefone" 
            required 
            placeholder="(00) 00000-0000"
            value={phone}
            onChange={(e) => setPhone(formatPhone(e.target.value))}
          />
        </div>
      </div>

      {/* CPF e Data de Nascimento */}
      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="cpf">CPF</label>
          <input 
            type="text" 
            id="cpf" 
            name="cpf" 
            required 
            placeholder="000.000.000-00"
            value={cpf}
            onChange={(e) => setCpf(formatCPF(e.target.value))}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="nascimento">Data de Nascimento</label>
          <input type="date" id="nascimento" name="nascimento" required />
        </div>
      </div>

      {/* Matrícula e Período */}
      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="matricula">Matrícula Acadêmica</label>
          <input type="text" id="matricula" name="matricula" required placeholder="Ex: 2024101234" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="periodo">Período</label>
          <select id="periodo" name="periodo" required>
            <option value="">Selecione...</option>
            <option value="1">1º Período</option>
            <option value="2">2º Período</option>
            <option value="3">3º Período</option>
            <option value="4">4º Período</option>
            <option value="5">5º Período</option>
            <option value="6">6º Período</option>
            <option value="7">7º Período</option>
            <option value="8">8º Período</option>
            <option value="9">9º Período</option>
            <option value="10">10º Período</option>
            <option value="Outro">Outro</option>
          </select>
        </div>
      </div>

      {/* Pagamento PIX */}
      <PixPaymentBox pixKey="atlpsicodelicos@gmail.com" amount="R$ 35,00" />

      {/* Comprovante */}
      <div className={styles.formGroup}>
        <label>Comprovante de Pagamento (Imagem ou PDF)</label>
        <div className={styles.fileUploadWrapper}>
          <input 
            type="file" 
            id="comprovante" 
            name="comprovante" 
            accept="image/*,.pdf" 
            required 
            className={styles.fileInput}
            onChange={handleFileChange}
          />
          <div className={styles.fileCustom}>
            <span className={styles.fileIcon}>📄</span>
            <span className={styles.fileText}>
              {fileName ? fileName : "Clique ou arraste o comprovante aqui"}
            </span>
          </div>
        </div>
      </div>

      {/* Termos e Condições */}
      <div className={styles.checkboxGroup}>
        <label className={styles.checkboxLabel}>
          <input type="checkbox" id="termos" name="termos" required className={styles.checkboxInput} />
          <span>
            Declaro que sou estudante de <strong>Psicologia</strong> e concordo com os termos e o estatuto da Atlética Psicodélicos.
          </span>
        </label>
      </div>

      {submitStatus === "error" && (
        <div className={styles.errorMessage}>
          Ocorreu um erro ao enviar. Tente novamente mais tarde.
        </div>
      )}

      <button 
        type="submit" 
        className={styles.submitButton}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Enviando..." : "Confirmar Inscrição"}
      </button>
    </form>
  );
}
