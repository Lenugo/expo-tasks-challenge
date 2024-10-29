import { Animated, StyleSheet, View, Text } from "react-native";
import { IWrapperProps } from "@/types/wrapper.types";

export default function WrapperScrollView({ title,  children }: IWrapperProps) {

  return (
    <View style={styles.wrapperContainer}>
      <Animated.ScrollView scrollEventThrottle={16}>
        <View style={styles.wrapperContent}>
          <View style={styles.titleContainer}>
            <Text style={styles.tileTitle}>{ title }</Text>
          </View>
          {children}
        </View>
      </Animated.ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapperContainer: {
    flex: 1,
    backgroundColor: '#f9f9f9'
  },
  wrapperContent: {
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: 'hidden',
    marginTop: 24,
    paddingVertical: 40
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  tileTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32
  }
});
