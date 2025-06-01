import { useOutlet, usePrefersColor } from 'dumi';
import { useEffect } from 'react';

// babel-plugin-import 会产生非常多的问题，样式路径/依赖丢失等
import '@sqi-ui/web/dist/index.css';

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
