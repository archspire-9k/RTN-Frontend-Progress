import { View, Button, TextInput, StyleSheet } from 'react-native';
import { Header } from '../components';
import { COLORS } from '../../constants';
import { useState } from "react";
import { addTodo } from '../../redux/actions';
import { useDispatch } from 'react-redux';


const AddScreen = ({ navigation }) => {

    const dispatch = useDispatch();
    const [task, setTask] = useState('');

    const handleAddTodo = () => {
        dispatch(addTodo(task))
        setTask('')
        navigation.goBack()
    }

    return (
        <View style={styles.container
        }>
            <Header title="Add Item" titleStyle={{ color: COLORS.black }} />

            <TextInput
                placeholder='Todo ..'
                value={task}
                onChangeText={task => setTask(task)} 
                style={styles.input} />
            <View style={[styles.options]}>
                <Button title="reset" color={COLORS.black} onPress={() => setTask("")}/>
                <View style={{ width: 100 }}/>
                <Button title="add" color={COLORS.black} onPress={handleAddTodo}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: COLORS.lightGray2
    },
    item: {
        backgroundColor: 'green',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    options: {
        flexDirection: 'row'
    },
    input: {
        backgroundColor: COLORS.lightGray1,
        width: "80%",
        borderRadius: 12,
        marginBottom: 20
    }
});

export default AddScreen;