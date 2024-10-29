import { FlatList, Text, StyleSheet } from "react-native";
import { IFlatUSers } from "@/types/users.types";
import USerCard from "./UserCard";

export default function UsersList({ users = [] }: IFlatUSers ) {

  return (
    <>
      <FlatList
        data={users}
        scrollEnabled={false}
        contentContainerStyle={{ flexGrow: 1 }}
        keyExtractor={(item) => item?.id?.toString()}
        renderItem={(item) => ( (item?.item?.name ? (<USerCard item={item.item} />) : null) )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No users to display</Text>
        }
        />
    </>
  )
}

const styles = StyleSheet.create({
  emptyText: {
    textAlign: 'center',
    color: '#666',
    marginTop: 20,
    fontSize: 16
  }
});
