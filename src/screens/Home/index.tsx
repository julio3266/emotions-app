import React, {useEffect, useState} from 'react';
import * as Styled from './styles';
import axios from 'axios';

import {assignTestId} from '@utils/qualityAssurance';
import {ContentHome} from '../../components/ContentHome';
import {Loader} from '@Components/Loader';

import {Header} from '@Components/Header';

export interface IHomeProps {
  testID?: string;
}

export const Home: React.FC<IHomeProps> = ({testID = 'Home'}) => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    axios
      .get('https://my-json-server.typicode.com/julio3266/mockjson/emotions')
      .then((emotionItem: any) => {
        const emotions = [];
        for (let i = 0; i < emotionItem.data.length; i += 4) {
          const parsed = emotionItem.data.slice(i, i + 4);
          emotions.push(parsed);
        }
        setData(emotions);
        setLoading(false);
      })
      .catch((error: any) => {
        setLoading(false);
        return error;
      });
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Styled.Container {...assignTestId('StatusBar', `${testID}_statusBar`)}>
          <Header
            {...assignTestId('View', `${testID}_header`)}
            title={'How are you feeling?'}
            buttonColorType={'dark'}
            isBack={false}
            isTitle={true}
          />
          <ContentHome
            {...assignTestId('View', `${testID}_contentHome`)}
            key={data}
            emotions={data}
          />
        </Styled.Container>
      )}
    </>
  );
};
