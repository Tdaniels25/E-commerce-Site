import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--body-normal-medium-normal: Cabin;

/* font sizes */
--body-normal-medium-normal-size: 20px;
--font-size-20xl-1: 39.1px;
--font-size-12xl-3: 31.3px;
--font-size-42xl: 61px;

/* Colors */
--ui-white: #fff;
--ui-danger: #e5252c;
--font-dark: #1a1f16;
--font-placeholder: rgba(26, 31, 22, 0.5);
--font-tertiary: #60695c;
--font-accent: #12805d;

/* Gaps */
--gap-5xs: 8px;
--gap-base: 16px;

/* Paddings */
--padding-5xs: 8px;
--padding-base: 16px;
--padding-5xl: 24px;

/* border radiuses */
--br-3xs: 10px;
--br-sm: 14px;
--br-xs: 12px;
--br-smi: 13px;

}
`;
