import React from 'react';
import {ThemeProviderWrapper as wrapper} from '@utils/ThemeProviderWrapper';
import {mockTestID} from '@utils/qualityAssurance';
import {render} from '@testing-library/react-native';
import {Loader, ILoaderProps} from '@Components/Loader';

describe('Components/Loader', () => {
  let props: ILoaderProps = {
    testID: 'Loader',
  };

  const {findByTestId, toJSON} = render(<Loader {...props} />, {
    wrapper,
  });
  const sut_container = mockTestID('View', props.testID!).testID;
  const sut_spinner = mockTestID(
    'ActivityIndicator',
    `${props.testID!}_spinner`,
  ).testID;
  it(`should render #${sut_container}`, () => {
    const sut = findByTestId(sut_container);
    expect(sut).toBeTruthy();
  });

  it(`should render #${sut_spinner}`, () => {
    const sut = findByTestId(sut_spinner);
    expect(sut).toBeTruthy();
  });

  it(`should render a snapshot`, () => {
    expect(toJSON()).toMatchSnapshot();
  });
});
