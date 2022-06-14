import { AntDesign, Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, View } from 'react-native';
import { colors } from '../../theme/colors';
import { spacings } from '../../theme/spacings';
import Text from '../Text/Text';


export default function JoinNow({ title, user, onPress }) {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View>
                    <View style={styles.hrLine}></View>

                    <Text style={{ color: colors.white }}>Video Quality</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <View style={[styles.btnRivew]}>
                        <AntDesign name="star" size={24} color={colors.yellowLight} />
                        <Text style={{ marginLeft: spacings[2], color: colors.white }}>4.8</Text>
                    </View>
                    <View style={[styles.btnRivew]}>
                        <AntDesign name="heart" size={24} color={colors.red} />
                        <Text style={{ marginLeft: spacings[2], color: colors.white }}>200</Text>
                    </View>
                </View>
            </View>

            <Text preset='h2' style={{ color: colors.white, textTransform: 'uppercase', marginBottom: spacings[6], marginTop: spacings[4] }}>{title}</Text>


            <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>

                <Pressable
                    style={styles.btn}
                    onPress={onPress}
                >
                    <Text preset='h4' style={{ textAlign: 'center', color: colors.white }}>Join Now</Text>
                </Pressable>

                <View style={styles.watchUser}>
                    <Ionicons name="people-outline" size={20} color="#45c4b0" />
                    <Text style={{ marginLeft: spacings[1], color: colors.green }} >{user}</Text>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.blue,
        padding: spacings[5],
        marginBottom: spacings[4],
        borderRadius: 20
    },
    btn: {
        width: 150,
        backgroundColor: colors.green,
        paddingHorizontal: spacings[4],
        paddingVertical: spacings[4],
        borderRadius: 30
    },
    watchUser: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: spacings[2],
        paddingVertical: spacings[1],
        borderRadius: 3,
        opacity: .6
    },
    hrLine: {
        width: 60,
        borderBottomWidth: 2,
        borderColor: colors.green,
        marginBottom: spacings[4],
        borderRadius: 3
    },
    btnRivew: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: spacings[5],
        paddingHorizontal: spacings[2],
        paddingVertical: spacings[1],
        borderRadius: 3,
        marginLeft: spacings[0]
    },
})