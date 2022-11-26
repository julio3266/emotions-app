import React from 'react';
import {ThemeProviderWrapper as wrapper} from '@utils/ThemeProviderWrapper';
import {mockTestID} from '@utils/qualityAssurance';
import {render} from '@testing-library/react-native';
import {Wave, IWave} from '@Components/Wave';
import Theme from '@theme/styles';

describe('Components/Wave', () => {
  let props: IWave = {
    testID: 'wave',
    animationProps: {
      gestureWaveAnimated: jest.fn(),
      waveAnimationStyle: [],
    },
    color: Theme.colors.blueViolet,
    height: 40,
    width: 100,
  };

  const {findByTestId, toJSON} = render(<Wave {...props} />, {
    wrapper,
  });
  const sut_container = mockTestID('View', props.testID!).testID;
  const el_svgContainer = mockTestID(
    'View',
    `${props.testID!}_svgContainer`,
  ).testID;

  const el_svg = mockTestID('View', `${props.testID!}_svg`).testID;

  it(`should render #${sut_container}`, () => {
    const sut = findByTestId(sut_container);
    expect(sut).toBeTruthy();
  });

  it(`should render #${el_svgContainer}`, () => {
    const sut = findByTestId(el_svgContainer);
    expect(sut).toBeTruthy();
  });

  it(`should render #${el_svg}`, () => {
    const sut = findByTestId(el_svg);
    expect(sut).toBeTruthy();
  });

  it(`should render a snapshot`, () => {
    expect(toJSON()).toMatchSnapshot();
  });
});
