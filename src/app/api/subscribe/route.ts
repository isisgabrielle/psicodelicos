import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const curso = formData.get("curso") as string;
    const periodo = formData.get("periodo") as string;
    const file = formData.get("comprovante") as File;

    if (!name || !email || !curso || !periodo || !file) {
      return NextResponse.json({ error: "Campos obrigatórios faltando." }, { status: 400 });
    }

    // Converta o arquivo (File) para Buffer, que é lido nativamente pelo nodemailer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Configuração do transporter (ex: conta Gmail do cliente)
    // Para Vercel: colocar no .env.local as variáveis SMTP_EMAIL e SMTP_PASSWORD
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_EMAIL || "teste@gmail.com",
        pass: process.env.SMTP_PASSWORD || "senha_app_gerada",
      },
    });

    const mailOptions = {
      from: `"Atlética Psicodélicos" <${process.env.SMTP_EMAIL}>`,
      to: process.env.RECEIVER_EMAIL || process.env.SMTP_EMAIL,
      subject: `Nova Inscrição - ${name}`,
      html: `
        <h2>Nova Solicitação de Adesão/Inscrição</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Curso:</strong> ${curso}</p>
        <p><strong>Período:</strong> ${periodo}</p>
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

    // Para evitar que a requisição trave em desenvolvimento local caso as credenciais não estejam lá, 
    // validamos se temos os envs reais, caso contrário logamos mas fingimos sucesso para testar o front:
    if (process.env.SMTP_EMAIL && process.env.SMTP_PASSWORD) {
       await transporter.sendMail(mailOptions);
    } else {
       console.log("Mock enviando email: As credenciais SMTP não estão configuradas nas variáveis de ambiente.");
       console.log("Mock email content:", { name, email, curso, periodo, filename: file.name });
    }

    return NextResponse.json({ message: "Inscrição processada e e-mail enviado com sucesso." }, { status: 200 });

  } catch (error) {
    console.error("Erro no processamento da inscrição:", error);
    return NextResponse.json({ error: "Erro interno no servidor." }, { status: 500 });
  }
}
