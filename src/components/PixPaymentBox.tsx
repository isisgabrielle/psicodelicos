"use client";

import { useState } from "react";
import { Copy, Check, QrCode } from "lucide-react";
import styles from "./PixPaymentBox.module.css";

interface PixPaymentBoxProps {
  pixKey?: string;
  amount?: string;
}

export default function PixPaymentBox({
  pixKey = "atlpsicodelicos@gmail.com",
  amount = "R$ 35,00",
}: PixPaymentBoxProps) {
  const [copied, setCopied] = useState(false);
  const [showQrCode, setShowQrCode] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // QR Code gerado dinamicamente via serviço público de SVG/PNG de QR Code baseado no texto da chave
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(
    pixKey
  )}&margin=10`;

  return (
    <div className={styles.pixContainer}>
      <div className={styles.pixBadge}>Pagamento da Mensalidade</div>
      <div className={styles.priceHighlight}>
        <span className={styles.priceLabel}>Valor da mensalidade:</span>
        <span className={styles.priceValue}>{amount}</span>
      </div>

      <div className={styles.pixKeyWrapper}>
        <div className={styles.pixKeyInfo}>
          <span className={styles.keyLabel}>Chave PIX (E-mail):</span>
          <code className={styles.keyCode}>{pixKey}</code>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className={`${styles.copyButton} ${copied ? styles.copied : ""}`}
          title="Copiar Chave PIX"
        >
          {copied ? (
            <>
              <Check size={18} /> Copiado!
            </>
          ) : (
            <>
              <Copy size={18} /> Copiar Chave
            </>
          )}
        </button>
      </div>

      <button
        type="button"
        onClick={() => setShowQrCode(!showQrCode)}
        className={styles.qrToggle}
      >
        <QrCode size={18} />
        {showQrCode ? "Ocultar QR Code PIX" : "Visualizar QR Code PIX"}
      </button>

      {showQrCode && (
        <div className={styles.qrWrapper}>
          <img
            src={qrCodeUrl}
            alt="QR Code PIX Psicodélicos"
            className={styles.qrImage}
            width={180}
            height={180}
          />
          <p className={styles.qrHint}>Escaneie o código no app do seu banco</p>
        </div>
      )}

      <p className={styles.pixNotice}>
        Após a transferência, anexe o comprovante logo abaixo para validarmos sua inscrição!
      </p>
    </div>
  );
}
