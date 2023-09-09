'use client';
import { useForm } from 'react-hook-form';
import { useTranslation } from '../../i18n/client';
import Button from '../button';
import Input from '../inputs/input';
import TextArea from '../inputs/textarea';

type Props = {
  lang: Languages;
};

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact = ({ lang }: Props) => {
  const { t } = useTranslation(lang);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const handleSend = async (data: FormData) => {
    try {
      const res = await fetch('http://localhost:3000/contact', {
        method: 'POST',
        body: JSON.stringify(data),
      });
      const response = (await res.json()) as { time: string };
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className='container space-y-4 px-4 py-12'>
      <h2 className='text-center text-3xl'>{t('contact.title')}</h2>

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

        <div className='mx-auto w-full py-6'>
          <Button className='w-full' type='submit'>
            Test
          </Button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
