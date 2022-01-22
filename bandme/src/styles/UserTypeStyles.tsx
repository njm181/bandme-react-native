/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

export const stylesUserType = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    },
    title: {
        textAlign: 'center',
        fontSize: 25,
        marginBottom: 16,
        color: '#000000'
    },
    buttonVerticalContainer: {
        justifyContent: 'center',
        marginVertical: 20
    },
    buttonHorizontalContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    buttonCard: {
        width: 100,
        height: 100, 
        borderRadius: 20,
        backgroundColor: 'gray',
        alignSelf: 'center',
        justifyContent: 'center',
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
    buttonCardSelected: {
        width: 100,
        height: 100,
        borderRadius: 20,
        borderColor: '#ffffff',
        borderWidth: 4,
        backgroundColor: '#ff8f00',
        alignSelf: 'center',
        justifyContent: 'center',
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
    buttonText: {
        fontSize: 16,
        color: '#000000'
    },
    
});