import React from "react";
import { View, Text } from "react-native";
import PropTypes from 'prop-types';

export default function ResultImc(props) {
    return (
        <View>
            <Text>{props.messageResultImc}</Text>
            <Text>{props.resultImc}</Text>
        </View>
    );
}

ResultImc.propTypes = {
    messageResultImc: PropTypes.string.isRequired,
    resultImc: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};