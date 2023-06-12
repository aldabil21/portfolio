type Languages = 'en' | 'ar';

type NextLayout<T = object> = (props: NextLayoutProps & NextPageProps & T) => ReactElement | null;
type NextPage<T = object> = (props: NextPageProps & T) => ReactElement | null;
type NextError<T = object> = (props: NextErrorProps & T) => ReactElement | null;
type NextLayoutProps = {
  children: ReactElement | null;
};
type NextPageProps = {
  params: {
    lang: Languages;
  };
  searchParams?: { [key: string]: string | string[] };
};
type NextErrorProps = {
  error: Error;
  reset: () => void;
};
/**
 * Minified Image Type
 */
interface PlaceholderImageData {
  height: number;
  width: number;
  type?: string;
  src: string;
  base64: string;
}

/**
 * Paginated response
 */
interface Paginated<T> {
  current_page: number;
  from: number;
  last_page: number;
  path: '/';
  per_page: number;
  to: number;
  total: number;
  data: T;
}

/**
 * Window
 */
interface Window {
  dataLayer: unknown[];
}
