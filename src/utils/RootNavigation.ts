import {createRef} from 'react';

export const navigationRef: any = createRef();

export const navigate = (name: string, params?: any) => {
  navigationRef.current?.navigate(name, params);
};

export const goBack = () => {
  navigationRef.current?.goBack();
};

export const params = () => {
  navigationRef.current?.params;
};
