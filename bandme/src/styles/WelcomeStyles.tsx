/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

export const stylesWelcome = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    },
    title:{
        textAlign: 'center',
        fontSize: 30,
        justifyContent: 'center',
        marginTop: 20,
        color: '#000000'
    },
    imageContainer: {
        alignItems: 'center',
        marginVertical: 20
    },
    containerButtons: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    buttonLoginContainer: {
        marginVertical: 10,

    },
    buttonLogin: {
        height: 50,
        flexDirection: 'row',
        backgroundColor: '#ff8f00',
        borderRadius: 50,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    titleButton: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 20,
    }, 
    containerTermsConditions:{
        marginTop: 20,
        alignSelf: 'center'
    },
    termsAndCondition: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14
    },
    termsAndConditionTopPart: {
        textAlign: 'center',
        fontSize: 16,
        color: '#9e9e9e'
    },
    termsAndConditionContainerBottomPart: {
        flexDirection: 'row',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    }
});