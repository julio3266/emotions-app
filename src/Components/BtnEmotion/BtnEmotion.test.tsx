import React from 'react';
import {render} from '@testing-library/react-native';
import {mockTestID} from '../../utils/qualityAssurance';
import {ThemeProviderWrapper as wrapper} from '../../utils/ThemeProviderWrapper';
import {BtnEmotion, IBtnEmotionProps} from '@Components/BtnEmotion';

describe('Components/BtnEmotion', () => {
  let props: IBtnEmotionProps = {
    testID: 'BtnEmotion',
    emoji: '#x1F603',
    handlePress: jest.fn(),
    title: 'Happy',
  };
  const {findByTestId, toJSON} = render(<BtnEmotion {...props} />, {
    wrapper,
  });

  const sut_container = mockTestID('TouchableOpacity', props.testID!).testID;
  const sut_title = mockTestID('Text', `${props.testID!}_title`).testID;
  const sut_emoji = mockTestID('Text', `${props.testID!}_emoji`).testID;
  it(`should render #${sut_container}`, () => {
    const sut = findByTestId(sut_container);
    expect(sut).toBeTruthy();
  });

  it(`should render #${sut_title}`, () => {
    const sut = findByTestId(sut_title);
    expect(sut).toBeTruthy();
  });

  it(`should render #${sut_emoji}`, () => {
    const sut = findByTestId(sut_emoji);
    expect(sut).toBeTruthy();
  });

  it(`should render a snapshot`, () => {
    expect(toJSON()).toMatchSnapshot();
  });
});
