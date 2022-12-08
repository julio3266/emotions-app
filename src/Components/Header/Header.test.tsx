import React from 'react';
import {render} from '@testing-library/react-native';
import {mockTestID} from '@utils/qualityAssurance';
import {ThemeProviderWrapper as wrapper} from '@utils/ThemeProviderWrapper';
import {Header, IHeaderProps} from '@Components/Header';

describe('Components/Header', () => {
  let props: IHeaderProps = {
    testID: 'Header',
    isBack: true,
    isTitle: true,
    title: 'How are you feeling?',
    handlePress: jest.fn(),
  };
  const {findByTestId, toJSON} = render(<Header {...props} />, {
    wrapper,
  });

  const sut_container = mockTestID('View', props.testID!).testID;
  const el_backButton = mockTestID(
    'Image',
    `${props.testID!}_backButton`,
  ).testID;
  const el_statusBar = mockTestID(
    'StatusBar',
    `${props.testID!}_statusBar`,
  ).testID;

  it(`should render #${sut_container}`, () => {
    const sut = findByTestId(sut_container);
    expect(sut).toBeTruthy();
  });

  it(`should render #${el_statusBar}`, () => {
    const sut = findByTestId(el_statusBar);
    expect(sut).toBeTruthy();
  });

  it(`should render #${el_backButton}`, () => {
    const sut = findByTestId(el_backButton);
    expect(sut).toBeTruthy();
  });

  it(`should render a snapshot`, () => {
    expect(toJSON()).toMatchSnapshot();
  });
});
