import { style } from "@vanilla-extract/css";

export const input = style({
  width: '100%',
  height: 48,
  padding: 12,
  border: '1px solid #777',
  boxShadow: '0px 1px 2px 0px #0000000F',
  color: '#000000',
  fontSize: 16,
  lineHeight: 26,
  letterSpacing: '-0.18px',
  borderRadius: 8,
  ':focus': {
    boxShadow: '0px 0px 0px 2px #0000001A',
  }
})