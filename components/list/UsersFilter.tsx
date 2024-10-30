import React from "react";
import { TextInput, StyleSheet } from 'react-native';
import { IUsersFilter } from "@/types/users.types";

export default function UsersFilter({ searchInput, onChangeInput }: IUsersFilter) {
  return (
    <TextInput
      style={styles.container}
      value={searchInput}
      onChangeText={onChangeInput}
      placeholder="Search your contact"
      autoFocus
    />
  )
};

const styles = StyleSheet.create({
  container: {
    borderBottomColor: '#888',
    borderBottomWidth: 1
  }
});
