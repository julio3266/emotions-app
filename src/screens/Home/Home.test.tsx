import React from 'react';
import {render} from '@testing-library/react-native';
import {mockTestID} from '../../utils/qualityAssurance';
import {ThemeProviderWrapper as wrapper} from '../../utils/ThemeProviderWrapper';
import {Home, IHomeProps} from '../Home';

describe('Components/Home', () => {
  let props: IHomeProps = {
    testID: 'Home',
  };
  const {findByTestId, toJSON} = render(<Home {...props} />, {
    wrapper,
  });

  const sut_container = mockTestID('View', props.testID!).testID;
  const sut_header = mockTestID('View', `${props.testID!}_header`).testID;
  it(`should render #${sut_container}`, () => {
    const sut = findByTestId(sut_container);
    expect(sut).toBeTruthy();
  });

  it(`should render #${sut_header}`, () => {
    const sut = findByTestId(sut_header);
    expect(sut).toBeTruthy();
  });

  it(`should render a snapshot`, () => {
    expect(toJSON()).toMatchSnapshot();
  });
});
