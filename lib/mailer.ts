import nodemailer from "nodemailer";

export const sendEmail = async ({ name, email, subject, message }: any) => {
  try {
    var transport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD_EMAIL,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL!,
      to: [process.env.EMAIL!, "nitishjha6519@gmail.com"],
      subject: "Enquiry for Parascap Ventures",
      html: `<!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <title>New Enquiry</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              color: #333;
              background: #f7f7f7;
              padding: 20px;
            }
            .container {
              max-width: 600px;
              margin: auto;
              background: #ffffff;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            }
            h2 {
              color: #007bff;
            }
            p {
              line-height: 1.6;
            }
            .label {
              font-weight: bold;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h2>New Enquiry Received</h2>
            <p><span class="label">Name:</span> ${name}</p>
            <p><span class="label">Email:</span> ${email}</p>
            <p><span class="label">Subject:</span> ${subject}</p>
            <p><span class="label">Message:</span></p>
            <p>${message}</p>
          </div>
        </body>
      </html>`,
    };

    const mailresponse = await transport.sendMail(mailOptions);
    return mailresponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
