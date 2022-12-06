import React from 'react';
import {render} from '@testing-library/react-native';
import {mockTestID} from '../../utils/qualityAssurance';
import {ThemeProviderWrapper as wrapper} from '../../utils/ThemeProviderWrapper';
import {CustomStatusBar, ICustomStatusBar} from '@Components/CustomStatusBar';

describe('Components/CustomStatusBar', () => {
  let props: ICustomStatusBar = {
    testID: 'CustomStatusBar',
    type: 'light',
  };
  const {findByTestId, toJSON} = render(<CustomStatusBar {...props} />, {
    wrapper,
  });

  const sut_container = mockTestID('View', props.testID!).testID;

  it(`should render #${sut_container}`, () => {
    const sut = findByTestId(sut_container);
    expect(sut).toBeTruthy();
  });

  it(`should render a snapshot`, () => {
    expect(toJSON()).toMatchSnapshot();
  });
});
