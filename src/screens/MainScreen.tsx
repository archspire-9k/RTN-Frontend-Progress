import { View, Text, FlatList, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import { Header, TodoItem } from "../components"

const DATA = [
  {
    id: '1',
    title: 'First Item',
  },
  {
    id: '2',
    title: 'Second Item',
  },
  {
    id: '3',
    title: 'Third Item',
  },
];

type ItemProps = { title: string };

const Item = ({ title }: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const MainScreen = () => (
  <SafeAreaView style={styles.container}>
    <Header />
    <FlatList
      data={DATA}
      renderItem={({ item }) => <TodoItem title={item.title} />}
      keyExtractor={item => item.id}
    />

  </SafeAreaView>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
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
});

export default MainScreen;