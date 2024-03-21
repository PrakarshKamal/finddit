import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', // Your SMTP host
      port: 465, // Your SMTP port
      secure: true, // true for 465, false for other ports
      auth: {
        user: 'findditpro@gmail.com', // Your email address
        pass: 'wrri mnrf sudk avuw', // Your email password or application password if using services like Gmail
      },
    });
  }

  async sendEmail(to: string, subject: string, text: string) {
    try {
      const info = await this.transporter.sendMail({
        from: 'findditpro@gmail.com', // Sender address
        to, // List of recipients
        subject, // Subject line
        text, // Plain text body
      });
      console.log('Message sent: %s', info.messageId);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }
}
