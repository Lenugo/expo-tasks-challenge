import { FlatList, View, Text, StyleSheet } from "react-native";
import { IFlatUSers } from "@/types/users.types";

export default function UsersList({ users = [] }: IFlatUSers ) {

  return (
    <>
      <FlatList
        data={users}
        scrollEnabled={false}
        contentContainerStyle={{ flexGrow: 1 }}
        keyExtractor={(item) => item?.id?.toString()}
        renderItem={(item) => {
          return (item?.item?.name ? 
            (
            <View style={styles.itemContainer}>
                <View style={styles.letterContainer}>
                  <Text style={styles.letterChar}>{item.item.name.charAt(0) }</Text>
                </View>
              <View style={styles.viewInfo}>
                <Text style={styles.usernameInfo}>{item.item.name}</Text>
              </View>
            </View>
          )
            : null)
        } }
      />
    </>
  )
}


const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  letterContainer: {
    backgroundColor: '#ded',
    position: 'absolute',
    zIndex: 1,
    bottom: 2,
    left: 2,
    padding: 20,
    borderRadius: 45,
  },
  letterChar: {
    fontWeight: 'bold',
    fontSize: 14
  },
  viewInfo: {
    marginTop: 24,
    justifyContent: 'center',
    flex: 1,
    marginRight: 10,
    marginLeft: 60,
    paddingTop: 20,
    paddingBottom: 14,
    borderBottomColor: '#eee',
    borderBottomWidth: 2,
  },
  usernameInfo: {
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 20,
    paddingBottom: 10
  }
});
