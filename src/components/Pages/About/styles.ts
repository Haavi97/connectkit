import styled from 'styled-components';
import defaultTheme from '../../../constants/defaultTheme';

export const Sections = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  padding-top: 4px;
  @media only screen and (max-width: ${defaultTheme.mobileWidth}px) {
    padding:18px 6px 0;
`;
export const Section = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 18px;
  text-align: left;
  padding: 4px 8px;
`;
export const Heading = styled.div`
  color: var(--body-color);
  font-size: 17px;
  font-weight: var(--ck-modal-heading-font-weight, 600);
  line-height: 20px;
  padding: 0 0 8px;
`;
export const TokenGraphic = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2px;
  width: 100%;
  max-width: 48px;
  user-select: none;
  pointer-events: none;
  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;

export const Token = styled.div`
  display: block;
  position: relative;
  width: 22px;
  height: 22px;
  border-radius: 11px;
  overflow: hidden;
`;

export const Tokens = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
`;