"use client";

import { useState } from "react";
import styles from "./RegistrationForm.module.css";

export default function RegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [fileName, setFileName] = useState<string | null>(null);

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
      <div className={styles.formGroup}>
        <label htmlFor="name">Nome Completo</label>
        <input type="text" id="name" name="name" required placeholder="Digite seu nome completo" />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" name="email" required placeholder="seu.email@exemplo.com" />
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="curso">Curso</label>
          <input type="text" id="curso" name="curso" required defaultValue="Psicologia" />
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
