import React, { Fragment } from 'react';
import { styled, css } from '@storybook/theming';

const Meta = styled.div`
  color: #666;
  font-size: 12px;
`;

const Item = styled.li<{ minimal?: boolean }>`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  flex: 0 1 16%;
  min-width: 120px;
  margin: 16px;

  svg {
    margin-right: 6px;
    width: 24px;
    height: 24px;
  }

  ${(props) =>
    props.minimal &&
    css`
      flex: none;
      min-width: auto;
      padding: 0;
      background: #fff;
      margin: 16px;

      svg {
        display: block;
        margin-right: 0;
        width: 14px;
        height: 14px;
      }
    `};
`;

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  list-style: none;
  padding: 0;
  margin: 0;
`;