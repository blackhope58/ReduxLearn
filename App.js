import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

import {legacy_createStore as createStore} from 'redux';
import {Provider, useDispatch, useSelector} from 'react-redux';

const initialState = {
  counter: 0,
};

function reducers(state, action) {
  switch (action.type) {
    case 'UP_COUNTER':
      return {...state, counter: state.counter + 1};
    case 'DOWN_COUNTER':
      return {...state, counter: state.counter - 1};

    default:
      return state;
  }
}

const App = () => {
  return (
    <Provider store={createStore(reducers, initialState)}>
      <View style={styles.container}>
        <First />
        <Second />
      </View>
    </Provider>
  );
};

const First = () => {
  const counter = useSelector(select => select.counter);
  const dispatch = useDispatch();

  const counterUp = () => {
    dispatch({type: 'UP_COUNTER'});
  };
  const counterDown = () => {
    dispatch({type: 'DOWN_COUNTER'});
  };

  return (
    <View style={styles.first_container}>
      <Text style={styles.counter_text}>Counter : {counter}</Text>
      <View style={styles.button_container}>
        <TouchableOpacity style={styles.upButton} onPress={counterUp}>
          <Text style={styles.button_text}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.downButton} onPress={counterDown}>
          <Text style={styles.button_text}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Second = () => {
  const counter = useSelector(select => select.counter);
  return (
    <View style={styles.second_container}>
      <Text style={styles.counter_text}>Counter : {counter}</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282929',
  },
  first_container: {
    flex: 1,
    backgroundColor: '#2d2e2e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  second_container: {
    flex: 1,
    backgroundColor: '#4d4d4d',
    justifyContent: 'center',
    alignItems: 'center',
  },
  upButton: {
    backgroundColor: '#00611a',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 40,
  },
  downButton: {
    backgroundColor: '#960303',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 40,
  },
  button_text: {
    color: 'white',
    fontSize: 20,
    paddingHorizontal: 30,
    paddingVertical: 7,
  },
  counter_text: {
    color: 'white',
    fontSize: 25,
  },
  button_container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 200,
  },
});
