import React from 'react';
import cn from 'classnames';

import type { IconVariant_ } from './utils';
import { ErrorIcon } from './ErrorIcon';
import { SearchIcon } from './SearchIcon';
import classes from './Icon.module.css';

export interface IconProps {
  variant?: IconVariant_;
  disabled?: boolean;
}

export const Icon = ({ variant, disabled = false }: IconProps) => {
  switch (variant) {
    case 'error':
      return (
        <div
          className={classes.icon}
          data-testid='input-icon-error'
        >
          <ErrorIcon />
        </div>
      );
    case 'search':
      return (
        <div
          className={cn(classes.icon, disabled && classes.disabled)}
          data-testid='input-icon-search'
        >
          <SearchIcon />
        </div>
      );
    default:
      return null;
  }
};
