import React, {useEffect, useState} from "react";
import {Button, Text, View} from "react-native";
import BleManager from "react-native-ble-manager";

const BT = () => {
    const [age, setAge] = useState(0);

    useEffect(() => {
        BleManager.start({ showAlert: false }).then(() => {
            // Success code
            console.log("Module initialized");
        });
        console.log("Mondulo carado")
    }, [])

    const scan = () => {
        BleManager.scan([], 5, true).then(() => {
            // Success code
            console.log("Scan started");
        });
    }

    return (
        <View>
            <Text>BT test {age}</Text>
            <Button title="Test" onPress={scan} />
        </View>
    );
}

export default BT