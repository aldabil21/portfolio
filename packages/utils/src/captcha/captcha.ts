export type RecaptchaActionTypes =
  | 'purchase'
  | 'login'
  | 'signup'
  | 'resend_otp'
  | 'contact'
  | 'resetpassword'
  | 'checkout'
  | 'review'
  | 'unspecific';

export const generateRecaptchaToken = async (
  action: RecaptchaActionTypes = 'unspecific'
): Promise<string> => {
  return new Promise((resolve, reject) => {
    try {
      grecaptcha.ready(() =>
        grecaptcha.execute(process.env.NEXT_PUBLIC_CAPTCHA_KEY || '', { action }).then((token) => {
          resolve(token);
        })
      );
    } catch (err) {
      reject(err);
    }
  });
};
