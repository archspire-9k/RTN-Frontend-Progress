import { View, Text, } from 'react-native';
import { COLORS, FONTS } from '../../constants';
import LinearGradient from 'react-native-linear-gradient';

const Header = (title, titleStyle) => {
    return (
        <View
        style={{
            height: 100,
            justifyContent: 'flex-start'
        }}
    >
        {/* Title */}
        <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Text style={{ ...FONTS.h1, ...titleStyle }}>{title}</Text>
            </View>
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 2 }}
            colors={[COLORS.transparent, COLORS.black]}
            style={{
                position: 'absolute',
                top: -20,
                left: 0,
                right: 0,
                height: 100,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15
            }}
        />
            
        </View>
    )
}

export default Header;