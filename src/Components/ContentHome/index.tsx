import React from 'react';
import {navigate} from '@src/utils/RootNavigation';
import {assignTestId} from '@utils/qualityAssurance';
import {BtnEmotion} from '@Components/BtnEmotion';
import * as Styled from './styles';

export interface IContentHome {
  testID?: string;
  emotions?: string[];
}

export const ContentHome: React.FC<IContentHome> = ({
  testID = 'ContentHome',
  emotions,
}) => {
  return (
    <Styled.Content {...assignTestId('View', testID)}>
      <Styled.Column {...assignTestId('View', `${testID}_column`)}>
        {emotions?.map((columnItem: any, columnIndex: any) => {
          return (
            <Styled.Row
              {...assignTestId('View', `${testID}_row`)}
              key={columnIndex.toString()}>
              {columnItem.map((emotionItem: any, emotionIndex: any) => {
                return (
                  <BtnEmotion
                    key={emotionItem.id.toString()}
                    {...assignTestId('View', `${testID}_btn_${emotionIndex}`)}
                    emoji={`${emotionItem.emoji}`}
                    title={`${emotionItem.name}`}
                    handlePress={() =>
                      navigate('Details', {
                        emoji: emotionItem?.emoji,
                        currentEmotion: emotionItem?.name,
                      })
                    }
                  />
                );
              })}
            </Styled.Row>
          );
        })}
      </Styled.Column>
    </Styled.Content>
  );
};
