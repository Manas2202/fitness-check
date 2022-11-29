import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    headerContainer : {
        marginTop: 25,
        height: 50,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    headerRight : {
        height: 50,
        width: 50,
        justifyContent: 'center',
        position: 'relative',
        cursor: 'pointer',
    },
    notificationDropdownParent : {
        position: 'absolute',
        top: 50,
        right: 0,
        width: 150,
        height: 150,
        backgroundColor: '#FFF',
        borderRadius: 5,
        zIndex: 2000,
        shadowOffset: {width: 4, height: -4},
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 3,
    },
    notificationDropdown : {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        paddingHorizontal: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#E5E5E5',
    },
    notificationText : {
        fontSize: 14,
        color: '#000',
        fontWeight: 'bold',
    },  
    headerLeft : {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
    },
    headerLogo:{
        width: 50,
        height: 50,
        borderRadius: 50/2,
    },
    headerUserInfo : {
        height:50,
        justifyContent: 'center',
        marginLeft: 10,
    },
    userFullName:{
        fontSize:16,
        fontWeight:'bold',
    },
    userAge : {
        fontSize: 12,
    },
    notificationIcon:{
        width: 30,
        height: 30,
        alignSelf: 'center',
    },
    hiddenClass : {
        display: 'none',
    }
})