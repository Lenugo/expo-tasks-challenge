import { FlatListProps, TextInputProps, TextProps } from "react-native";

export type IUsers = {
  createdAt: string;
  name: string;
  avatar: string;
  id: string;
}

export type IUsersFilter = TextInputProps & {
  searchInput: string;
  onChangeInput: (value: string) => void;
}

export type IFlatUSers =  FlatListProps<IUsers[]> & {
  users: IUsers[];
}

export type IRestarError = TextProps & {
  onCallFnc: () => void;
}