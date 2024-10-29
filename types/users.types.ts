import { FlatListProps, TextProps } from "react-native";

export type IUsers = {
  createdAt: string;
  name: string;
  avatar: string;
  id: string;
}

export type IFlatUSers = FlatListProps<IUsers[]> & {
  users: IUsers[];
}

export type IRestarError = TextProps & {
  onCallFnc: () => void;
}