import React from 'react';
import { render, screen, fireEvent } from '../../../utils/test-utils';

import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Tag, TagGroup } from './Tag';

describe('Tag & TagGroup', () => {
  describe('Tag Rendering & Icons', () => {
    it('renders label text and does not set button role when non-interactive', () => {
      render(<Tag>TypeScript</Tag>);
      expect(screen.getByText('TypeScript')).toBeInTheDocument();
      expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });

    it('renders iconLeft and iconRight when not removable', () => {
      render(
        <Tag
          iconLeft={<span data-testid="icon-left">L</span>}
          iconRight={<span data-testid="icon-right">R</span>}
        >
          Label
        </Tag>
      );

      expect(screen.getByTestId('icon-left')).toBeInTheDocument();
      expect(screen.getByTestId('icon-right')).toBeInTheDocument();
    });

    it('hides iconRight when removable is true and renders remove button instead', () => {
      render(
        <Tag
          removable
          iconRight={<span data-testid="icon-right">R</span>}
          onRemove={jest.fn()}
        >
          React
        </Tag>
      );

      expect(screen.queryByTestId('icon-right')).not.toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Remove React' })).toBeInTheDocument();
    });
  });

  describe('Interactive & Removable Tag Behavior', () => {
    it('supports click and Enter/Space keyboard activation when onClick is provided', async () => {
      const user = userEvent.setup();
      const handleClick = jest.fn();

      render(
        <Tag selected onClick={handleClick}>
          Filter Active
        </Tag>
      );

      const tagButton = screen.getByRole('button', { name: 'Filter Active' });
      expect(tagButton).toHaveAttribute('aria-pressed', 'true');
      expect(tagButton).toHaveAttribute('tabindex', '0');

      await user.click(tagButton);
      expect(handleClick).toHaveBeenCalledTimes(1);

      tagButton.focus();
      await user.keyboard('{Enter}');
      await user.keyboard(' ');
      expect(handleClick).toHaveBeenCalledTimes(3);
    });

    it('calls onRemove without triggering parent Tag onClick when remove button is clicked', async () => {
      const user = userEvent.setup();
      const handleClick = jest.fn();
      const handleRemove = jest.fn();

      render(
        <Tag removable removeLabel="Delete" onClick={handleClick} onRemove={handleRemove}>
          Design
        </Tag>
      );

      await user.click(screen.getByRole('button', { name: 'Delete Design' }));

      expect(handleRemove).toHaveBeenCalledTimes(1);
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('blocks click and remove actions when disabled is true', async () => {
      const user = userEvent.setup();
      const handleClick = jest.fn();
      const handleRemove = jest.fn();

      render(
        <Tag removable disabled onClick={handleClick} onRemove={handleRemove}>
          Locked
        </Tag>
      );

      const tagEl = screen.getByText('Locked').closest('[aria-disabled="true"]');
      expect(tagEl).toBeInTheDocument();
      expect(tagEl).not.toHaveAttribute('tabindex');

      const removeBtn = screen.getByRole('button', { name: 'Remove Locked' });
      expect(removeBtn).toBeDisabled();

      // await user.click(screen.getByText('Locked'));
      // await user.click(removeBtn);

      // expect(handleClick).not.toHaveBeenCalled();
      // expect(handleRemove).not.toHaveBeenCalled();

      expect(tagEl).toHaveStyle({ pointerEvents: 'none' });
      fireEvent.click(screen.getByText('Locked'));
      fireEvent.click(removeBtn);

      expect(handleClick).not.toHaveBeenCalled();
      expect(handleRemove).not.toHaveBeenCalled();

    });
  });

  describe('TagGroup', () => {
    it('renders accessible list and listitems for child tags', () => {
      render(
        <TagGroup aria-label="Skills">
          <Tag>React</Tag>
          <Tag>Styled Components</Tag>
        </TagGroup>
      );

      expect(screen.getByRole('list', { name: 'Skills' })).toBeInTheDocument();
      expect(screen.getAllByRole('listitem')).toHaveLength(2);
      expect(screen.getByText('React')).toBeInTheDocument();
      expect(screen.getByText('Styled Components')).toBeInTheDocument();
    });

    it('truncates visible tags to maxVisible and displays default overflow badge', () => {
      render(
        <TagGroup maxVisible={2}>
          <Tag>One</Tag>
          <Tag>Two</Tag>
          <Tag>Three</Tag>
          <Tag>Four</Tag>
        </TagGroup>
      );

      expect(screen.getByText('One')).toBeInTheDocument();
      expect(screen.getByText('Two')).toBeInTheDocument();
      expect(screen.queryByText('Three')).not.toBeInTheDocument();
      expect(screen.queryByText('Four')).not.toBeInTheDocument();

      const overflowBadge = screen.getByLabelText('2 more items');
      expect(overflowBadge).toHaveTextContent('+2');
    });

    it('supports custom overflowLabel formatter', () => {
      render(
        <TagGroup maxVisible={1} overflowLabel={(count) => `${count} more tags`}>
          <Tag>Alpha</Tag>
          <Tag>Beta</Tag>
          <Tag>Gamma</Tag>
        </TagGroup>
      );

      expect(screen.getByLabelText('2 more items')).toHaveTextContent('2 more tags');
    });
  });
});
