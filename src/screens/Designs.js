import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import JoinNow from '../share/JoinNow/JoinNow';
import Text from '../share/Text/Text';
import { colors } from '../theme/colors';
import { spacings } from '../theme/spacings';

export default function Designs({ navigation }) {
    const navigate = useNavigation()
    return (
        <SafeAreaView style={{ backgroundColor: colors.blue }}>

            <View style={{ padding: spacings[2], marginLeft: spacings[2] }}>
                <Pressable
                    style={styles.backBtn}
                    onPress={() => navigate.goBack()}
                >
                    <AntDesign name="arrowleft" size={18} color="white" />
                </Pressable>
            </View>


            <View style={styles.container}>
                <Text preset='h2' style={{ color: colors.white, marginBottom: spacings[2] }}>Designs</Text>
                <Text preset='h5' style={{ color: colors.white }}>The wide sections of course with learning methods that are suitable for you.</Text>
            </View>
            <ScrollView>
                <View style={styles.joinNowContainer}>
                    <JoinNow
                        onPress={() => navigation.navigate('ToutorDetail')}
                        user='99'
                        title="Why is it important to schedule a meeting?"
                    />
                    <JoinNow
                        onPress={() => navigation.navigate('ToutorDetail')}
                        user='100'
                        title='The complete video production training'
                    />
                    <JoinNow
                        onPress={() => navigation.navigate('ToutorDetail')}
                        user='150'
                        title='Providing updates on a projects status'
                    />
                </View>

                <StatusBar style="light" />
            </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: spacings[4],
        paddingBottom: spacings[7],
    },
    joinNowContainer: {
        flex: 1,
        backgroundColor: colors.white,
        padding: spacings[4],
        marginBottom: 180
    },
    backBtn: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        borderWidth: 0.3,
        borderColor: colors.grey,

    }
})