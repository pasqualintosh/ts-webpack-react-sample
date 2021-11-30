import React from 'react';
import useLocalStorage from '../helpers/useLocalStorage';

type UserDataProviderProps = {};
type UserDataContextState = {
  getCurrentData: () => any;
  setCurrentData: (data: any) => void;
};

const UserDataProviderContext = React.createContext<
  UserDataContextState | undefined
>(undefined);

export const UserDataProvider: React.FC<UserDataProviderProps> = ({
  children,
}): JSX.Element => {
  const defaultData: any = {};
  const [data, setData] = useLocalStorage('data', defaultData);

  const getCurrentData = (): any => {
    return data;
  };

  const setCurrentData = (data: any): void => {
    setData({ ...data });
  };

  return (
    <UserDataProviderContext.Provider
      value={{
        getCurrentData,
        setCurrentData,
      }}>
      {children}
    </UserDataProviderContext.Provider>
  );
};

export const useUserDataProviderContext = (): UserDataContextState => {
  const context = React.useContext(UserDataProviderContext);

  if (context === undefined) {
    throw new Error('UserDataProviderContext must be used with a Provider');
  }

  return context;
};
