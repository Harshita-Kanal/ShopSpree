import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import CartItem from "./CartItem";

const OrderItem = (props) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <View style={styles.orderItem}>
      <View style={styles.summary}>
        <Text style={styles.totalAmount}>Rs.{props.amount.toFixed(2)} </Text>
        <Text style={styles.date}>{props.date}</Text>
      </View>
      <View style={styles.buttonItem}>
        <Button
          color={Colors.primary}
          title="Show Details"
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  orderItem: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    padding: 10,
    margin: 20,
    fontFamily: "sansita-bold",
  },
  summary: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  totalAmount: {
    fontFamily: "sansita-bold",
    fontSize: 16,
  },
  date: {
    fontSize: 16,
    fontFamily: "sansita-bold",
  },
  buttonItem: {
    // width: "40%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default OrderItem;
