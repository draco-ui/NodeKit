import { describe, it, expect } from 'vitest';
import { buttonVariants } from '../src/Button.styles';
import { BUTTON_DEFAULT_PROPS, BUTTON_DEFAULT_NAME } from '../src/constants';

describe('buttonVariants', () => {
  it('returns base class', () => {
    const result = buttonVariants();
    expect(result).toContain('DracoButton');
  });

  it('applies variant class', () => {
    const result = buttonVariants({ variant: 'secondary' });
    expect(result).toContain('DracoButton--Secondary');
  });

  it('applies size class', () => {
    const result = buttonVariants({ size: 'small' });
    expect(result).toContain('DracoButton--Small');
  });

  it('applies shape class', () => {
    const result = buttonVariants({ shape: 'pill' });
    expect(result).toContain('DracoButton--Pill');
  });

  it('applies fullWidth class when true', () => {
    const result = buttonVariants({ fullWidth: true });
    expect(result).toContain('DracoButton--FullWidth');
  });

  it('applies loading class when true', () => {
    const result = buttonVariants({ loading: true });
    expect(result).toContain('DracoButton--Loading');
  });

  it('applies default variants', () => {
    const result = buttonVariants();
    expect(result).toContain('DracoButton--Primary');
    expect(result).toContain('DracoButton--Medium');
    expect(result).toContain('DracoButton--Rounded');
  });
});

describe('constants', () => {
  it('has correct default props', () => {
    expect(BUTTON_DEFAULT_PROPS.variant).toBe('primary');
    expect(BUTTON_DEFAULT_PROPS.size).toBe('medium');
    expect(BUTTON_DEFAULT_PROPS.shape).toBe('rounded');
    expect(BUTTON_DEFAULT_PROPS.asChild).toBe(false);
  });

  it('has correct display name', () => {
    expect(BUTTON_DEFAULT_NAME).toBe('Button');
  });
});
