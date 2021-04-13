import * as React from 'react';
import {Intro, Loader, RNVideo} from '../components';
import {View, FlatList, Text, StyleSheet} from 'react-native';

export default function Home() {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [scroll, setScroll] = React.useState(1);

  React.useEffect(() => {
    console.log('Pagination ', scroll);
    setLoading(true);
    getData();
    return () => {};
  }, [scroll]);

  const getData = async () => {
    const URL =
      'https://jsonplaceholder.typicode.com/photos?_limit=10&_page=' + scroll;
    await fetch(URL)
      .then(res => res.json())
      .then(result => {
        let shallowClone = [...result];
        let updateArray = shallowClone.map(v => ({
          ...v,
          video: 'https://www.youtube.com/embed/MtrByL3I2gA',
          recordingTime: '2:45 mins',
        }));
        console.log(updateArray);
        setData(data.concat(updateArray));
        setLoading(false);
      });
  };

  const bottomLoader = () => {
    return loading ? <Loader /> : null;
  };

  const handleLoad = () => {
    setScroll(scroll + 1);
    setLoading(true);
  };

  return (
    <View>
      <View>
        <Intro title="Welcome to a sample pagination video app" />

        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          ListFooterComponent={bottomLoader}
          onEndReached={handleLoad}
          onEndReachedThreshold={0}
          renderItem={({item}) => (
            <View>
              <RNVideo
                image={item.url.replace(
                  item.url,
                  'https://images.pexels.com/photos/1600757/pexels-photo-1600757.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
                )}
                videoSrc={item.video}
              />
              <Text style={styles.text}>
                {item.title.replace(
                  item.title,
                  `DASH CAM CLEVELAND ${item.id} with recording time of ${item.recordingTime}`,
                )}
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 10,
    marginBottom: 20,
    fontWeight: 'bold',
  },
});
