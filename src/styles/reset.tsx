import { Global, css } from '@emotion/react';
import React from 'react';

interface ResetProps {
  theme?: object;
}

const Reset: React.FC<ResetProps> = (props) => (
  <Global
    styles={css`
      :root {
        --white-100: #FFFFFF;
        --white-80: #FFFFFFCC;
        --white-60: #FFFFFF99;
        --white-40: #FFFFFF66;
        --white-20: #FFFFFF33;
        --white-10: #FFFFFF1A;
        --white-4: #FFFFFF0A;

        --dark-100: #121212;
        --dark-80: #121212CC;
        --dark-60: #12121299;
        --dark-40: #12121266;
        --dark-20: #12121233;
        --dark-10: #1212121A;
        --dark-4: #1212120A;

        --red-100: #F13564;
        --red-80: #F13564CC;
        --red-60: #F1356499;
        --red-40: #F1356466;
        --red-20: #F1356433;
        --red-10: #F135641A;
        --red-4: #F135640A;

        --yellow-100: #FFAA63;
        --yellow-80: #FFAA63CC;
        --yellow-60: #FFAA6399;
        --yellow-40: #FFAA6366;
        --yellow-20: #FFAA6333;
        --yellow-10: #FFAA631A;
        --yellow-4: #FFAA630A;

        --green-100: #05C289;
        --green-80: #05C289CC;
        --green-60: #05C28999;
        --green-40: #05C28966;
        --green-20: #05C28933;
        --green-10: #05C2891A;
        --green-4: #05C2890A;

        --primary-100: #376fe1;
        --primary-80: #376fe1CC;
        --primary-60: #376fe199;
        --primary-40: #376fe166;
        --primary-20: #376fe133;
        --primary-10: #376fe11A;
        --primary-4: #376fe10A;
      }
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border: 0;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        font-family: 'Inter', sans-serif;
      }
      *:focus-visible {
        outline: none;
      }
      a {
        text-decoration: none;
        &:link {
          color: inherit;
        }
        &:visited {
          color: inherit;
        }
      }
    `}
  />
);

export { Reset };
