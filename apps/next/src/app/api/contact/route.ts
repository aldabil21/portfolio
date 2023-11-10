import { Email } from '../../../email';
import { getTranslation } from '../../../i18n';

type Body = {
  name: string;
  email: string;
  message: string;
  lang: Languages;
};

export async function POST(request: Request) {
  const body = (await request.json()) as Body;
  const { t } = await getTranslation(body.lang);
  try {
    const email = new Email({
      from: body.email,
      subject: `Contact Form - ${body.name}`,
      html: `<p>Received message from ${body.name}:</p>
        <p>${body.message}</p>
      `,
    });
    await email.send();

    return Response.json({ success: true });
  } catch (error) {
    return Response.json(
      { success: false, message: t('contact.failed').toString() },
      { status: 400 }
    );
  }
}
