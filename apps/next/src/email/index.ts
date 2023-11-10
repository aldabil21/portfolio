import nodemailer from 'nodemailer';
import type SMTPTransport from 'nodemailer/lib/smtp-transport';

interface EmailProps {
  from: string;
  subject: string;
  html: string;
}

export class Email {
  private from: string;
  private subject: string;
  private html: string;
  private static transporter: nodemailer.Transporter<SMTPTransport.SentMessageInfo> | undefined;

  constructor({ from, subject, html }: EmailProps) {
    this.from = from;
    this.subject = subject;
    this.html = html;
  }

  static createTransport() {
    if (!this.transporter) {
      // Setup transporter
      const options: SMTPTransport.Options = {
        host: process.env.EMAIL_HOST,
        port: Number(process.env.EMAIL_PORT),
        requireTLS: true,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      };
      this.transporter = nodemailer.createTransport(options);
    }

    return this.transporter;
  }

  async send() {
    // Send Email
    const transporter = Email.createTransport();
    return transporter.sendMail({
      from: process.env.EMAIL_TO,
      to: process.env.EMAIL_TO,
      replyTo: this.from,
      subject: this.subject,
      html: this.html,
    });
  }
}
