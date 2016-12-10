const fontFamilyList = [
  {
    name: 'Rubik',
    url: 'https://cdn.rawgit.com/shoutem/ui/82a122cc449c6df25a409d3c214935eff866f762/fonts/Rubik-Regular.ttf',
  },
  {
    name: 'Rubik-Regular',
    url: 'https://cdn.rawgit.com/shoutem/ui/82a122cc449c6df25a409d3c214935eff866f762/fonts/Rubik-Regular.ttf',
  },
  {
    name: 'Rubik-Medium',
    url: 'https://cdn.rawgit.com/shoutem/ui/82a122cc449c6df25a409d3c214935eff866f762/fonts/Rubik-Medium.ttf',
  },
];

const fontStyles = fontFamilyList.map(({ name, url }) =>
  `@font-face { src: url(${url}); font-family: '${name}'; }`).join('\n');

if (!window.__fontsAppended) {
  window.__fontsAppended = true;

  const style = document.createElement('style');
  style.type = 'text/css';

  if (style.styleSheet) {
    style.styleSheet.cssText = fontStyles;
  } else {
    style.appendChild(document.createTextNode(fontStyles));
  }

  document.head.appendChild(style);
}
