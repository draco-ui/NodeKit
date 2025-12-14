import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import '@dracoui/styles';
import './tokens.css';
import { useTokens, useThemeTokens, useCategorizedTokens } from './hooks';
import { ColorSwatch, TokenSection, ThemeComparisonRow, PageContainer, PageHeader } from './components';
import { capitalize, filterTokens, groupColorsByPalette } from './utils';

const meta: Meta = {
  title: 'Design Tokens',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['!autodocs']// Remove autodocs tag
};

export default meta;
type Story = StoryObj;

/**
 * All Tokens Story - Complete design system reference
 */
export const Overview: Story = {
  name: 'All Tokens',
  render: () => {
    const tokens = useTokens();
    const categories = useCategorizedTokens(tokens);

    return (
      <PageContainer>
        <PageHeader title="Draco Design Tokens" description="Complete design system tokens reference. Click any token to copy its name." />

        {Object.entries(categories.colorPalettes).map(([paletteName, paletteTokens]) => (
          <TokenSection key={paletteName} title={`Base Colors - ${capitalize(paletteName)}`} tokens={paletteTokens} viewType="card" />
        ))}

        <TokenSection title="Product Colors" tokens={categories.productColors} viewType="card" />
        <TokenSection title="Button Tokens" tokens={categories.buttonTokens} viewType="table" tokenType="color" />
        <TokenSection title="Badge Tokens" tokens={categories.badgeTokens} viewType="table" tokenType="color" />
        <TokenSection title="Input Tokens" tokens={categories.inputTokens} viewType="table" tokenType="color" />
        <TokenSection title="Spacing" tokens={categories.spacingTokens} viewType="table" tokenType="other" />
        <TokenSection title="Borders & Radii" tokens={categories.borderTokens} viewType="table" tokenType="other" />
        <TokenSection title="Typography" tokens={categories.typographyTokens} viewType="table" tokenType="other" />
        <TokenSection title="Motion" tokens={categories.motionTokens} viewType="table" tokenType="other" />
      </PageContainer>
    );
  },
};

/**
 * Colors Story - Color tokens only
 */
export const ColorTokensView: Story = {
  name: 'Colors',
  render: () => {
    const allTokens = useTokens();
    const colorTokens = filterTokens(allTokens, 'color');
    const colorPalettes = groupColorsByPalette(colorTokens);
    const productColors = filterTokens(colorTokens, '--draco-product-color');

    return (
      <PageContainer>
        <PageHeader title="Color Tokens" />

        {Object.entries(colorPalettes).map(([paletteName, paletteTokens]) => (
          <TokenSection key={paletteName} title={`Base Colors - ${capitalize(paletteName)}`} tokens={paletteTokens} viewType="card" />
        ))}

        <TokenSection title="Product Colors" tokens={productColors} viewType="card" />
      </PageContainer>
    );
  },
};

/**
 * Component Tokens Story - Component-specific tokens
 */
export const ComponentTokensView: Story = {
  name: 'Component Tokens',
  render: () => {
    const allTokens = useTokens();
    const buttonTokens = filterTokens(allTokens, 'button');
    const badgeTokens = filterTokens(allTokens, 'badge');
    const inputTokens = filterTokens(allTokens, 'input');

    return (
      <PageContainer>
        <PageHeader title="Component Tokens" />
        <TokenSection title="Buttons" tokens={buttonTokens} viewType="table" tokenType="color" />
        <TokenSection title="Badges" tokens={badgeTokens} viewType="table" tokenType="color" />
        <TokenSection title="Inputs" tokens={inputTokens} viewType="table" tokenType="color" />
      </PageContainer>
    );
  },
};

/**
 * Theme Tokens Story - Light vs Dark theme comparison
 */
export const ThemeTokensView: Story = {
  name: 'Theme Tokens',
  render: () => {
    const { loading, value: themeData } = useThemeTokens();

    if (loading) {
      return (
        <PageContainer>
          <div style={{ textAlign: 'center', fontSize: '16px', color: '#6b7280' }}>Loading theme tokens...</div>
        </PageContainer>
      );
    }

    const { light: lightTokens = {}, dark: darkTokens = {} } = themeData || {};
    const tokenKeys = Object.keys(lightTokens);

    return (
      <PageContainer>
        <PageHeader title="Theme Tokens" description="Semantic tokens that change between light and dark themes" />

        <div style={{ marginBottom: '3rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '1rem',
              paddingBottom: '0.75rem',
              borderBottom: '2px solid #e5e7eb',
            }}
          >
            <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#111827', margin: 0 }}>Light vs Dark Comparison</h2>
            <div style={{ fontSize: '13px', color: '#6b7280', fontWeight: '500' }}>{tokenKeys.length} tokens</div>
          </div>

          <div style={{ border: '1px solid #e5e7eb', borderRadius: '8px', overflow: 'hidden', backgroundColor: '#ffffff' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 200px 200px',
                gap: '1rem',
                padding: '0.75rem 1rem',
                backgroundColor: '#f9fafb',
                borderBottom: '1px solid #e5e7eb',
                fontWeight: '600',
                fontSize: '13px',
                color: '#374151',
              }}
            >
              <div>Token Name</div>
              <div>Light Theme</div>
              <div>Dark Theme</div>
            </div>
            {tokenKeys.map((key) => (
              <ThemeComparisonRow key={key} tokenName={key} lightValue={lightTokens[key]} darkValue={darkTokens[key]} />
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <ThemePreview title="Light Theme Preview" tokens={lightTokens} />
          <ThemePreview title="Dark Theme Preview" tokens={darkTokens} isDark />
        </div>
      </PageContainer>
    );
  },
};

/**
 * Theme preview component
 */
const ThemePreview = ({ title, tokens, isDark = false }: { title: string; tokens: Record<string, string>; isDark?: boolean }) => (
  <div>
    <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#111827', marginBottom: '1rem' }}>{title}</h3>
    <div
      style={{
        padding: '2rem',
        backgroundColor: tokens['--draco-background-primary'] || (isDark ? '#1a1a1a' : '#ffffff'),
        border: '1px solid #e5e7eb',
        borderRadius: '8px',
      }}
    >
      <div
        style={{
          padding: '1rem',
          backgroundColor: tokens['--draco-background-secondary'] || (isDark ? '#2a2a2a' : '#f5f5f5'),
          borderRadius: '6px',
          marginBottom: '1rem',
        }}
      >
        <div
          style={{
            color: tokens['--draco-foreground-primary'] || (isDark ? '#fff' : '#000'),
            fontSize: '14px',
            fontWeight: '600',
          }}
        >
          Primary Background & Foreground
        </div>
      </div>
      <button
        style={{
          backgroundColor: tokens['--draco-button-primary-background'] || (isDark ? '#fff' : '#000'),
          color: tokens['--draco-button-primary-foreground'] || (isDark ? '#000' : '#fff'),
          border: 'none',
          borderRadius: '6px',
          padding: '0.5rem 1rem',
          fontSize: '14px',
          fontWeight: '500',
          cursor: 'pointer',
        }}
      >
        Primary Button
      </button>
    </div>
  </div>
);
