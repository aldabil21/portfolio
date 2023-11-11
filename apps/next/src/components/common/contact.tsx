'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from '../../i18n/client';
import Button from '../button';
import Input from '../inputs/input';
import TextArea from '../inputs/textarea';
import { EMAIL_PATTERN } from 'utils/constants';
import { AnimatedCheck } from 'ui/svgs';
import { Fade } from 'ui/animations';

type Props = {
  lang: Languages;
};

type FormData = {
  name: string;
  email: string;
  message: string;
  lang: Languages;
};

const Contact = ({ lang }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const { t } = useTranslation(lang);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      lang,
    },
  });

  const handleSend = async (data: FormData) => {
    try {
      setIsLoading(true);
      setError('');
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(data),
        cache: 'no-store',
      });

      const json = (await res.json()) as Record<string, string> | undefined;
      if (!res.ok) {
        throw new Error(json?.message || t('common:errors.unexpected_error'));
      }

      setSuccess(true);
    } catch (err) {
      setError((err as Error).message || t('common:errors.unexpected_error'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className='container space-y-4 px-4 py-20'>
      <h2 className='text-center text-3xl'>{t('contact.title')}</h2>

      {success ? (
        <div className='text-center'>
          <AnimatedCheck className='text-secondary mx-auto h-40 w-40' />
          <Fade as='p' className='text-lg' delay={0.5}>
            {t('contact.success')}
          </Fade>
        </div>
      ) : (
        <form className='mx-auto max-w-md' onSubmit={handleSubmit(handleSend)}>
          <div>
            <Input
              error={errors.name?.message}
              label={t('contact.name')}
              placeholder={t('contact.name')}
              {...register('name', {
                required: { value: true, message: t('validation.required') },
              })}
            />
          </div>

          <div>
            <Input
              error={errors.email?.message}
              label={t('contact.email')}
              placeholder={t('contact.email')}
              {...register('email', {
                required: { value: true, message: t('validation.required') },
                pattern: {
                  value: EMAIL_PATTERN,
                  message: t('common:validation.invalid_email'),
                },
              })}
            />
          </div>

          <div>
            <TextArea
              error={errors.message?.message}
              label={t('contact.message')}
              placeholder={t('contact.message')}
              {...register('message', {
                required: { value: true, message: t('validation.required') },
              })}
              className='max-h-[180px] min-h-[120px]'
            />
          </div>

          {error ? (
            <p className='text-center text-red-500' role='alert'>
              {error}
            </p>
          ) : null}
          <div className='mx-auto w-full py-6'>
            <Button className='w-full py-3 text-xl' loading={isLoading} type='submit'>
              {t('contact.send')}
            </Button>
          </div>
        </form>
      )}
    </section>
  );
};

export default Contact;
