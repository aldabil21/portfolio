declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_ENV: 'development' | 'testing' | 'staging' | 'production';
    NEXT_PUBLIC_BASE_URL?: string;
  }
}
