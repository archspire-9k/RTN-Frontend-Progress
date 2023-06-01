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
    onPress: () => void
};

const TodoItem = ({ title, containerStyle, onPress }: ItemProps) => {
    //save the food in favourites ()
    const [save, setSave] = React.useState(false);

    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                borderRadius: SIZES.radius,
                backgroundColor: "#282c34",
                ...containerStyle
            }}
            onPress={onPress}>
            <View style={{ flex: 4, marginLeft: 20 }}>
                <Text style={{ ...FONTS.h3, fontSize: 17 }}>{title}</Text>
            </View>

            {/* Delete & Edit */}
            <View style={{ flexDirection: 'row', position: 'absolute', bottom: 5, right: SIZES.radius }}>
                <Image source={icons.edit} style={{ width: 20, height: 20, tintColor: save ? COLORS.LIGHT_YELLOW : COLORS.darkGray }} />
                <TouchableWithoutFeedback onPress={() => setSave(!save)}>
                    <Text style={{ color: COLORS.darkGray2, ...FONTS.body5 }}> {save ? 'Saved' : 'Edit'} </Text>
                </TouchableWithoutFeedback>
                <Image source={icons.deleteIcon} style={{ width: 20, height: 20, tintColor: save ? COLORS.red : COLORS.darkGray }} />
                <TouchableWithoutFeedback onPress={() => setSave(!save)}>
                    <Text style={{ color: COLORS.darkGray2, ...FONTS.body5 }}> {save ? 'Saved' : 'Delete'} </Text>
                </TouchableWithoutFeedback>
            </View>
        </TouchableOpacity >
    )
}

export default TodoItem;