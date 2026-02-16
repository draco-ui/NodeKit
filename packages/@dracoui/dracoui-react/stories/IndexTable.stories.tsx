/**
 * Copyright (c) Corinvo, LLC. and its partners and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useState } from 'react';
import { IndexTable } from '@dracoui-react/index-table';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof IndexTable> = {
  title: 'Components/IndexTable',
  component: IndexTable,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs', '!dev'],
  argTypes: {
    selectable: {
      control: 'boolean',
      description: 'Whether rows are selectable',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    loading: {
      control: 'boolean',
      description: 'Whether the table is in a loading state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    hasZebraStriping: {
      control: 'boolean',
      description: 'Whether to show zebra striping on rows',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    condensed: {
      control: 'boolean',
      description: 'Whether to use condensed spacing',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    lastColumnSticky: {
      control: 'boolean',
      description: 'Whether the last column should be sticky',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    sortDirection: {
      control: 'radio',
      options: ['ascending', 'descending'],
      description: 'Current sort direction',
      table: {
        type: { summary: 'ascending | descending' },
      },
    },
    defaultSortDirection: {
      control: 'radio',
      options: ['ascending', 'descending'],
      description: 'Default sort direction',
      table: {
        type: { summary: 'ascending | descending' },
        defaultValue: { summary: 'descending' },
      },
    },
    itemCount: {
      control: 'number',
      description: 'Total number of items in the table',
      table: {
        type: { summary: 'number' },
      },
    },
    headings: {
      control: 'object',
      description: 'Column headings configuration',
      table: {
        type: { summary: 'IndexTableHeading[]' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof IndexTable>;

const orders = [
  { id: '1001', date: '2024-01-15', customer: 'John Doe', total: '$125.00', status: 'Paid' },
  { id: '1002', date: '2024-01-16', customer: 'Jane Smith', total: '$89.50', status: 'Pending' },
  { id: '1003', date: '2024-01-17', customer: 'Bob Wilson', total: '$234.00', status: 'Paid' },
  { id: '1004', date: '2024-01-18', customer: 'Alice Brown', total: '$56.25', status: 'Refunded' },
  { id: '1005', date: '2024-01-19', customer: 'Charlie Davis', total: '$178.00', status: 'Paid' },
];

const headings = [
  { title: 'Order' },
  { title: 'Date' },
  { title: 'Customer' },
  { title: 'Total', alignment: 'end' as const },
  { title: 'Status' },
];

/**
 * Default IndexTable with selectable rows and filters
 */
export const Default: Story = {
  render: () => {
    const [query, setQuery] = useState('');
    const [selectedIds, setSelectedIds] = useState<string[]>([]);

    const filteredOrders = orders.filter((order) =>
      order.customer.toLowerCase().includes(query.toLowerCase()) ||
      order.id.includes(query) ||
      order.status.toLowerCase().includes(query.toLowerCase())
    );

    const handleSelect = (id: string, selected: boolean) => {
      setSelectedIds((prev) =>
        selected ? [...prev, id] : prev.filter((i) => i !== id)
      );
    };

    return (
      <IndexTable
        headings={headings}
        itemCount={filteredOrders.length}
        selectable
        selectedItemsCount={selectedIds.length}
      >
        <IndexTable.Filters
          query={query}
          onQueryChange={setQuery}
          onQueryClear={() => setQuery('')}
          placeholder="Search orders..."
        />

        {filteredOrders.map((order, index) => (
          <IndexTable.Row
            key={order.id}
            id={order.id}
            position={index}
            selected={selectedIds.includes(order.id)}
            onSelect={handleSelect}
          >
            <IndexTable.Cell>#{order.id}</IndexTable.Cell>
            <IndexTable.Cell>{order.date}</IndexTable.Cell>
            <IndexTable.Cell>{order.customer}</IndexTable.Cell>
            <IndexTable.Cell>{order.total}</IndexTable.Cell>
            <IndexTable.Cell>{order.status}</IndexTable.Cell>
          </IndexTable.Row>
        ))}
      </IndexTable>
    );
  },
};

/**
 * IndexTable with search filters
 */
export const WithFilters: Story = {
  render: () => {
    const [query, setQuery] = useState('');
    const [selectedIds, setSelectedIds] = useState<string[]>([]);

    const filteredOrders = orders.filter((order) =>
      order.customer.toLowerCase().includes(query.toLowerCase())
    );

    const handleSelect = (id: string, selected: boolean) => {
      setSelectedIds((prev) =>
        selected ? [...prev, id] : prev.filter((i) => i !== id)
      );
    };

    return (
      <IndexTable
        headings={headings}
        itemCount={filteredOrders.length}
        selectable
        selectedItemsCount={selectedIds.length}
      >
        <IndexTable.Filters
          query={query}
          onQueryChange={setQuery}
          onQueryClear={() => setQuery('')}
          placeholder="Search customers..."
        />

        {filteredOrders.map((order, index) => (
          <IndexTable.Row
            key={order.id}
            id={order.id}
            position={index}
            selected={selectedIds.includes(order.id)}
            onSelect={handleSelect}
          >
            <IndexTable.Cell>#{order.id}</IndexTable.Cell>
            <IndexTable.Cell>{order.date}</IndexTable.Cell>
            <IndexTable.Cell>{order.customer}</IndexTable.Cell>
            <IndexTable.Cell>{order.total}</IndexTable.Cell>
            <IndexTable.Cell>{order.status}</IndexTable.Cell>
          </IndexTable.Row>
        ))}
      </IndexTable>
    );
  },
};

/**
 * IndexTable with sortable columns
 */
export const WithSorting: Story = {
  render: () => {
    const [sortColumnIndex, setSortColumnIndex] = useState<number | undefined>(undefined);
    const [sortDirection, setSortDirection] = useState<'ascending' | 'descending'>('descending');

    const handleSort = (index: number, direction: 'ascending' | 'descending') => {
      setSortColumnIndex(index);
      setSortDirection(direction);
    };

    return (
      <IndexTable
        headings={headings}
        itemCount={orders.length}
        selectable={false}
        sortColumnIndex={sortColumnIndex}
        sortDirection={sortDirection}
        onSort={handleSort}
      >
        {orders.map((order, index) => (
          <IndexTable.Row key={order.id} id={order.id} position={index}>
            <IndexTable.Cell>#{order.id}</IndexTable.Cell>
            <IndexTable.Cell>{order.date}</IndexTable.Cell>
            <IndexTable.Cell>{order.customer}</IndexTable.Cell>
            <IndexTable.Cell>{order.total}</IndexTable.Cell>
            <IndexTable.Cell>{order.status}</IndexTable.Cell>
          </IndexTable.Row>
        ))}
      </IndexTable>
    );
  },
};

/**
 * IndexTable with alternating row colors
 */
export const ZebraStriping: Story = {
  render: () => (
    <IndexTable
      headings={headings}
      itemCount={orders.length}
      selectable={false}
      hasZebraStriping
    >
      {orders.map((order, index) => (
        <IndexTable.Row key={order.id} id={order.id} position={index}>
          <IndexTable.Cell>#{order.id}</IndexTable.Cell>
          <IndexTable.Cell>{order.date}</IndexTable.Cell>
          <IndexTable.Cell>{order.customer}</IndexTable.Cell>
          <IndexTable.Cell>{order.total}</IndexTable.Cell>
          <IndexTable.Cell>{order.status}</IndexTable.Cell>
        </IndexTable.Row>
      ))}
    </IndexTable>
  ),
};

/**
 * IndexTable with condensed spacing
 */
export const Condensed: Story = {
  render: () => (
    <IndexTable
      headings={headings}
      itemCount={orders.length}
      selectable={false}
      condensed
    >
      {orders.map((order, index) => (
        <IndexTable.Row key={order.id} id={order.id} position={index}>
          <IndexTable.Cell>#{order.id}</IndexTable.Cell>
          <IndexTable.Cell>{order.date}</IndexTable.Cell>
          <IndexTable.Cell>{order.customer}</IndexTable.Cell>
          <IndexTable.Cell>{order.total}</IndexTable.Cell>
          <IndexTable.Cell>{order.status}</IndexTable.Cell>
        </IndexTable.Row>
      ))}
    </IndexTable>
  ),
};

/**
 * IndexTable in loading state
 */
export const Loading: Story = {
  render: () => (
    <IndexTable
      headings={headings}
      itemCount={orders.length}
      selectable={false}
      loading
    >
      {orders.map((order, index) => (
        <IndexTable.Row key={order.id} id={order.id} position={index}>
          <IndexTable.Cell>#{order.id}</IndexTable.Cell>
          <IndexTable.Cell>{order.date}</IndexTable.Cell>
          <IndexTable.Cell>{order.customer}</IndexTable.Cell>
          <IndexTable.Cell>{order.total}</IndexTable.Cell>
          <IndexTable.Cell>{order.status}</IndexTable.Cell>
        </IndexTable.Row>
      ))}
    </IndexTable>
  ),
};

/**
 * IndexTable rows with different tones
 */
export const RowTones: Story = {
  render: () => (
    <IndexTable
      headings={headings}
      itemCount={3}
      selectable={false}
    >
      <IndexTable.Row id="1001" position={0} tone="success">
        <IndexTable.Cell>#1001</IndexTable.Cell>
        <IndexTable.Cell>2024-01-15</IndexTable.Cell>
        <IndexTable.Cell>John Doe</IndexTable.Cell>
        <IndexTable.Cell>$125.00</IndexTable.Cell>
        <IndexTable.Cell>Paid</IndexTable.Cell>
      </IndexTable.Row>
      <IndexTable.Row id="1002" position={1} tone="warning">
        <IndexTable.Cell>#1002</IndexTable.Cell>
        <IndexTable.Cell>2024-01-16</IndexTable.Cell>
        <IndexTable.Cell>Jane Smith</IndexTable.Cell>
        <IndexTable.Cell>$89.50</IndexTable.Cell>
        <IndexTable.Cell>Pending</IndexTable.Cell>
      </IndexTable.Row>
      <IndexTable.Row id="1003" position={2} tone="critical">
        <IndexTable.Cell>#1003</IndexTable.Cell>
        <IndexTable.Cell>2024-01-17</IndexTable.Cell>
        <IndexTable.Cell>Bob Wilson</IndexTable.Cell>
        <IndexTable.Cell>$234.00</IndexTable.Cell>
        <IndexTable.Cell>Refunded</IndexTable.Cell>
      </IndexTable.Row>
    </IndexTable>
  ),
};
