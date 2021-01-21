import { getStorage, updateStorage } from './storage';

export const toggleTheme = () => {
  const bodyTag = document.querySelector('body');
  const { darkTheme: curruntTheme = false } = getStorage();
  const newTheme = !curruntTheme;

  updateStorage({ darkTheme: newTheme });

  if (newTheme) {
    if (!bodyTag.classList.contains('dark')) {
      bodyTag.classList.add('dark');
    }
  } else {
    bodyTag.classList.remove('dark');
  }
};

export const setThemeFromCookie = () => {
  const bodyTag = document.querySelector('body');
  const { darkTheme = false } = getStorage();

  if (darkTheme) {
    bodyTag.classList.add('dark');
  }
};
