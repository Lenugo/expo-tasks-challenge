import { IUsers } from "@/types/users.types";
import React from "react";
import { StyleSheet, View, Text } from 'react-native'

export default function USerCard({ item }: { item: IUsers }) {

  return (
    <View style={styles.itemContainer} testID='user-card-container'>
      <View style={styles.letterContainer}>
        <Text style={styles.letterChar}>{item.name.charAt(0)}</Text>
      </View>
      <View style={styles.viewInfo}>
        <Text style={styles.usernameInfo}>{item.name}</Text>
      </View>
    </View>
  )
};

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
