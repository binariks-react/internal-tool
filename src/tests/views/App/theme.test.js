import theme, {
  getColor,
  getHoverColor,
  getActiveColor,
  getHoverShadowColor,
  getFocusShadowColor,
} from 'views/App/theme';

describe('theme getters', () => {
  describe('colors getter', () => {
    it('getColor with implicit passed props', () => {
      expect(getColor('primary')({ theme })).toBe(theme.colors.primary);
    });

    it('getColor with explicit passed props', () => {
      expect(getColor('primary', { theme })).toBe(theme.colors.primary);
    });

    it('getColor with wrong color', () => {
      expect(getColor('wrongColor')({ theme })).toBeUndefined();
    });

    it('getColor without theme prop', () => {
      expect(getColor('primary')).toBeInstanceOf(Function);
    });

    it('getColor without theme prop', () => {
      expect(getColor('primary')).toBeInstanceOf(Function);
    });
  });

  describe('getter for hover colors', () => {
    it('getHoverColors with implicit passed props', () => {
      expect(getHoverColor('primary')({ theme })).toBe(theme.colors.hoverColors.primary);
    });

    it('getHoverColors with explicit passed props', () => {
      expect(getHoverColor('primary', { theme })).toBe(theme.colors.hoverColors.primary);
    });

    it('getHoverColors with wrong color', () => {
      expect(getColor('wrongColor')({ theme })).toBeUndefined();
    });

    it('getHoverColors without theme prop', () => {
      expect(getColor('primary')).toBeInstanceOf(Function);
    });
  });

  describe('getter for active colors', () => {
    it('getActiveColor with implicit passed props', () => {
      expect(getActiveColor('primary')({ theme })).toBe(theme.colors.activeColors.primary);
    });

    it('getActiveColor with explicit passed props', () => {
      expect(getActiveColor('primary', { theme })).toBe(theme.colors.activeColors.primary);
    });

    it('getActiveColor with wrong color', () => {
      expect(getColor('wrongColor')({ theme })).toBeUndefined();
    });

    it('getActiveColor without theme prop', () => {
      expect(getColor('primary')).toBeInstanceOf(Function);
    });
  });

  describe('getter for shadow hover colors', () => {
    it('getHoverShadowColor with implicit passed props', () => {
      expect(getHoverShadowColor('primary')({ theme })).toBe(theme.shadows.hover.primary);
    });

    it('getHoverShadowColor with explicit passed props', () => {
      expect(getHoverShadowColor('primary', { theme })).toBe(theme.shadows.hover.primary);
    });

    it('getHoverShadowColor with wrong color', () => {
      expect(getColor('wrongColor')({ theme })).toBeUndefined();
    });

    it('getHoverShadowColor without theme prop', () => {
      expect(getColor('primary')).toBeInstanceOf(Function);
    });
  });

  describe('getter for shadow focus colors', () => {
    it('getFocusShadowColor with implicit passed props', () => {
      expect(getFocusShadowColor('primary')({ theme })).toBe(theme.shadows.focus.primary);
    });

    it('getFocusShadowColor with explicit passed props', () => {
      expect(getFocusShadowColor('primary', { theme })).toBe(theme.shadows.focus.primary);
    });

    it('getFocusShadowColor with wrong color', () => {
      expect(getColor('wrongColor')({ theme })).toBeUndefined();
    });

    it('getFocusShadowColor without theme prop', () => {
      expect(getColor('primary')).toBeInstanceOf(Function);
    });
  });
});
