import { AntDesign, FontAwesome5, Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { Image, Pressable, ScrollView, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Text from '../share/Text/Text'
import { colors } from '../theme/colors'
import { spacings } from '../theme/spacings'



export default function ToutorDetails() {
    const navigate = useNavigation()
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', padding: spacings[2], position: 'relative' }}>
                <Image
                    source={require('../../assets/zoom.png')}
                    style={{ width: '60%', height: 150, }}
                />
                <Pressable
                    onPress={() => navigate.goBack()}
                    style={styles.backBtn}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <AntDesign name="arrowleft" size={24} color="black" />
                        <Text preset='h4' style={{ marginLeft: spacings[2] }}>Back</Text>
                    </View>
                </Pressable>
            </View>

            <ScrollView>
                <View style={styles.content}>
                    <View style={styles.hrLine}></View>
                    <Text preset='h2' style={{ color: colors.grey, marginBottom: spacings[4] }}>UI/UX Design 🚀</Text>
                    <Text preset='h1' style={{ color: colors.white, textTransform: 'uppercase', marginBottom: spacings[4] }}>ideas for desinging the right solution</Text>
                    <Text preset='h5' style={{ color: colors.grey, marginBottom: spacings[4], }}>An effective way to develop innovative ideas is through conducting brainstorming sessions with your team. These are collaborative meetings that encourage employees to listen.</Text>


                    <View style={styles.profileContainer}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={styles.profile}>
                                <Image
                                    source={require('../../assets/profile.png')}
                                    style={{ width: 50, height: 50 }}
                                />
                            </View>
                            <View>
                                <Text preset='h4' style={{ color: colors.white, letterSpacing: 1.4 }}>Tasfia Khanom</Text>
                                <Text preset='small' style={{ color: colors.grey }}>UI Desiner Leader</Text>
                            </View>
                        </View>
                        <FontAwesome5 name="microphone" size={24} color={colors.yellow} />
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: spacings[6] }}>
                        <View style={styles.icon}>
                            <FontAwesome5 name="microphone" size={24} color={colors.yellow} />
                            <Text preset='small' style={{ color: colors.grey, marginTop: spacings[2] }} > Expert</Text>
                        </View>
                        <View style={styles.icon}>
                            <Ionicons name="gift-sharp" size={24} color={colors.yellow} />
                            <Text preset='small' style={{ color: colors.grey, marginTop: spacings[2] }} > Gifts</Text>
                        </View>
                        <View style={styles.icon}>
                            <FontAwesome5 name="video" size={24} color={colors.yellow} />
                            <Text preset='small' style={{ color: colors.grey, marginTop: spacings[2] }} > Videos</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', marginTop: spacings[7] }}>

                        <Pressable
                            style={styles.btn}
                        >
                            <Text preset='h4' style={{ textAlign: 'center', color: colors.white }}>Join Now</Text>
                        </Pressable>

                        <View style={styles.watchUser}>
                            <Ionicons name="people-outline" size={20} color="#45c4b0" />
                            <Text style={{ marginLeft: spacings[1], color: colors.green }} >400</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <StatusBar style='dark' />
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: colors.blue,
        padding: spacings[4]
    },
    hrLine: {
        width: 60,
        borderBottomWidth: 2,
        borderColor: colors.green,
        marginBottom: spacings[4],
        borderRadius: 3,
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: .5,
        borderColor: colors.grey,
        paddingHorizontal: spacings[3],
        paddingVertical: spacings[2],
        borderRadius: 8
    },
    profile: {
        width: 60,
        height: 60,
        backgroundColor: colors.green,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        marginRight: spacings[4],
    },
    icon: {
        width: 100,
        height: 94,
        borderWidth: .4,
        borderColor: colors.grey,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
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
    backBtn: {
        position: 'absolute',
        left: spacings[4],
        top: 0
    }
})