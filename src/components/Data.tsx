import { View, Text, StyleSheet } from "react-native";
import { DataProps } from "../utils/types";

const Data = ({ data }: { data: DataProps[] }) => (
  <View style={styles.table}>
    {data.map(({ title, value }, index) => (
      <View
      key={index}
        style={{
          ...styles.data,
          backgroundColor: index % 2 ? "#457B9D" : "transparent",
        }}
      >
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.text}>{value}</Text>
      </View>
    ))}
  </View>
);

export default Data;

const styles = StyleSheet.create({
  table: {
    backgroundColor: "#1D3557",
    borderRadius: 20,
    marginHorizontal: 20,
    marginVertical: 30
  },
  data: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-between",
  },
  text: {
    color: "#F1FAEE",
  }
});
