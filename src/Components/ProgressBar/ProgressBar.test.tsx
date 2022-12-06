import React from 'react';
import {ThemeProviderWrapper as wrapper} from '@utils/ThemeProviderWrapper';
import {mockTestID} from '@utils/qualityAssurance';
import {render} from '@testing-library/react-native';
import {ProgressBar, IProgressBar} from '@Components/ProgressBar';
import Theme from '@theme/styles';

describe('Components/ProgressBar', () => {
  let props: IProgressBar = {
    testID: 'ProgressBar',
    progressData: [
      {
        emotions: [{emotionTitle: 'Happy', selected: true}],
        percents: [{percenValue: 0, selected: true}],
      },
    ],
    animatedStyled: [],
    waveProps: {
      width: 100,
      height: 40,
      animationProps: {
        gestureWaveAnimated: jest.fn(),
        waveAnimationStyle: [],
      },
      color: Theme.colors.blueViolet,
    },
  };

  const {findByTestId, toJSON} = render(<ProgressBar {...props} />, {
    wrapper,
  });
  const sut_container = mockTestID('View', props.testID!).testID;
  const el_content = mockTestID('View', `${props.testID!}_content`).testID;
  const el_percentTitle = mockTestID(
    'Text',
    `${props.testID!}_percentTitle_0`,
  ).testID;
  const el_progressContainer = mockTestID(
    'Text',
    `${props.testID!}_progressContainer`,
  ).testID;

  const el_waveContainer = mockTestID(
    'View',
    `${props.testID!}_progressContainer`,
  ).testID;

  const el_wave = mockTestID('View', `${props.testID!}_wave`).testID;
  const el_row = mockTestID('View', `${props.testID!}_row`).testID;
  const el_panGestureHandler = mockTestID(
    'View',
    `${props.testID!}_panGestureHandler`,
  ).testID;
  const el_animatedView = mockTestID(
    'View',
    `${props.testID!}_animatedView`,
  ).testID;

  const el_dragDropButton = mockTestID(
    'TouchableOpacity',
    `${props.testID!}_dragDropButton`,
  ).testID;

  const el_iconBars = mockTestID('Text', `${props.testID!}_iconBars`).testID;
  const el_emotionsContainer = mockTestID(
    'View',
    `${props.testID!}_emotionsContainer`,
  ).testID;

  const el_emotionsData = mockTestID(
    'View',
    `${props.testID!}_emotionsData_0`,
  ).testID;

  it(`should render #${sut_container}`, () => {
    const sut = findByTestId(sut_container);
    expect(sut).toBeTruthy();
  });

  it(`should render #${el_content}`, () => {
    const sut = findByTestId(el_content);
    expect(sut).toBeTruthy();
  });

  it(`should render #${el_percentTitle}`, () => {
    const sut = findByTestId(el_percentTitle);
    expect(sut).toBeTruthy();
  });

  it(`should render #${el_progressContainer}`, () => {
    const sut = findByTestId(el_progressContainer);
    expect(sut).toBeTruthy();
  });

  it(`should render #${el_waveContainer}`, () => {
    const sut = findByTestId(el_waveContainer);
    expect(sut).toBeTruthy();
  });

  it(`should render #${el_row}`, () => {
    const sut = findByTestId(el_row);
    expect(sut).toBeTruthy();
  });

  it(`should render #${el_wave}`, () => {
    const sut = findByTestId(el_wave);
    expect(sut).toBeTruthy();
  });

  it(`should render #${el_panGestureHandler}`, () => {
    const sut = findByTestId(el_panGestureHandler);
    expect(sut).toBeTruthy();
  });

  it(`should render #${el_animatedView}`, () => {
    const sut = findByTestId(el_animatedView);
    expect(sut).toBeTruthy();
  });

  it(`should render #${el_dragDropButton}`, () => {
    const sut = findByTestId(el_dragDropButton);
    expect(sut).toBeTruthy();
  });

  it(`should render #${el_iconBars}`, () => {
    const sut = findByTestId(el_iconBars);
    expect(sut).toBeTruthy();
  });

  it(`should render #${el_emotionsContainer}`, () => {
    const sut = findByTestId(el_emotionsContainer);
    expect(sut).toBeTruthy();
  });

  it(`should render #${el_emotionsData}`, () => {
    const sut = findByTestId(el_emotionsData);
    expect(sut).toBeTruthy();
  });

  it(`should render a snapshot`, () => {
    expect(toJSON()).toMatchSnapshot();
  });
});
