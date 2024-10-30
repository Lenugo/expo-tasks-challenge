import React from 'react';
import { render } from '@testing-library/react-native';
import { Text } from 'react-native';
import WrapperScrollView from '../../components/list/WrapperScrollView';

describe('WrapperScrollView', () => {
  it('renders correctly with title and children', () => {
    const { getByText } = render(
      <WrapperScrollView title="Test Title">
        <Text>Test Child</Text>
      </WrapperScrollView>
    );

    expect(getByText('Test Title')).toBeTruthy();
    expect(getByText('Test Child')).toBeTruthy();
  });

  it('applies correct styles', () => {
    const { getByTestId } = render(
      <WrapperScrollView title="Test Title" />
    );
    
    const container = getByTestId('wrapper-container');
    const content = getByTestId('wrapper-content');
    
    expect(container.props.style).toHaveProperty('flex', 1);
    expect(content.props.style).toHaveProperty('padding', 32);
  });
});