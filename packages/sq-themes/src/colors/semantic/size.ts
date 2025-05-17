import { seedSizeToken } from '../size';

export const semanticSize = {
  height: {
    xxxs: seedSizeToken.size[6],
    xxs: seedSizeToken.size[7],
    xs: seedSizeToken.size[8],
    sm: seedSizeToken.size[9],
    md: seedSizeToken.size[10],
    lg: seedSizeToken.size[11],
    xl: seedSizeToken.size[12],
    xxl: seedSizeToken.size[13],
    xxxl: seedSizeToken.size[14],
    xxxxl: seedSizeToken.size[15],
    xxxxxl: seedSizeToken.size[16],
  },
  padding: {
    xxs: seedSizeToken.size[1],
    xs: seedSizeToken.size[2],
    sm: seedSizeToken.size[4],
    md: seedSizeToken.size[5],
    lg: seedSizeToken.size[6],
    xl: seedSizeToken.size[8],
    xxl: seedSizeToken.size[10],
  },
  margin: {
    xxs: seedSizeToken.size[1],
    xs: seedSizeToken.size[2],
    sm: seedSizeToken.size[4],
    md: seedSizeToken.size[5],
    lg: seedSizeToken.size[6],
    xl: seedSizeToken.size[7],
    xxl: seedSizeToken.size[8],
    xxxl: seedSizeToken.size[10],
    xxxxl: seedSizeToken.size[12],
  },
};
