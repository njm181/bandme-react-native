import React from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const DashboardScreen = () => {

//  PROHIBIR HACER BACK, SI HACE BACK QUE MANDE AL WELCOME Y CIERRE LA SESION O QUE PREGUNTE SI DESEA SALIR DE LA APP

    return (
        <SafeAreaView>
            {/* cuando ya tenga todos los datos del usuario
            ahi voy a poder guardalos en un context, o sea usar redux
            de forma global para abastecer el resto de los flujos
            en login no amerita usarlo ya que no hay persistencia de datos en ese flujo
            mas que pasaje de parametros de una vista a la otra de forma directa */}
            <Text>DASHBOARD</Text>
        </SafeAreaView>
    )
}

// Realm DB https://docs.mongodb.com/realm/sdk/react-native/
// o lo guardo en cache https://www.npmjs.com/package/react-native-cache
//o usar firebase real time database
//todo esto en dashboard para cuando obtenga todos los datos del usuario