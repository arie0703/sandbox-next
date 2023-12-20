---
to: src/components/<%= h.changeCase.pascalCase(name) %>/page.tsx
unless_exists: true
---
import styles from '@/styles/components/<%= h.changeCase.kebabCase(name) %>.module.scss';

interface <%= h.changeCase.pascalCase(name) %>Props {
  str:string;
}

export const <%= h.changeCase.pascalCase(name) %> = ({ str }: <%= h.changeCase.pascalCase(name) %>Props ) => {
  return(
    <div className={`${styles['<%= h.changeCase.camel(name) %>']}`}>{str}</div>
  );
};
