export const scrollIntoElementId = (id: string, options?: ScrollIntoViewOptions): void => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', ...options });
  }
};
