import { Pressable, StyleSheet, View } from 'react-native'
import { colors } from '../../theme/colors'
import { spacings } from '../../theme/spacings'
import Text from '../Text/Text'

export default function ItemsBtn({ children, bgColor, title, onPress }) {
    return (
        <Pressable
            onPress={onPress}
        >
            <View style={styles.btn}>
                <View style={[styles.icon, { backgroundColor: bgColor }]}>
                    {children}
                </View>
                <Text preset='h5' style={{ marginLeft: spacings[2] }}>{title}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    btn: {
        width: 150,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.white,
        paddingHorizontal: spacings[3],
        paddingVertical: spacings[2],
        borderRadius: 3,
        marginBottom: spacings[2],
        borderWidth: .4,
        borderColor: colors.grey,
    },
    icon: {
        width: 45,
        height: 45,
        borderRadius: 25,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center'
    },
})