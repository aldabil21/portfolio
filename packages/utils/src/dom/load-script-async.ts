type Props = {
  id: string;
  type?: 'script' | 'noscript' | 'link';
  target?: 'head' | 'body';
  /** Script url, if it's defined, `snippet` will be omited */
  url?: string;
  /** Snippet code without `<script>/<style>` tag, it will be used only if `url` is not defined */
  snippet?: string;
};

export const loadScriptAsync = async ({
  id,
  target = 'body',
  type = 'script',
  snippet,
  url,
}: Props) => {
  return new Promise((resolve, reject) => {
    const isExist = document.getElementById(id);
    if (isExist) {
      resolve(true);
    } else {
      let el: HTMLScriptElement | HTMLLinkElement | undefined;
      if (type !== 'link') {
        el = document.createElement(type) as HTMLScriptElement;
        el.type = 'text/javascript';
        if (url) {
          el.src = url;
        } else {
          el.innerHTML = snippet || '';
        }
      } else {
        el = document.createElement('link');
        el.rel = 'stylesheet';
        if (url) {
          el.href = url;
        } else {
          el.innerHTML = snippet || '';
        }
      }
      el.id = id;
      el.onload = resolve;
      el.onerror = reject;

      document[target].prepend(el);
    }
  });
};
