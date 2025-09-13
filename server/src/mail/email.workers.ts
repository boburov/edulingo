import { Worker } from 'bullmq';
import nodemailer from 'nodemailer';

const connection = { host: '127.0.0.1', port: 6379 };

// Gmail transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'boburovshukurullo@gmail.com',
    pass: 'sbhzpnzxdfvvympv', // app password
  },
});

export const emailWorker = new Worker(
  'email',
  async job => {
    if (job.name === 'send-verification') {
      const { email, link } = job.data;

      const html = `
        <h2>7EDU Learning Center</h2>
        <p>Hisobingizni tasdiqlash uchun bosing:</p>
        <a href="${link}">✅ Tasdiqlash</a>
      `;

      await transporter.sendMail({
        from: `"EDULINGO" <boburovshukurullo@gmail.com>`,
        to: email,
        subject: 'Hisobni tasdiqlash',
        html,
      });

      console.log(`✅ Email yuborildi: ${email}`);
    }
  },
  { connection }
);
