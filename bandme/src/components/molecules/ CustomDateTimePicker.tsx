/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
//import { useValidateDateTimePicker } from '../../hooks/useValidateDateTimePicker';


//https://www.npmjs.com/package/@react-native-community/datetimepicker

interface Props {
  setDatePicker: (dateSelected: string) => void;
  setTimePicker: (timeSelected: string) => void;
}

export const CustomDateTimePicker = ({ setDatePicker, setTimePicker }: Props) => {

    const [dateNow, setDate] = useState(new Date());
    const [displayMode, setDisplayMode] = useState<any>('date');
    const [show, setShow] = useState(false);

    const [ getEventDate, setEventDate ] = useState<string>('');
    const [ getEventTime, setEventTime ] = useState<string>('');
    const [ getCurrentMode, setCurrentMode ] = useState<string>('');

    //const { setDatetimePicked } = useValidateDateTimePicker();
    //const { setDatePicker } = useCreatePost();

    const monthNames = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec' ];

    function parseTime(hour: number): String {
      if (JSON.stringify(hour).length <= 1) {
        return '0' + JSON.stringify(hour);
      } else {
        return JSON.stringify(hour);
      }
    }

    const onChange = (event: Event, selectedDate?: Date) => {
      const currentDate = selectedDate || dateNow;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
      console.log('timesstamp: ' + currentDate.getTime() / 1000);
      //const timeStamp = currentDate.getTime() / 1000; //para el backend

      if (getCurrentMode === 'date') {
        const dateSelected = currentDate.getDate() + ' ' + monthNames[currentDate.getMonth()] + ' ' + currentDate.getFullYear();
        console.log('EVENT DATE DATA: ' + dateSelected);
        setEventDate(dateSelected);
        setDatePicker(dateSelected);
      } else {
        setEventTime(parseTime(currentDate.getHours()) + ':' + parseTime(currentDate.getMinutes()));
        const timeSelected = currentDate.getHours() + ':' + currentDate.getMinutes();
        setTimePicker(timeSelected);
      }
    };

    const showMode = (currentMode: any) => {
      setCurrentMode(currentMode);
      if (show){
        setShow(false);
      } else {
        setShow(true);
      }
      setDisplayMode(currentMode);
    };

    const showDatepicker = () => {
      showMode('date');
    };

    const showTimepicker = () => {
      showMode('time');
    };


  return (
    <View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flex: 1, alignItems: 'center', paddingEnd: 4}}>
          <TouchableOpacity
            style={style.buttonDateTime}
            onPress={showDatepicker}>
              <Text style={{color: '#616161', fontWeight: 'bold'}}>
                {
                  getEventDate.length > 1 ? getEventDate : 'Event Date'
                }
              </Text>
          </TouchableOpacity>
        </View>


        <View style={{flex: 1, alignItems: 'center', paddingStart: 4}}>
          <TouchableOpacity
            style={style.buttonDateTime}
            onPress={showTimepicker}>
              <Text style={{color: '#616161', fontWeight: 'bold'}}>
                {
                  getEventTime.length > 1 ? getEventTime : 'Event Time'
                }
              </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={dateNow}
            mode={displayMode}
            display="spinner"
            style={{backgroundColor: '#ff8f00', marginVertical: 16}}
            is24Hour={true}
            onChange={onChange}
          />
        )}
      </View>
    </View>
  );
};


const style = StyleSheet.create({
  buttonDateTime: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
