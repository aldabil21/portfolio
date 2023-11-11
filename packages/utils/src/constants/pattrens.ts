export const EMAIL_PATTERN =
  /^(?<localPart>(?:[^<>()[\]\\.,;:\s@"]+(?<period>\.[^<>()[\]\\.,;:\s@"]+)*)@(?<domain>[^<>()[\]\\.,;:\s@"]+\.[^<>()[\]\\.,;:\s@"]{2,}))$/;

export const PASSWORD_PATTERN = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
