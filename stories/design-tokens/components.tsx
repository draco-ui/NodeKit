import React from 'react';
import clsx from 'clsx';

/**
 * Color swatch component for displaying color tokens
 */
export const ColorSwatch = ({ name, value }: { name: string; value: string }) => {
  const handleCopy = () => navigator.clipboard.writeText(name);

  return (
    <div
      className={clsx('color-swatch')}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        padding: '0.75rem 1rem',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        border: '1px solid #e5e7eb',
        transition: 'all 0.2s',
        cursor: 'pointer',
      }}
      onClick={handleCopy}
      title="Click to copy token name"
    >
      <div
        style={{
          width: '48px',
          height: '48px',
          backgroundColor: value,
          borderRadius: '6px',
          border: '1px solid rgba(0,0,0,0.1)',
          flexShrink: 0,
        }}
      />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            fontSize: '13px',
            fontWeight: '600',
            color: '#1f2937',
            marginBottom: '2px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {name}
        </div>
        <div style={{ fontSize: '12px', fontFamily: 'ui-monospace, monospace', color: '#6b7280' }}>{value}</div>
      </div>
    </div>
  );
};

/**
 * Token row component for table display
 */
export const TokenRow = ({ name, value, type = 'other' }: { name: string; value: string; type?: 'color' | 'other' }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const handleCopy = () => navigator.clipboard.writeText(name);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: type === 'color' ? '80px 1fr 200px' : '1fr 200px',
        gap: '1rem',
        alignItems: 'center',
        padding: '0.75rem 1rem',
        backgroundColor: isHovered ? '#f9fafb' : '#ffffff',
        borderBottom: '1px solid #f3f4f6',
        cursor: 'pointer',
        transition: 'background-color 0.2s',
      }}
      onClick={handleCopy}
      title="Click to copy token name"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {type === 'color' && (
        <div
          style={{
            width: '64px',
            height: '40px',
            backgroundColor: value,
            borderRadius: '4px',
            border: '1px solid rgba(0,0,0,0.1)',
          }}
        />
      )}
      <div
        style={{
          fontSize: '13px',
          fontFamily: 'ui-monospace, monospace',
          color: '#374151',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
      >
        {name}
      </div>
      <div style={{ fontSize: '13px', fontFamily: 'ui-monospace, monospace', color: '#6b7280', textAlign: 'right' }}>{value}</div>
    </div>
  );
};

/**
 * Token section component with header and grid/table layout
 */
export const TokenSection = ({
  title,
  tokens,
  viewType = 'card',
  tokenType = 'color',
}: {
  title: string;
  tokens: Record<string, string>;
  viewType?: 'card' | 'table';
  tokenType?: 'color' | 'other';
}) => {
  if (Object.keys(tokens).length === 0) return null;

  return (
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
        <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#111827', margin: 0 }}>{title}</h2>
        <div style={{ fontSize: '13px', color: '#6b7280', fontWeight: '500' }}>{Object.keys(tokens).length} tokens</div>
      </div>

      {viewType === 'card' ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
          {Object.entries(tokens).map(([key, value]) => (
            <ColorSwatch key={key} name={key} value={value} />
          ))}
        </div>
      ) : (
        <div style={{ border: '1px solid #e5e7eb', borderRadius: '8px', overflow: 'hidden', backgroundColor: '#ffffff' }}>
          {Object.entries(tokens).map(([key, value]) => (
            <TokenRow key={key} name={key} value={value} type={tokenType} />
          ))}
        </div>
      )}
    </div>
  );
};

/**
 * Theme comparison row for light vs dark theme tokens
 */
export const ThemeComparisonRow = ({ tokenName, lightValue, darkValue }: { tokenName: string; lightValue: string; darkValue: string }) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '1fr 200px 200px',
      gap: '1rem',
      alignItems: 'center',
      padding: '0.75rem 1rem',
      backgroundColor: '#ffffff',
      borderBottom: '1px solid #f3f4f6',
    }}
  >
    <div
      style={{
        fontSize: '13px',
        fontFamily: 'ui-monospace, monospace',
        color: '#374151',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      }}
    >
      {tokenName}
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <div
        style={{
          width: '32px',
          height: '32px',
          backgroundColor: lightValue,
          borderRadius: '4px',
          border: '1px solid rgba(0,0,0,0.1)',
          flexShrink: 0,
        }}
      />
      <div style={{ fontSize: '12px', fontFamily: 'ui-monospace, monospace', color: '#6b7280' }}>{lightValue}</div>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <div
        style={{
          width: '32px',
          height: '32px',
          backgroundColor: darkValue,
          borderRadius: '4px',
          border: '1px solid rgba(0,0,0,0.1)',
          flexShrink: 0,
        }}
      />
      <div style={{ fontSize: '12px', fontFamily: 'ui-monospace, monospace', color: '#6b7280' }}>{darkValue}</div>
    </div>
  </div>
);

/**
 * Page container with consistent styling
 */
export const PageContainer = ({ children }: { children: React.ReactNode }) => (
  <div style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto', backgroundColor: '#f9fafb', minHeight: '100vh' }}>{children}</div>
);

/**
 * Page header component
 */
export const PageHeader = ({ title, description }: { title: string; description?: string }) => (
  <div style={{ marginBottom: '3rem' }}>
    <h1 style={{ fontSize: '36px', fontWeight: '800', marginBottom: '0.5rem', color: '#111827' }}>{title}</h1>
    {description && <p style={{ fontSize: '16px', color: '#6b7280', margin: 0 }}>{description}</p>}
  </div>
);
