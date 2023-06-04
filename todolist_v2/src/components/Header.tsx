import { View, Text, } from 'react-native';
import { COLORS, FONTS } from '../../constants';
import LinearGradient from 'react-native-linear-gradient';

type ItemProps = {
    title: string,
    titleStyle: object
};

const Header = ({ title, titleStyle }: ItemProps) => {
    return (
        <View
            style={{
                height: 100,
                justifyContent: 'flex-start',
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15
            }}
        >
            {/* Title */}
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Text style={{ ...FONTS.h1, ...titleStyle }}>{title}</Text>
            </View>

        </View>
    )
}

export default Header;