import React from 'react';
import {
    TouchableOpacity,
    View,
    Text,
    Image,
} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { COLORS, FONTS, SIZES, icons } from '../../constants';

type ItemProps = {
    title: string,
    containerStyle: object
    onPress: () => void,
    onPressEdit: () => void
};

const TodoItem = ({ title, containerStyle, onPress, onPressEdit }: ItemProps) => {

    return (
        <View
            style={{
                flexDirection: 'row',
                borderRadius: SIZES.radius,
                backgroundColor: "#282c34",
                ...containerStyle
            }}
            >
            <View style={{ flex: 4, marginLeft: 20 }}>
                <Text style={{ ...FONTS.h3, fontSize: 17 }}>{title}</Text>
            </View>

            {/* Delete & Edit */}
            <View style={{ flexDirection: 'row', position: 'absolute', bottom: 5, right: SIZES.radius }}>
                <Image source={icons.edit} style={{ width: 20, height: 20, tintColor: COLORS.LIGHT_YELLOW }} />
                <TouchableWithoutFeedback onPress={onPressEdit}>
                    <Text style={{ color: COLORS.darkGray2, ...FONTS.body5 }}> {'Edit'} </Text>
                </TouchableWithoutFeedback>
                <View style={{width: 10}}/>
                <Image source={icons.deleteIcon} style={{ width: 20, height: 20, tintColor: COLORS.red }} />
                <TouchableWithoutFeedback onPress={onPress}>
                    <Text style={{ color: COLORS.darkGray2, ...FONTS.body5 }}> {'Delete'} </Text>
                </TouchableWithoutFeedback>
            </View>
        </View >
    )
}

export default TodoItem;