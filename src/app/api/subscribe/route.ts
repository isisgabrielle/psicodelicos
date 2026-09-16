import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const telefone = formData.get("telefone") as string;
    const cpf = formData.get("cpf") as string;
    const nascimento = formData.get("nascimento") as string;
    const matricula = formData.get("matricula") as string;
    const periodo = formData.get("periodo") as string;
    const file = formData.get("comprovante") as File;

    if (!name || !email || !telefone || !cpf || !nascimento || !matricula || !periodo || !file) {
      return NextResponse.json({ error: "Campos obrigatórios faltando." }, { status: 400 });
    }

    // Converte o arquivo (File) para Buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const smtpEmail = process.env.SMTP_EMAIL;
    const smtpPassword = process.env.SMTP_PASSWORD;
    const receiverEmail = process.env.RECEIVER_EMAIL || "isisgabriellemenezes@gmail.com";

    if (smtpEmail && smtpPassword) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: smtpEmail,
          pass: smtpPassword,
        },
      });

      const mailOptions = {
        from: `"Atlética Psicodélicos" <${smtpEmail}>`,
        to: receiverEmail,
        subject: `Nova Inscrição - ${name}`,
        html: `
          <h2>Nova Solicitação de Adesão/Inscrição</h2>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>E-mail:</strong> ${email}</p>
          <p><strong>Telefone/WhatsApp:</strong> ${telefone}</p>
          <p><strong>CPF:</strong> ${cpf}</p>
          <p><strong>Data de Nascimento:</strong> ${nascimento}</p>
          <p><strong>Matrícula:</strong> ${matricula}</p>
          <p><strong>Período:</strong> ${periodo}</p>
          <p><strong>Curso:</strong> Psicologia</p>
          <hr />
          <p>O comprovante de pagamento está anexado a este e-mail.</p>
        `,
        attachments: [
          {
            filename: file.name,
            content: buffer,
            contentType: file.type,
          },
        ],
      };

      await transporter.sendMail(mailOptions);
      console.log(`✅ E-mail de inscrição enviado com sucesso para ${receiverEmail}`);
    } else {
      console.log("⚠️ SIMULAÇÃO DE ENVIO: Para enviar e-mails reais, crie o arquivo .env.local com SMTP_EMAIL e SMTP_PASSWORD.");
      console.log("Dados recebidos da inscrição:", { name, email, telefone, cpf, nascimento, matricula, periodo, filename: file.name, destino: receiverEmail });
    }

    return NextResponse.json({ message: "Inscrição processada com sucesso." }, { status: 200 });

  } catch (error) {
    console.error("Erro no processamento da inscrição:", error);
    return NextResponse.json({ error: "Erro interno no servidor ao processar inscrição." }, { status: 500 });
  }
}

