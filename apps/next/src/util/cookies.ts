/**
 * Create a cookie
 *
 * @param name
 * @param value
 * @param expiration Number of days
 */
export const createCookie = (name: string, value: string, expiration = 1) => {
  let expires = '';
  if (expiration > 0) {
    const days = new Date().getTime() + 60 * 60 * 24 * Number(expiration) * 1000;
    const expiresIn = new Date(days);
    expires = `; expires=${expiresIn}`;
  } else {
    expires = `; expires=${new Date(0)}`;
  }
  document.cookie = name + '=' + value + expires + '; path=/';
};

export const readCookie = (name: string) => {
  const nameEQ = name + '=';
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

export const eraseCookie = (name: string) => {
  createCookie(name, '', 0);
};
