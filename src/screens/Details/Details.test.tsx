import React from 'react';
import {ThemeProviderWrapper as wrapper} from '@utils/ThemeProviderWrapper';
import {mockTestID} from '@utils/qualityAssurance';
import {render} from '@testing-library/react-native';
import {Details, IDetails} from '@Screens/Details';

describe('Screens/Details', () => {
  let props: IDetails = {
    testID: 'Details',
  };

  const {findByTestId} = render(<Details {...props} />, {
    wrapper,
  });
  const sut_container = mockTestID('View', props.testID!).testID;
  const el_statusBar = mockTestID('View', `${props.testID!}_statusBar`).testID;

  it(`should render #${sut_container}`, () => {
    const sut = findByTestId(sut_container);
    expect(sut).toBeTruthy();
  });

  it(`should render #${el_statusBar}`, () => {
    const sut = findByTestId(el_statusBar);
    expect(sut).toBeTruthy();
  });

  // it(`should render a snapshot`, () => {
  //   expect(toJSON()).toMatchSnapshot();
  // });
});
