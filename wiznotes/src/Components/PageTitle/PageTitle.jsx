import React from 'react';
import { useTheme } from '../../Context';
import './PageTitle.css';

const PageTitle = (props) => {
    const { title, items } = props;
    const { themeState } = useTheme();
    const { theme } = themeState;
  return (
    <span className={`page-title ${theme==="light" ? "title-light" : "title-dark"}`}>
        {title} ({items})
    </span>
  )
}

export { PageTitle };