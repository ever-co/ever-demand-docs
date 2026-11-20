import React, {type ReactNode} from 'react';
import Layout from '@theme-original/Footer/Layout';
import type LayoutType from '@theme/Footer/Layout';
import type {WrapperProps} from '@docusaurus/types';

import ThemeSelector from '../ThemeSelector';

type Props = WrapperProps<typeof LayoutType>;

/**
 * Wraps the stock footer layout (not ejected) to add the System / Light / Dark selector to the
 * footer's bottom row, under the copyright. Every page renders this footer, mobile included.
 */
export default function LayoutWrapper(props: Props): ReactNode {
  return (
    <Layout
      {...props}
      copyright={
        <>
          {props.copyright}
          <ThemeSelector />
        </>
      }
    />
  );
}
