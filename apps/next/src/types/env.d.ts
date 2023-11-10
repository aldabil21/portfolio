declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_ENV: 'development' | 'testing' | 'staging' | 'production';
    NEXT_PUBLIC_BASE_URL?: string;

    // Email
    EMAIL_HOST: string;
    EMAIL_PORT: string;
    EMAIL_USER: string;
    EMAIL_PASSWORD: string;
    EMAIL_TO: string;
  }
}
