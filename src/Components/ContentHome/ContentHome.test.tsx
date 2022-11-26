import React from 'react';
import {render} from '@testing-library/react-native';
import {mockTestID} from '../../utils/qualityAssurance';
import {ThemeProviderWrapper as wrapper} from '../../utils/ThemeProviderWrapper';
import {ContentHome, IContentHome} from '../ContentHome';

describe('Components/ContentHome', () => {
  let props: IContentHome = {
    testID: 'Home',
  };
  const {findByTestId, toJSON} = render(<ContentHome {...props} />, {
    wrapper,
  });

  const sut_container = mockTestID('View', props.testID!).testID;
  const sut_column = mockTestID('View', `${props.testID!}_column`).testID;
  const sut_row = mockTestID('View', `${props.testID!}_row`).testID;
  const sut_btn = mockTestID('View', `${props.testID!}_btn`).testID;

  it(`should render #${sut_container}`, () => {
    const sut = findByTestId(sut_container);
    expect(sut).toBeTruthy();
  });

  it(`should render #${sut_column}`, () => {
    const sut = findByTestId(sut_column);
    expect(sut).toBeTruthy();
  });

  it(`should render #${sut_row}`, () => {
    const sut = findByTestId(sut_row);
    expect(sut).toBeTruthy();
  });

  it(`should render #${sut_btn}`, () => {
    const sut = findByTestId(sut_btn);
    expect(sut).toBeTruthy();
  });

  it(`should render a snapshot`, () => {
    expect(toJSON()).toMatchSnapshot();
  });
});
