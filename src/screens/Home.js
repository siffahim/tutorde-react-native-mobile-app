import { AntDesign, FontAwesome5, Ionicons, MaterialIcons, Octicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, ScrollView, StyleSheet, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ItemsBtn from '../share/ItemsBtn/ItemsBtn';
import Text from '../share/Text/Text';
import { colors } from '../theme/colors';
import { spacings } from '../theme/spacings';

export default function Home({ navigation }) {
    return (
        <SafeAreaView style={{ paddingHorizontal: spacings[2] }}>
            <ScrollView>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <FontAwesome5 name="telegram-plane" size={28} color={colors.yellowLight} />
                        <Text style={{ marginLeft: spacings[2], color: colors.blue }} preset='h3'>𝓣𝓾𝓽𝓸𝓻𝓭𝓮</Text>
                    </View>
                    <Text preset='h1' style={{ marginBottom: spacings[3] }}>...</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        source={require('../../assets/zm.png')}
                        style={{ width: 250, height: 230 }}
                    />
                    <View>
                        <View style={[styles.btnRivew, { backgroundColor: colors.yellowLight }]}>
                            <AntDesign name="star" size={24} color="white" />
                            <Text style={{ marginLeft: spacings[2], color: colors.white }}>4.8</Text>
                        </View>
                        <View style={[styles.btnRivew, { backgroundColor: colors.red }]}>
                            <AntDesign name="heart" size={24} color="white" />
                            <Text style={{ marginLeft: spacings[2], color: colors.white }}>200</Text>
                        </View>
                    </View>
                </View>

                <View style={{ paddingHorizontal: spacings[3] }}>
                    <TextInput
                        placeholder='Search course'
                        style={styles.input}
                    />
                </View>

                <View style={styles.container}>
                    <ItemsBtn
                        onPress={() => navigation.navigate('Toutor')}
                        title='Toutors'
                        bgColor={colors.yellowLight}
                    >
                        <FontAwesome5 name="microphone" size={24} color="white" />
                    </ItemsBtn>
                    <ItemsBtn
                        onPress={() => navigation.navigate('Bussiness')}
                        title='Bussiness'
                        bgColor={colors.redLight}
                    >
                        <MaterialIcons name="business-center" size={24} color="white" />
                    </ItemsBtn>
                    <ItemsBtn
                        onPress={() => navigation.navigate('Videos')}
                        title='Videos'
                        bgColor={colors.green}
                    >
                        <Octicons name="video" size={24} color="white" />
                    </ItemsBtn>
                    <ItemsBtn
                        onPress={() => navigation.navigate('Designs')}
                        title='Designs'
                        bgColor={colors.red}
                    >
                        <MaterialIcons name="design-services" size={24} color="white" />
                    </ItemsBtn>
                </View>

                <View style={styles.textVideo}>
                    <View style={{ width: 60, borderBottomWidth: 2, borderColor: colors.green, marginBottom: spacings[4], borderRadius: 3 }}></View>
                    <Text style={{ color: colors.white }}>Video Quality</Text>
                    <Text preset='h2' style={{ color: colors.white, textTransform: 'uppercase', marginBottom: spacings[6], marginTop: spacings[4] }}>The complete video production training</Text>

                    <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                        <Pressable
                            style={styles.joinBtn}
                            onPress={() => navigation.navigate('ToutorDetail')}
                        >
                            <Text preset='h4' style={{ textAlign: 'center', color: colors.white }}>Join Now</Text>
                        </Pressable>
                        <View style={styles.watchUser}>
                            <Ionicons name="people-outline" size={20} color="#45c4b0" />
                            <Text style={{ marginLeft: spacings[1], color: colors.green }} >4000</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <StatusBar style='dark' />
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        borderWidth: 1,
        paddingHorizontal: spacings[4],
        paddingVertical: spacings[2],
        borderColor: colors.grey,
        borderRadius: 3,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginTop: spacings[2],
        padding: spacings[4]
    },
    btn: {
        width: 150,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.green,
        paddingHorizontal: spacings[2],
        paddingVertical: spacings[3],
        borderRadius: 3,
        marginBottom: spacings[2],
    },
    icon: {
        width: 45,
        height: 45,
        borderRadius: 25,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnRivew: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.green,
        marginBottom: spacings[5],
        paddingHorizontal: spacings[2],
        paddingVertical: spacings[1],
        borderRadius: 3,
    },
    joinBtn: {
        width: 150,
        backgroundColor: colors.green,
        paddingHorizontal: spacings[4],
        paddingVertical: spacings[4],
        borderRadius: 30
    },
    textVideo: {
        backgroundColor: colors.blue,
        padding: spacings[5],
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    watchUser: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: spacings[2],
        paddingVertical: spacings[1],
        borderRadius: 3,
        opacity: .6
    },
})