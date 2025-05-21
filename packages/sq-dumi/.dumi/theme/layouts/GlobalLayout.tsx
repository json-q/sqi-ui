// .dumi/theme/layouts/GlobalLayout.tsx
import { useOutlet, usePrefersColor } from 'dumi';
import { useEffect } from 'react';

export default function GlobalLayout() {
  const outlet = useOutlet();
  const [color] = usePrefersColor();

  useEffect(() => {
    if (color === 'dark') {
      document.documentElement.setAttribute('theme-mode', 'dark');
    } else {
      document.documentElement.removeAttribute('theme-mode');
    }
  }, [color]);

  return outlet;
}
