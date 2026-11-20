import React, {type ComponentProps, type ReactNode} from 'react';
import clsx from 'clsx';
import {useColorMode} from '@docusaurus/theme-common';
import useIsBrowser from '@docusaurus/useIsBrowser';
import IconSystemColorMode from '@theme/Icon/SystemColorMode';
import IconLightMode from '@theme/Icon/LightMode';
import IconDarkMode from '@theme/Icon/DarkMode';

import styles from './ThemeSelector.module.css';

/** `null` is "System": no stored choice, so the page follows the OS theme (prefers-color-scheme). */
type Choice = 'light' | 'dark' | null;

const OPTIONS: ReadonlyArray<{
  choice: Choice;
  label: string;
  Icon: (props: ComponentProps<'svg'>) => ReactNode;
}> = [
  {choice: null, label: 'System theme', Icon: IconSystemColorMode},
  {choice: 'light', label: 'Light theme', Icon: IconLightMode},
  {choice: 'dark', label: 'Dark theme', Icon: IconDarkMode},
];

/**
 * Footer theme selector: System / Light / Dark, the same three choices the Ever marketing sites
 * offer in their footer. Docusaurus owns the state (data-theme on <html>, the stored choice); this
 * only reads and sets it. setColorMode(null) forgets the stored choice and goes back to the OS theme.
 *
 * The server can't know the visitor's choice, so nothing is pressed until hydration: the server and
 * the first client render produce the same markup, and the pressed button appears right after.
 */
export default function ThemeSelector(): ReactNode {
  const isBrowser = useIsBrowser();
  const {colorModeChoice, setColorMode} = useColorMode();

  return (
    <div role="group" aria-label="Theme" className={styles.selector}>
      {OPTIONS.map(({choice, label, Icon}) => {
        const pressed = isBrowser && colorModeChoice === choice;
        return (
          <button
            key={choice ?? 'system'}
            type="button"
            className={clsx(styles.option, pressed && styles.optionPressed)}
            aria-label={label}
            title={label}
            aria-pressed={pressed}
            onClick={() => setColorMode(choice)}>
            <Icon className={styles.icon} aria-hidden="true" />
          </button>
        );
      })}
    </div>
  );
}
